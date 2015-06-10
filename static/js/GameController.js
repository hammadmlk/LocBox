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

	this._initGame = function () {
		// Models and views are created, so we can start game here.

		self.GameView.draw();

		//data binding by observing model
		Object.observe(self.GameModel, function (changes) {
			self.GameView.draw();
		});

		//click listener
		self.GameModel.getCanvas().addEventListener('mousedown', function (evt) {
			var coords = self._getRelativeCoordinates(evt);
			var rowCol = self._getRowCol(coords.x, coords.y);
      self._takeTurn(rowCol.row, rowCol.col);
		}, false);

	};
  
  this._takeTurn = function(row, col){
    
  };

	this._getRowCol = function (xcoordinate, ycoordinate) {
		if (xcoordinate <= 0) {
			xcoordinate = 1;
		};
		if (ycoordinate <= 0) {
			ycoordinate = 1;
		};

		var row = Math.ceil(xcoordinate / (self.GameModel.getCanvasWidth() / 3)) - 1;
		var col = Math.ceil(ycoordinate / (self.GameModel.getCanvasHeight() / 3)) - 1; ;

		return {
			row : row,
			col : col
		};
	};

	//gets the x,y coordinates from event
	this._getRelativeCoordinates = function (event) {
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

};
