function game(){
	var g = this; // Needed for scoping.
	
	var DESIRED_FRAMES = 60; // How many FPS do we want?
	var RENDER_TIME = 1000 / DESIRED_FRAMES; // Calculate the time it would take to render.
	
	g.init = function(){
		surface = document.getElementById("canvas"); // Get Canvas.
		canvas = surface.getContext("2d"); // Get Context (2D).
		surface.width = window.innerWidth; // Set width.
	   	surface.height = window.innerHeight; // Set height.
		
		g.k = new Keyboard();
		g.m = new Mouse();

		g.spriteBatch = new SpriteBatch(canvas);
		g.loadContent(); // Load the content for your objects.

		{ /* Your init code here. */

		}

	    g.loop = setInterval(g.update, RENDER_TIME); // Start the game logic.
	}

	// Declare your variables as empty outside loadContent(), 
	// then finalize them in loadContent. This way it'll be in the game's scope.
	var player;
	var font;
	g.loadContent = function (argument) {
		font = Font("Arial", 16);
		player = new Player(10, 650, 10, 10, "red");
		g.Player = player;
	}
	
	// Main loop.
	g.update = function(){
		player.update(g.k, g.m);

		g.draw(); //Draw!
	}

	// Fill the screen!
	g.draw = function() {
		g.spriteBatch.Clean("black");

		player.draw(g.spriteBatch);
	}

	this.init(); // Initialize the game.
}

var app = new game(); // Create a new instance of game, which also initializes itself immediately.