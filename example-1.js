/* © 2009 ROBO Design
 * http://www.robodesign.ro
 */
// draw on a Canvas requires several important steps:
// 1.  setting up your HTML document with a Canvas context (a <canvas> element with an id)
// 2. setting up your script to target that Canvas context and draw inside it
// 3. adding the required mouse event handlers for user interaction and associated logic
// 4. once the event handlers are in place, it's then fairly simple to add any desired functionality

// 5. Keep everything in anonymous function, called on window load.
if(window.addEventListener) {
window.addEventListener('load', function () {
  var canvas, context;

  // Initialization sequence.
  function init () {
    // Find the canvas element.
    canvas = document.getElementById('imageView');
    if (!canvas) {
      alert('Error: I cannot find the canvas element!');
      return;
    }

    if (!canvas.getContext) {
      alert('Error: no canvas.getContext!');
      return;
    }

    // Get the 2D canvas context.
    context = canvas.getContext('2d');
    if (!context) {
      alert('Error: failed to getContext!');
      return;
    }

    // Attach the mousemove event handler.
    canvas.addEventListener('mousemove', ev_mousemove, false);
  }

  // The mousemove event handler.
  // event.layer* / offset* properties to determine the mouse position relative to the <canvas> element
  // That's all we need to start drawing
  var started = false;
  function ev_mousemove (ev) {
    var x, y;

    // Get the mouse position relative to the canvas element.
    if (ev.layerX || ev.layerX == 0) { // Firefox
      x = ev.layerX;
      y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera
      x = ev.offsetX;
      y = ev.offsetY;
    }
	  
	  //display mouse position
	  document.getElementById("msg").innerHTML= x + ' ' + y;

    // The event handler works like a drawing pencil which tracks the mouse 
    // movements. We start drawing a path made up of lines.
    if (!started) {
      context.beginPath();
      context.moveTo(x, y);
      started = true;
    } else {
      context.lineTo(x, y);
      context.stroke();
    }
  }

  init();
}, false); }

// vim:set spell spl=en fo=wan1croql tw=80 ts=2 sw=2 sts=2 sta et ai cin fenc=utf-8 ff=unix:
