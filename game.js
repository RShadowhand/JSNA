function game(){
	var g = this; // Needed for scoping.

	g.recanvas = function(){
		surface = document.getElementById("canvas"); // Get Canvas.
		canvas = surface.getContext("2d"); // Get Context (2D).
		surface.width = window.innerWidth; // Set width.
	   	surface.height = window.innerHeight; // Set height.
	}

	g.init = function(){
		g.k = new Keyboard();

		g.recanvas(); // Fix the draw space.
		g.loadContent();
	    g.loop = setInterval(g.update, 60); // Start the game logic.
	}

	var player;
	g.loadContent = function (argument) {
		player = new Player(10, 650, 10, 10, "red");
	}
	
	g.update = function(){
		/* Game logic */ {
			player.update(g.k);
		}

		/* Prepare the screen. */ {
			g.prepareScreen(); 	
		}
	}

	g.prepareScreen = function() {
		/* Clear the screen first */ {
			canvas.fillStyle = "black";
			canvas.fillRect(0,0, surface.width, surface.height);
		}

		/*Then send to drawing.*/ {
			g.draw();
		}
	}
	
	g.draw = function() /* Fill the screen! */ {
		player.draw(canvas);
	}

	this.init(); // Initialize the game.
}

var app = new game(); // Create a new instance of game, which also initializes itself immediately.