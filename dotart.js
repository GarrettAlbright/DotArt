'use strict';
let DotArt = {};

DotArt.maxCharCount = 1992;
DotArt.verticalGap = 1;
DotArt.horizontalGap = 1;
// https://en.wikipedia.org/wiki/Relative_luminance
DotArt.rScale = .2126;
DotArt.gScale = .7152;
DotArt.bScale = .0722;
DotArt.dotToHex = [0x1, 0x8, 0x2, 0x10, 0x4, 0x20, 0x40, 0x80];
DotArt.scaledImageData;

DotArt.init = function() {
  document.getElementById('file-input').addEventListener('change', function(e) {
    e.preventDefault();
    this.scaledImageData = null;
    let uploadedImage = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function(e) {
      let image = new Image();
      image.addEventListener('load', function(e) {
        let charWidth = Math.ceil(image.width / (2 + this.verticalGap));
        let charHeight = Math.ceil(image.height / (8 + this.horizontalGap));
        let targetWidth = image.width;
        let targetHeight = image.height;
        let isTaller = image.height > image.width;
        let aspectRatio = targetWidth / targetHeight;
        // @todo factor line breaks when calculating character count
        while (charWidth * charHeight > this.maxCharCount) {
          if (isTaller) {
            targetWidth--;
            targetHeight = Math.round(targetWidth * (1 / aspectRatio));
          }
          else {
            targetHeight--;
            targetWidth = Math.round(targetHeight * aspectRatio);
          }
          charWidth = Math.ceil(targetWidth / (2 + verticalGap));
          charHeight = Math.ceil(targetHeight / (8 + horizontalGap));
        }
        // Scale image via canvas
        let canvas = document.createElement('canvas');
        canvas.setAttribute('width', targetWidth);
        canvas.setAttribute('height', targetHeight);
        let canvasContext = canvas.getContext('2d');
        canvasContext.drawImage(image, 0, 0, targetWidth, targetHeight);
        
        let string = "";
        for (var charY = 0; charY < charHeight; charY++) {
          let yPixel = charY * (8 + this.horizontalGap);
          for (var charX = 0; charX < charWidth; charX++) {
            let xPixel = charX * (2 + this.verticalGap);
            // https://en.wikipedia.org/wiki/Relative_luminance
            let colors = canvasContext.getImageData(xPixel, yPixel, 2, 8).data;
            let char = 0x2800;
            for (var pip = 0; pip < 8; pip++) {
              let offset = pip * 4;
              // Convert to grayscale, then b&w
              let grayVal = (colors[offset] * this.rScale) + (colors[offset + 1] * this.gScale) + (colors[offset] * this.bScale);
              if (grayVal > 127) {
                char += dotToHex[pip];
              }
            }
            string += String.fromCharCode(char);
          }
          string += "\n";
        }
//         console.log(string);
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
