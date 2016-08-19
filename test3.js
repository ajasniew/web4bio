// NOTES: canvas coordinates
// The canvas is a two-dimensional grid.  The cooordinate (0,0) is at the upper-left corner of the canvas.
// Along the X-axis, values increase towards the right edge of the canvas
// Along the Y-axis, values increase towards the bottom edge of the canvas
function draw_b() {
    var b_canvas = document.getElementById("b");
    //drawing context (where all the drawing methods and properties are defined)
    var b_context = b_canvas.getContext("2d");
    //calling the fillRect() method draws the rectangle and fills it with the current fill style (default - black)
    //the rectangle is bounded by its upper-left corner (50, 25), its width (150), its height (100)
    b_context.fillRect(50, 25, 150, 100); 
}

function reset_b(){
    var b_canvas = document.getElementById("b");
    var c_canvas = document.getElementById("c");
    b_canvas.width = b_canvas.width;
    c_canvas.width = c_canvas.width;
}

//NOTES:  Each canvas has a path.  Defining the path is like drawing with a pencil.  You can draw whatever you like, but it
//won't be part of the finished product until you pick up the quill and trace over your path in ink
//To draw straight lines in pencil, you use the following two methods:
//1.  moveTo(x, y)  - moves the pencil to the specified strting point
//2. lineTo(x, y)  - draws a line to the specified ending point
// The more you call moveTo() and lineTo(), the bigger the path gets.  These are "pencil" methods - you can call them as often as you like,
// but you won't see anything on the canvas until you call one of the "ink"

function drawLine_c() {
    var c_canvas = document.getElementById("c");
    var context = c_canvas.getContext("2d");
    
    //Let's begin by drawing the off-white grid
    //draw vertical lines
    //start from  0.5 ( the browser will draw a line covering 0.5 screen pixels on either side of x=1.5)
    for (var x = 0.5; x < 500; x += 10) {
        
        context.moveTo(x, 0);               //pencil method
        context.lineTo(x, 375);             //pencil method
    }
    
    //draw horizontal lines 
    for (var y = 0.5; y < 375; y += 10) {
        
        context.moveTo(0, y);                //pencil method
        context.lineTo(500, y);              //pencil method
    }
    
    //we need an "ink" method to make it permanent
    context.strokeStyle = "#eee";    // strokeStyle - controls the color of the lines
    context.stroke();                // is one of the "ink" methods (it takes the complex path you defined with all those meveTo()
                                     // and lineTo() calls, and actually draws it on the canvas).
    
    //draw the horizontal arrow (in a different color ink - black instead of  off-white -- so we need to start a new path)
    //start a new path
    context.beginPath();
    context.moveTo(0, 40);
    context.lineTo(240, 40);
    context.moveTo(260, 40);
    context.lineTo(500, 40);
    context.moveTo(495, 35);
    context.lineTo(500, 40);
    context.lineTo(495, 45);
    
    //since the vertical arrow is the same color as the horizontal arrow, we do not need to start another new path
    //the two arrows will be part of the same path
    context.moveTo(60, 0);
    context.lineTo(60, 153);
    context.moveTo(60, 173);
    context.lineTo(60, 375);
    context.moveTo(65, 370);
    context.lineTo(60, 375);
    context.lineTo(55, 370);
    
    //reset strokeStyle to black
    context.strokeStyle = "#000";
    //draw the lines on the canvas
    context.stroke();
    
    //draw text on a canvas; unlike text on the surrounding web page, there is no box model (no floats, no margins, no padding, no word wrapping)
    // can set a fer font attributes, then you pick a point on the canvas and draw your text there
    //font attributes: font style, font variant, font weight, font size, line height, font family
    //textAlign controls text alignment(start, end, left, right, and center)
    //textBaseline controls where the text is drawn relative to the starting point.  Possible values are top, hanging, middle, alphabetic, ideographic, or bottom
    //For simple alphabets like English, you can safely stick with top, middle, or botttom for the textBaseline property
    //text drawn inside the canvas inherits the font size and style of the <canvas> element itself, but you can override this by setting the font property on the drawing context
    
    //change the font style
    context.font = "bold 12 px sans-serif";
    // the fillText() method draws the actual text
    context.fillText("x", 248, 43);
    context.fillText("y", 58, 165);
    
    //
    
    //the <canvas> element itself has a computed font size based on your page's CSS rules
    //if you set the context.font property to a relative font size like 1.5em or 150% your browser multiples this by the computed font size of the <canvas> element iself
	
	//use textBaseline ex:
	//for the text in the upper-left corner (the text to be at y = 5; if you don't want to measure the height of the text and calculate the baseline)
	//Instead, I can set textBaseline to top and pass in the upper-left coordinate of the text's bounding box
	context.textBaseline = "top";
	context.fillText("( 0, 0)", 8, 5);
    
	//can set textAling to right and textBaseline to bottom, then call fillText() with the bottom-right coordinates of the text's bounding box
	context.textAlign = "right";
	context.textBaseline = "bottom";
	context.fillText(" ( 500, 375 )", 492, 370);
	
	//cheat and draw  dots as rectangles
	context.fillRect(0, 0, 3, 3);
	context.fillRect(497, 372, 3, 3);
    
}
