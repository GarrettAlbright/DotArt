'use strict';
let DotArt = {};

DotArt.maxCharCount = 1992;
DotArt.verticalGap = 1;
DotArt.horizontalGap = 1;
DotArt.charAspectRatio = .5;
// https://en.wikipedia.org/wiki/Relative_luminance
DotArt.rScale = .2126;
DotArt.gScale = .7152;
DotArt.bScale = .0722;
DotArt.dotToHex = [0x1, 0x8, 0x2, 0x10, 0x4, 0x20, 0x40, 0x80];
DotArt.currentGraymap;
DotArt.bwThreshold = 127;
DotArt.cellRows;
DotArt.cellColumns;
DotArt.targetWidth;
DotArt.targetHeight;
DotArt.image;

DotArt.init = function() {
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
  ['vert-gap', 'horiz-gap'].forEach(function (id) {
    document.getElementById(id).addEventListener('change', function(e) {
      DotArt.buildGraymap();
    });
  });
  document.getElementById('threshold').addEventListener('change', function(e) {
    DotArt.convertFromGraymap();
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
    cellWidth = cellHeight * DotArt.charAspectRatio;
    DotArt.cellRows = Math.ceil(DotArt.image.height / cellHeight);
    DotArt.cellColumns = Math.ceil(DotArt.image.width / cellWidth);
  } while ((DotArt.cellColumns + 1) * DotArt.cellRows > DotArt.maxCharCount);

  DotArt.horizontalGap = Number(document.getElementById('horiz-gap').value);
  DotArt.verticalGap = Number(document.getElementById('vert-gap').value);
  

  // Scale image via canvas
  let canvas = document.createElement('canvas');
  DotArt.targetHeight = (DotArt.cellRows * 8) + ((DotArt.cellRows - 1) * DotArt.horizontalGap);
  DotArt.targetWidth = (DotArt.cellColumns * 2) + ((DotArt.cellColumns - 1) * DotArt.verticalGap);
  canvas.setAttribute('width', DotArt.targetWidth);
  canvas.setAttribute('height', DotArt.targetHeight);
  let canvasContext = canvas.getContext('2d');
  canvasContext.drawImage(DotArt.image, 0, 0, DotArt.targetWidth, DotArt.targetHeight);
  
  // Build the graymap
  DotArt.currentGraymap = [];
  let imageData = canvasContext.getImageData(0, 0, DotArt.targetWidth, DotArt.targetHeight);
  let dataLen = imageData.data.length;
  for (var pixelOffset = 0; pixelOffset < dataLen; pixelOffset += 4) {
    // Treat non-opaque pixels as black
    let grayVal;
    if (imageData.data[pixelOffset + 3] < 255) {
      grayVal = 0;
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
  let threshold = Number(document.getElementById('threshold').value);
  for (var charY = 0; charY < DotArt.cellRows; charY++) {
    for (var charX = 0; charX < DotArt.cellColumns; charX++) {
      let character = 0x2800;
      let graymapOffset = ((charY * DotArt.targetWidth * (8 + DotArt.horizontalGap))) + (charX * (2 + DotArt.verticalGap));
      for (var pip = 0; pip < 8; pip++) {
        let graymapPos = graymapOffset + (Math.floor(pip / 2) * DotArt.targetWidth) + (pip % 2);
        if (DotArt.currentGraymap[graymapPos] > threshold) {
          character += DotArt.dotToHex[pip];
        }
      }
      string += String.fromCharCode(character);
    }
    string += "\n";
  }
  let textNode = document.createTextNode(string);
  let resultNode = document.getElementById('result');
  while (resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }
  resultNode.appendChild(textNode);
}

document.addEventListener('DOMContentLoaded', function() {
  DotArt.init();
});
