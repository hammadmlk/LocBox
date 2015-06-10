"use strict"
function View() {
	var self = this;
	this.toString = function () {
		return "View";
	};

	this.someUIElement;
	this.create = function () {
		game.gameModel.context.clearRect(0, 0, game.gameModel.canvasWidth, game.gameModel.canvasHeight);

		self.drawGrid(game.gameModel.context, game.gameModel.canvasWidth, game.gameModel.canvasHeight);

		for (var i = 0; i < game.gameModel.matrix.length; i++) {
			for (var j = 0; j < game.gameModel.matrix[i].length; j++) {
				if (game.gameModel.matrix[i][j] === 1) {
					self.drawCross(game.gameModel.context, i, j, game.gameModel.canvasWidth, game.gameModel.canvasHeight);
				} else if (game.gameModel.matrix[i][j] == 2) {
					self.drawTick(game.gameModel.context, i, j, game.gameModel.canvasWidth, game.gameModel.canvasHeight);
				}
			}
		}

		//self.drawCross(game.gameModel.context, 0,0, game.gameModel.canvasWidth, game.gameModel.canvasHeight);
		//self.drawTick(game.gameModel.context, 1,0, game.gameModel.canvasWidth, game.gameModel.canvasHeight);

	};

	this.destroy = function (data) {
		//unload assets and vars
	};

	this.update = function () {};

	this.drawGrid = function (context, canvasWidth, canvasHeight) {
		console.log(context);
		this._drawLine(context, 0, canvasHeight / 3, canvasWidth, canvasHeight / 3);
		this._drawLine(context, 0, 2 * canvasHeight / 3, canvasWidth, 2 * canvasHeight / 3);
		this._drawLine(context, canvasWidth / 3, 0, canvasWidth / 3, canvasHeight);
		this._drawLine(context, 2 * canvasWidth / 3, 0, 2 * canvasWidth / 3, canvasHeight);
		return;
	};

	this._drawLine = function (context, x1, y1, x2, y2, color) {
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		if (color) {
			context.strokeStyle = color;
		}
		context.stroke();
	};

	this.drawCross = function (context, row, col, canvasWidth, canvasHeight) {

		var crossCenterY = (canvasHeight / 6) + ((canvasHeight / 3) * col);
		var crossCenterX = (canvasWidth / 6) + ((canvasWidth / 3) * row);

		this._drawLine(context, crossCenterX - 5, crossCenterY - 5, crossCenterX + 5, crossCenterY + 5);
		this._drawLine(context, crossCenterX - 5, crossCenterY + 5, crossCenterX + 5, crossCenterY - 5);

	};

	this.drawTick = function (context, row, col, canvasWidth, canvasHeight) {
		var tickCenterY = (canvasHeight / 6) + ((canvasHeight / 3) * col);
		var tickCenterX = (canvasWidth / 6) + ((canvasWidth / 3) * row);

		this._drawLine(context, tickCenterX - 5, tickCenterY + 5, tickCenterX + 5, tickCenterY - 5);
		this._drawLine(context, tickCenterX - 9, tickCenterY + 1, tickCenterX - 5, tickCenterY + 5);

	};

	this.whoseTurnText = function (whoseTurn, canvasWidth, canvasHeight) {};

	this.endgameMessage = function (whoWon, canvasWidth, canvasHeight) {};

};
