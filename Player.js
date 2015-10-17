function Player(x, y, w, h, c) {
	var g = this; // Needed for scoping.
	
	// Write your initalizing code here.
	// They'll be ran when you create an instance of this object.
	g.init = function(x, y, w, h, c){
		g.x = x;
		g.y = y;
		g.w = w;
		g.h = h;
		g.c = c;
	}
	
	// Load your content for this object here.
	// Call this from game's loadContent()
	g.loadContent = function(){

	}

	// Call this from your game update().
	// Pass Keyboard from the game if you want to let this object control itself.
	g.update = function (k) {
		if (k.Keys.indexOf("ArrowUp") > -1) {
			g.y -= 5;
		}
		if (k.Keys.indexOf("ArrowDown") > -1) {
			g.y += 5;
		}
		if (k.Keys.indexOf("ArrowLeft") > -1) {
			g.x -= 5;
		}
		if (k.Keys.indexOf("ArrowRight") > -1) {
			g.x += 5;
		}
	}
	
	// Call this from your game draw().
	// It can draw itself if you pass canvas to it.
	g.draw = function (canvas) {
		canvas.fillStyle = c;
		canvas.fillRect(g.x, g.y, g.w, g.h);
	}

	this.init(x, y, w, h, c);
}