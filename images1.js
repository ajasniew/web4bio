// if you're creating the image object entirely in JavaScript, you can safely draw the image on the canvas during
// the Image.onload event
var canvas = document.getElementById("f");
var context = canvas.getContext("2d");
var tile = new Image();
tile.src = "https://ajasniew.github.io/images/ImageGeneral/TCGA-DU-7309-01Z-00-DX1_52577_21739_400_400-1-0_Ex3.PNG";
tile.onload = function () {
	context.drawImage(tile, 0, 0);
};