var Local = function() {
	// 游戏对象
	var game;
	// 绑定键盘事件
	var bindKeyEvent = function() {
		document.onkeydown = function(e) {
			if (e.keycode == 38) { // up
		
			} else if (e.keycode == 39) { // right
			
			} else if (e.keycode == 40) { // down
				game.down();
			} else if (e.keycode == 37) { // left
			} else if (e.keycode == 32) { // space
			}
		}
	}
	// 开始
	var start = function() {
		var doms = {
			gameDiv: document.getElementById('game'),
			nextDiv: document.getElementById('next')
		}
		game = new Game();
		game.init(doms);
		bindKeyEvent();
	}
	// 导出API
	this.start = start;
}
