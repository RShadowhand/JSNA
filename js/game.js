function game(){
	var g = this; // Needed for scoping.

	g.init = function(){
		g.k = new Keyboard();
		g.recanvas(); // Fix the draw space.
		g.loadContent(); // Load the content for your objects.

		{ /* Your init code here. */

		}

		var DESIRED_FRAMES = 60; // How many FPS do we want?
		var RENDER_TIME = 1000 / DESIRED_FRAMES; // Calculate the time it would take to render.
	    g.loop = setInterval(g.update, RENDER_TIME); // Start the game logic.
	}

	g.recanvas = function(){
		surface = document.getElementById("canvas"); // Get Canvas.
		canvas = surface.getContext("2d"); // Get Context (2D).
		surface.width = window.innerWidth; // Set width.
	   	surface.height = window.innerHeight; // Set height.
	}

	// Declare your variables as empty outside loadContent(), 
	// then finalize them in loadContent. This way it'll be in the game's scope.
	var player;
	g.loadContent = function (argument) {
		player = new Player(10, 650, 10, 10, "red");
	}
	
	g.update = function(){
		{ /* Game logic */ 
			player.update(g.k);
		}

		{ /* Prepare the screen. */
			g.prepareScreen(); 	
		}
	}

	g.prepareScreen = function() {
		{ /* Clear the screen first */ 
			canvas.fillStyle = "black";
			canvas.fillRect(0,0, surface.width, surface.height);
		}

		{ /* Then send to drawing. */ 
			g.draw();
		}
	}

	// Fill the screen!
	g.draw = function() {
		player.draw(canvas);
	}

	this.init(); // Initialize the game.
}

var app = new game(); // Create a new instance of game, which also initializes itself immediately.