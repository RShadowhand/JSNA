function Player(x, y, w, h, c) {
	var g = this; // Needed for scoping.
	
	// Write your initalizing code here.
	// They'll be ran when you create an instance of this object.
	g.init = function(x, y, w, h, c){
		g.rect = new Rectangle(x,y,w,h);

		g.x = x;
		g.y = y;
		g.w = w;
		g.h = h;
		g.c = c;
	}
	
	var sprite;
	// Load your content for this object here.
	// Call this from game's loadContent()
	g.loadContent = function(){
		
	}

	// Call this from your game update().
	// Pass Keyboard from the game if you want to let this object control itself.
	var mLock = false;
	g.update = function (k, m) {
		if (k.IsKeyDown("ArrowUp")) {
			g.y -= 5;
		}
		if (k.IsKeyDown("ArrowDown")) {
			g.y += 5;
		}
		if (k.IsKeyDown("ArrowLeft")) {
			g.x -= 5;
		}
		if (k.IsKeyDown("ArrowRight")) {
			g.x += 5;
		}
	
		m.onClick("Left", 
			function(){
				if(m.Rectangle.Intersects(g.rect)){
					console.log("clicked on red!");
				}
			}
		);

		m.onClick("Middle", 
			function(){
				if(m.Rectangle.Intersects(g.rect)){
					console.log("clicked on middlered!");	
				}
			}
		);

		if (m.AnyButtonDown()) {
			mLock = true;
		}
		else {
			mLock = false;
		}

		g.rect.moveToCoords(g.x, g.y);
	}
	
	// Call this from your game draw().
	// It can draw itself if you pass canvas to it.
	g.draw = function (sb) {
		sb.DrawRect(g.rect, g.c);
		//sb.DrawString(Font("Arial", 16, true, true), (new Vector2(10,10)), g.rect.x.toString() + " - " + g.rect.Right.toString(), "white");
	}

	this.init(x, y, w, h, c);
}