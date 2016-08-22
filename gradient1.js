function createLinerGradient() {
	
	
	
	//find the canvas element
	var d_canvas = document.getElementById("d");
	
	//find drawing context
	var context = d_canvas.getContext("2d");
	
	//define gradient
	//A gradient - is a smooth transiton between two or more colors
	// The canvas drawing context supports two types of gradients;
	// 1. createLinearGradient(x0, y0, x1, y1) paints along a line from x0, y0) to (x1, y1)
	
	//create a gradient object
	// because the y values (the 2ND and 4TH parameters) are both 0, this gradient will shade evenly from left to right
	var my_gradient = context.createLinearGradient(0, 0, 300, 0); 
	
	//once we have a gradient object, we can define the gradient's colors.  A gradient has two or more color stops.  Color
	//stops can be anywhere along the gradient.  To add a color stop, you need to specify its position along the gradient.
	//Gradient positions can be anywhere between 0 to 1
	// Let's define a gradient that shades from black to white
	//Let's define a gradient that shades from black to white
	my_gradient.addColorStop(0, "black");
	my_gradient.addColorStop(1. "white");
	
	//Defining a gradient doesn't draw anything on the canvas. It's just an object tucked away in memory somewhere.
	//To draw a gradient, you set your fillStyle to the gradient and draw a shape, like a rectangle or a line
	
	//fill style is a gradient
	context.fillStyle = my_gradient;
	context.fillRect(0, 0, 300, 225);
	
}