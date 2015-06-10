"use strict"

function GameController(canvas) {
	var self = this;
	this.toString = function () {
		return "GameController";
	};

	this.GameModel;
	this.GameView;

	this.create = function () {
		self.GameModel = new GameModel(canvas);
    self.GameView = new GameView(self.GameModel);
		self._initGame();
	};


	this._getRelativeCoords = function (event) {
		if (event.offsetX !== undefined && event.offsetY !== undefined) {
			return {
				x : event.offsetX,
				y : event.offsetY
			};
		}
		return {
			x : event.layerX,
			y : event.layerY
		};
	};
  

	this._initGame = function () {
		// Models and views are created, so we can start game here.
    
    self.GameView.draw();
    
		//data binding by observing model
		Object.observe(self.GameModel, function (changes) {
      self.GameView.draw();
		});
    
    /*
		self.gameModel.canvas.addEventListener('mousedown', function (evt) {
			var coords = self._getRelativeCoords(evt);
			self.onClick(coords.x, coords.y);
		}, false)
    */
	};

};
