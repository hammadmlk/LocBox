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

	this._takeTurn = function (row, col) {
		self._whatHappenedOnThisMove(2);
	};

	//tells if player won or if match ended in draw.
	//Returns "won", "draw" or "continueGame"
	this._whatHappenedOnThisMove = function (player) {

		var magicMat = [[8, 3, 4], [1, 5, 9], [6, 7, 2]];

		var totalSum = 0;
		for (var row = 0; row < 3; row++) {
			var magicSumCol = 0;
			var magicSumRow = 0;
			var magicSumDiag = 0;
			var magicSumDiag2 = 0;

			for (var col = 0; col < 3; col++) {
				magicSumCol += (magicMat[row][col]) * (self.GameModel.getMatrixVal(row, col) == player);

				magicSumRow += (magicMat[col][row]) * (self.GameModel.getMatrixVal(col, row) == player);

				magicSumDiag += (magicMat[col][col]) * (self.GameModel.getMatrixVal(col, col) == player);

				magicSumDiag2 += (magicMat[col][2 - col]) * (self.GameModel.getMatrixVal(col, 2 - col) == player);

				totalSum += (magicMat[row][col] * (0 != self.GameModel.getMatrixVal(row, col)));

			}
			if (magicSumCol == 15 || magicSumRow == 15 || magicSumDiag == 15 || magicSumDiag2 == 15) {
				return "won";
			}
		}

		if (totalSum === 45) {
			return "draw";
		}

		return "continueGame";

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
