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

	g.IsKeyDown = function(key){
		//console.log(g.Keys);
		return (g.Keys.indexOf(key) > -1)
	}
	g.IsKeyUp = function(key){
		return (g.Keys.indexOf(key) < 0)
	}

	window.addEventListener('keydown', function(e) { addKey(e.key); }, false);
	window.addEventListener('keyup', function(e) { removeKey(e.key); }, false);
}

function Mouse() {
	var g = this;
	g.Keys = [];

	var buttonScheme = {0: [], 1: ["Left"], 2: ["Right"], 3:["Left","Right"], 4: ["Middle"], 5: ["Left","Middle"], 6: ["Right","Middle"], 7: ["Left","Right","Middle"]};
	g.Buttons = buttonScheme[0];
	g.Rectangle = new Rectangle(0,0,1,1);

	g.IsButtonDown = function(button){
		return (g.Buttons.indexOf(button) > -1);
	}
	g.IsButtonUp = function(button){
		return (g.Buttons.indexOf(button) < 0);
	}
	g.AnyButtonDown = function(){
		return (g.Buttons.length > 0)
	}

	function setKeys(key){
		g.Buttons = buttonScheme[key];
	}

	function changePos(e){
		g.x = e.clientX;
		g.y = e.clientY;
		g.Rectangle.moveToCoords(g.x, g.y);
	}
	window.addEventListener('mousedown', function(e) { setKeys(e.buttons); }, false);
	window.addEventListener('mouseup', function(e) { setKeys(e.buttons); }, false);
	window.addEventListener('mousemove', function(e) { changePos(e); }, false);
}

function Rectangle(x,y,w,h) {
	var g = this;

	g.x = x;
	g.y = y;
	g.w = w;
	g.h = h;
	UpdateValues()

	g.moveToCoords = function(x,y){
		g.x = x;
		g.y = y;
		UpdateValues()
	}

	g.moveToVector = function(Vector2) {
		g.x	= Vector2.x;
		g.y	= Vector2.y;
		UpdateValues()
	}

	g.Intersects = function(Rectangle){
		return (Rectangle.x < g.x + g.w) &&
            (g.x < (Rectangle.x + Rectangle.w)) &&
            (Rectangle.y < g.y + g.h) &&
            (g.y < Rectangle.y + Rectangle.h); 
	}

	function UpdateValues(){
		g.Top = g.y;
		g.Bottom = g.y+g.h;
		g.Left = g.x;
		g.Right = g.x+g.w;
		g.HorizontalCenter = g.x+(g.w/2);
		g.VerticalCenter = g.y+(g.h/2);
		g.Center = {x: g.x+(g.w/2), y: g.y+(g.h/2)};
	}
}

function Vector2(x, y) {
	var g = this;

	g.x = x;
	g.y = y;

	if(!x && !y) {g.Zero = {x:0, y:0}; g.x = g.y = 0;}
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