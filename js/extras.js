function Keyboard() {
	var g = this;
	g.Keys = [];

	function addKey(key){
		if (g.Keys.indexOf(key) < 0) {
			g.Keys.push(key);	
		};
	}
	function removeKey(key){
		g.Keys.splice(g.Keys.indexOf(key), 1);
	}

	window.addEventListener('keydown', function(e) { addKey(e.key); }, false);
	window.addEventListener('keyup', function(e) { removeKey(e.key); }, false);
}

function Rectangle(x,y,w,h) {
	var g = this;

	g.x = x;
	g.y = y;
	g.w = w;
	g.h = h;

	g.moveToCoords = function(x,y){
		g.x = x;
		g.y = y;
	}

	g.moveToVector = function(Vector2) {
		g.x	= Vector2.x;
		g.y	= Vector2.y;
	}

	g.Top = function() {
		return y;
	}
	g.Bottom = function() {
		return y+h;
	}
	g.Left = function() {
		return x;
	}
	g.Right = function() {
		return x+w;
	}
	g.HorizontalCenter = function() {
		return x+(w/2);
	}
	g.VerticalCenter = function() {
		return y+(h/2);
	}
	g.Center = function() {
		return new Vector2(x+(w/2), y+(h/2));
	}
}

function Vector2(x, y) {
	var g = this;

	g.x = x;
	g.y = y;	
}

function Font(FontName, Size, Bold, Italic) {
	var output = "";
	if (Bold == true) { output += "bold "};
	if (Italic == true) {output += "italic "};
	output += Size+"px ";
	output += FontName;

	return output;
}

function SpriteBatch(canvas) {
	var g = this;

	g.Clean = function(color){
		canvas.fillStyle = color;
		canvas.fillRect(0,0, surface.width, surface.height);
	}

	g.DrawRect = function(Rectangle, Color){
		canvas.fillStyle = Color;
		canvas.fillRect(Rectangle.x, Rectangle.y, Rectangle.w, Rectangle.h);
	}

	g.DrawString = function(Font, Vector2, Text, Color){
		canvas.fillStyle = Color;
		canvas.font = Font;
		canvas.fillText(Text, Vector2.x, Vector2.y);
	}
}