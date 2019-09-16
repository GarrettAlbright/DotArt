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

DotArt.init = function() {
  document.getElementById('file-input').addEventListener('change', function(e) {
    e.preventDefault();
    let uploadedImage = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function(e) {
      let image = new Image();
      image.addEventListener('load', function(e) {
        // Determine the smallest size of rectangles with the aspect ratio of
        // the braille charaters which will give us a number of rectangles
        // smaller than the limit
        let cellHeight = 0;
        let cellWidth;
        let cellRows;
        let cellColumns;
        do {
          cellHeight++;
          cellWidth = cellHeight * DotArt.charAspectRatio;
          cellRows = Math.ceil(image.height / cellHeight);
          cellColumns = Math.ceil(image.width / cellWidth);
        } while ((cellRows + 1) * cellColumns > DotArt.maxCharCount);
        
        // Scale image via canvas
        let canvas = document.createElement('canvas');
        let targetHeight = cellRows * 8;
        let targetWidth = cellColumns * 2;
        canvas.setAttribute('width', targetWidth);
        canvas.setAttribute('height', targetHeight);
        let canvasContext = canvas.getContext('2d');
        canvasContext.drawImage(image, 0, 0, targetWidth, targetHeight);
        
        // Do b&w conversion
        let imageData = canvasContext.getImageData(0, 0, targetWidth, targetHeight);
        let dataLen = imageData.data.length;
        for (var pixelPos = 0; pixelPos < dataLen; pixelPos += 4) {
          // Treat non-opaque pixels as black
          let grayVal;
          if (imageData.data[pixelPos + 3] < 255) {
            grayVal = 0;
          }
          else {
            grayVal = (imageData.data[pixelPos] * DotArt.rScale) + (imageData.data[pixelPos + 1] + DotArt.gScale) + (imageData.data[pixelPos + 2] * DotArt.bScale);
          }
          imageData.data[pixelPos] = imageData.data[pixelPos + 1] = imageData.data[pixelPos + 2] = (grayVal > 127 ? 255 : 0);
        }
        canvasContext.putImageData(imageData, 0, 0);
        let string = "";
        for (var charY = 0; charY < cellRows; charY++) {
          let yPixel = charY * 8;
          for (var charX = 0; charX < cellColumns; charX++) {
            let xPixel = charX * 2;
            let cell = canvasContext.getImageData(xPixel, yPixel, 2, 8).data;
            let character = 0x2800;
            for (var pip = 0; pip < 8; pip++) {
              if (cell[pip * 4] == 255) {
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
      });
      image.src = e.target.result;
    });
    reader.readAsDataURL(uploadedImage);
  });
};

document.addEventListener('DOMContentLoaded', function() {
  DotArt.init();
});
