'use strict';
let DotArt = {};

DotArt.currentSettings = {
  charAspectRatio: .5
};
// https://en.wikipedia.org/wiki/Relative_luminance
DotArt.rScale = .2126;
DotArt.gScale = .7152;
DotArt.bScale = .0722;
DotArt.dotToHex = [0x1, 0x8, 0x2, 0x10, 0x4, 0x20, 0x40, 0x80];
// https://en.wikipedia.org/wiki/Ordered_dithering
// (reordered in pip order)
DotArt.orderedDitherMatrix = [0, 128, 192, 64, 48, 176, 240, 112, 32, 160, 224, 96, 16, 144, 208, 80];
DotArt.currentGraymap;
DotArt.cellRows;
DotArt.cellColumns;
DotArt.targetWidth;
DotArt.targetHeight;
DotArt.image;
DotArt.ditherTypes = {
  NONE: 0,
  ORDERED: 1,
  ATKINSON: 2,
  FS: 3
};

DotArt.init = function() {
/*
  document.getElementById('file-input').addEventListener('change', function(e) {
    e.preventDefault();
    let uploadedImage = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function(e) {
      DotArt.image = new Image();
      DotArt.image.addEventListener('load', function(e) {
        DotArt.buildGraymap();
      });
      DotArt.image.src = e.target.result;
    });
    reader.readAsDataURL(uploadedImage);
  });
*/

  let theForm = document.forms[0];

  theForm.addEventListener('change', function(e) {
    [
      ['vert-gap', 'vertGap'],
      ['horiz-gap', 'horizGap'],
      ['char-count', 'maxCharCount'],
      ['threshold', 'threshold']
    ].forEach(function (field) {
      DotArt.currentSettings[field[1]] = Number(theForm.querySelector('input[name=' + field[0] + ']').value);
    });
    switch (theForm.querySelector('input[name=dither]:checked').value) {
      case 'ordered':
        DotArt.currentSettings.ditherType = DotArt.ditherTypes.ORDERED;
        break;
      case 'atkinson':
        DotArt.currentSettings.ditherType = DotArt.ditherTypes.ATKINSON;
        break;
      default:
        DotArt.currentSettings.ditherType = DotArt.ditherTypes.NONE;
    }
    DotArt.currentSettings.bonw = theForm.querySelector('input[name=coloring]:checked').value == 'bonw';

    let elName = e.target.getAttribute('name');
    if (elName == 'file-input') {
      e.preventDefault();
      let uploadedImage = e.target.files[0];
      let reader = new FileReader();
      reader.addEventListener('load', function(e) {
        DotArt.image = new Image();
        DotArt.image.addEventListener('load', function(e) {
          DotArt.buildGraymap();
        });
        DotArt.image.src = e.target.result;
      });
      reader.readAsDataURL(uploadedImage);
    }
    else if (['vert-gap', 'horiz-gap', 'char-count'].indexOf(elName) != -1) {
      DotArt.buildGraymap();
    }
    else if (['coloring', 'threshold', 'dither'].indexOf(elName) != -1) {
      DotArt.convertFromGraymap();
    }
  });

  document.getElementById('copy-to-clip').addEventListener('click', function(e) {
    // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    let text = document.getElementById('result').getElementsByTagName('pre')[0].firstChild.textContent;
    let ta = document.createElement('textarea');
    document.body.appendChild(ta);
    ta.value = text;
    ta.focus();
    ta.select();
    let success = false;
    try {
      success = document.execCommand('copy');
    }
    catch (error) {
      success = false;
    }
    e.target.value = success ? 'Copied!' : 'Copy failed';
    window.setTimeout(function() {
      e.target.value = 'Copy to clipboard';
    }, 3000);
    document.body.removeChild(ta);
  });
};

DotArt.buildGraymap = function() {
  // Determine the smallest size of rectangles with the aspect ratio of
  // the braille charaters which will give us a number of rectangles
  // smaller than the limit
  let cellHeight = 0;
  let cellWidth;
  do {
    cellHeight++;
    cellWidth = cellHeight * DotArt.currentSettings.charAspectRatio;
    DotArt.cellRows = Math.ceil(DotArt.image.height / cellHeight);
    DotArt.cellColumns = Math.ceil(DotArt.image.width / cellWidth);
  } while ((DotArt.cellColumns + 1) * DotArt.cellRows > DotArt.currentSettings.maxCharCount);  

  // Scale image via canvas
  let canvas = document.createElement('canvas');
  DotArt.targetHeight = (DotArt.cellRows * 8) + ((DotArt.cellRows - 1) * DotArt.currentSettings.horizGap);
  DotArt.targetWidth = (DotArt.cellColumns * 2) + ((DotArt.cellColumns - 1) * DotArt.currentSettings.vertGap);
  canvas.setAttribute('width', DotArt.targetWidth);
  canvas.setAttribute('height', DotArt.targetHeight);
  let canvasContext = canvas.getContext('2d');
  canvasContext.drawImage(DotArt.image, 0, 0, DotArt.targetWidth, DotArt.targetHeight);
  
  // Build the graymap
  DotArt.currentGraymap = [];
  let imageData = canvasContext.getImageData(0, 0, DotArt.targetWidth, DotArt.targetHeight);
  let dataLen = imageData.data.length;
  let bonw = document.getElementById('coloring-bonw').checked;
  for (var pixelOffset = 0; pixelOffset < dataLen; pixelOffset += 4) {
    let grayVal;
    // Treat non-opaque pixels as "empty"
    if (imageData.data[pixelOffset + 3] < 255) {
      grayVal = bonw ? 0 : 255;
    }
    else {
      grayVal = (imageData.data[pixelOffset] * DotArt.rScale) + (imageData.data[pixelOffset + 1] * DotArt.gScale) + (imageData.data[pixelOffset + 2] * DotArt.bScale);
    }
    DotArt.currentGraymap.push(grayVal);
  }
/*
  let previewCanvas = document.getElementById('canvas');
  previewCanvas.setAttribute('width', DotArt.targetWidth);
  previewCanvas.setAttribute('height', DotArt.targetHeight);
  let previewContext = previewCanvas.getContext('2d');
  for (var px = 0; px < DotArt.currentGraymap.length; px++) {
    let y = Math.floor(px / DotArt.targetWidth);
    let x = px % DotArt.targetWidth;
    let currentGray = DotArt.currentGraymap[px];
    previewContext.fillStyle = 'rgb(' + currentGray + ',' + currentGray + ',' + currentGray + ')';
    previewContext.fillRect(x, y, 1, 1);
    if (y > 0) {
      continue;
    }
  }
*/
  DotArt.convertFromGraymap();
};

DotArt.convertFromGraymap = function() {
  if (DotArt.currentGraymap == null) {
    return;
  }
  let string = "";
  let rowWidth = DotArt.cellColumns * 2;
/*
  let dither = document.getElementById('dither').checked;
  let threshold = Number(document.getElementById('threshold').value);
  let bonw = document.getElementById('coloring-bonw').checked;
*/
  // Because JavaScript doesn't provide a way to copy a reference variable
  let localGraymap = [];
  DotArt.currentGraymap.forEach(function(val) {
    localGraymap.push(val);
  });
  for (var charY = 0; charY < DotArt.cellRows; charY++) {
    string += "\n";
    for (var charX = 0; charX < DotArt.cellColumns; charX++) {
      let character = 0x2800;
      let graymapOffset = ((charY * DotArt.targetWidth * (8 + DotArt.currentSettings.horizGap))) + (charX * (2 + DotArt.currentSettings.vertGap));
      let ditherMatrixOffset = charX % 2 ? 0 : 8;
      for (var pip = 0; pip < 8; pip++) {
        let graymapPos = graymapOffset + (Math.floor(pip / 2) * DotArt.targetWidth) + (pip % 2);
        let grayShade = localGraymap[graymapPos];
        if (DotArt.currentSettings.ditherType == DotArt.ditherTypes.ATKINSON) {
          let target = grayShade > DotArt.currentSettings.threshold ? 255 : 0;
          let error = grayShade - target;
          if (error == 0) {
            continue;
          }
          let errorPart = error / 8;

          // Error distribution map where x = 1/8 of the error:
          // [ ] [*] [x] [x]
          // [x] [x] [x] [ ]
          // [ ] [x] [ ] [ ]
          // We need to get X and Y values of the pixels so that we don't go off
          // the edges.
          let yPos = Math.floor(graymapPos / DotArt.targetWidth);
          let xPos = graymapPos - (yPos * DotArt.targetWidth);
          if (xPos + 1 < DotArt.targetWidth) {
            localGraymap[graymapPos + 1] += errorPart;
            if (xPos + 2 < DotArt.targetWidth) {
              localGraymap[graymapPos + 2] += errorPart;
            }
          }
          if (yPos + 1 < DotArt.targetHeight) {
            localGraymap[graymapPos + DotArt.targetWidth] += errorPart;
            if (xPos - 1 >= 0) {
              localGraymap[graymapPos + DotArt.targetWidth - 1] += errorPart;
            }
            if (xPos + 1 < DotArt.targetWidth) {
              localGraymap[graymapPos + DotArt.targetWidth + 1] += errorPart;
            }
            if (yPos + 2 < DotArt.targetHeight) {
              localGraymap[graymapPos + (DotArt.targetWidth * 2)] += errorPart;
            }
          }
          
          if ((target == 255 && !DotArt.currentSettings.bonw) || (target == 0 && DotArt.currentSettings.bonw)) {
            character += DotArt.dotToHex[pip];
          }
        }
        else {
          let localThreshold = DotArt.currentSettings.threshold;
          if (DotArt.currentSettings.ditherType == DotArt.ditherTypes.ORDERED) {
            localThreshold += DotArt.orderedDitherMatrix[ditherMatrixOffset + pip] - 127;
          }
          if ((!DotArt.currentSettings.bonw && grayShade > localThreshold) || (DotArt.currentSettings.bonw && grayShade < localThreshold)) {
            // Make a dot
            character += DotArt.dotToHex[pip];
          }
        }
      }
      string += String.fromCharCode(character);
    }
  }
  // Strip off first "\n"
  let textNode = document.createTextNode(string.substring(1));
  let resultNode = document.getElementById('result');
  resultNode.setAttribute('class', DotArt.currentSettings.bonw ? 'bonw' : 'wonb');
  let preNode = resultNode.getElementsByTagName('pre')[0];
  while (preNode.firstChild) {
    preNode.removeChild(preNode.firstChild);
  }
  preNode.appendChild(textNode);
}

document.addEventListener('DOMContentLoaded', function() {
  DotArt.init();
});
