// an <img> element, a <canvas> element
// The canvas drawing context defines a drawImage() method for drawing an image on a canvas.
// The method can take three, five, or nine arguments.  Examples:
// drawImage(image, dx, dy) takes an image and draws it on the canvas.  The given coordinates (dx, dy) will be the
// upper-left corner of the image.  Coordinates (0, 0) would draw the image at the upper-left corner of the canvas.
// dreawImage(image, dx, dy, dw, dh) takes an image, scales it to a width of dw and a height of dh, and draws it on
// the canvas at coordinates (dx, dy).
// drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) takes an image, clips it to the rectangle (sx, sy, sw, sh), scales
// it to dimensions (dw, dh), and draws it on the canvas at coordinates (dx, dy).

// The HTML5 specification explain the drawImage() parameters
// The source rectangle is the rectangle [within the source image] whose corners are the four points (sx, sy),
// (sx+sw, sy), (sx+sw, sy+sh), (sx, sy+sh).
// The destination rectangle is the rectangle [within the canvas] whose corners are the four points (dx, dy),
// (dx+dw, dy), (dx+dw, dy+dh), (dx, dy+dh).
// To draw an image on a canvas, you need an image.  The image can be an existing <img> element, or you can create an Image() object with JavaScript.
// Either way, you need to ensure that the image is fully loaded before you can draw it on the canvas

// if you're using ans existing <img> element, you can safely draw it on the canvas during the window.onload event
// https://ajasniew.github.io/images/ImageGeneral/TCGA-DU-7309-01Z-00-DX1_52577_21739_400_400-1-0_Ex3.PNG

window.onload = function() {
	var canvas = document.getElementById("e");
	var context = canvas.getContext("2d");
	var tile = document.getElementById("tile");
	context.drawImage(tile, 0, 0);
};