"use strict"

function GameController(canvasID) {
	var self = this;
	this.toString = function () {
		return "GameController";
	};

	this.canvasID = canvasID;
	this.gameModel;
	this.View;

	this.create = function () {
		self.gameModel = new GameModel(self.canvasID);
		self.View = new View();
		self.View.create();

		//data binding by observing model
		Object.observe(self.gameModel, function (changes) {
			changes.forEach(function (change) {
				console.log(change.type, change.name, change.oldValue);
				self.View.create();
			});
		});

		self.initGame();

	};

	this._getRowCol = function (clickx, clicky) {
  
  };

	this.onClick = function (x, y) {

		var rowCol = self._getRow(x, y);

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

	this.initGame = function () {
		// Models and views are created, so we can start game here.

		self.gameModel.canvas.addEventListener('mousedown', function (evt) {
			var coords = self._getRelativeCoords(evt);
			self.onClick(coords.x, coords.y);
		}, false)

	};

};
