// Class template, to create your own classes
function Obj(args) {
	var g = this; // Needed for scoping.

	// Write your initalizing code here.
	// They'll be ran when you create an instance of this object.
	g.init = function(args){

	}

	// Load your content for this object here.
	// Call this from game's loadContent()
	g.loadContent = function(){

	}

	// Call this from your game update().
	// Pass Keyboard from the game if you want to let this object control itself.
	g.update = function (Keyboard) {
		
	}
	
	// Call this from your game draw().
	// It can draw itself if you pass canvas to it.
	g.draw = function (spriteBatchs) {

	}

	this.init(args); // Initialize the object.
}