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