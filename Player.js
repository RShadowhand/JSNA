function Player(x, y, w, h, c) {
	var g = this; // Scoping.

	g.x = x;
	g.y = y;
	g.w = w;
	g.h = h;
	g.c = c;

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

	g.draw = function (canvas) {
		canvas.fillStyle = c;
		canvas.fillRect(g.x, g.y, g.w, g.h);
	}
}