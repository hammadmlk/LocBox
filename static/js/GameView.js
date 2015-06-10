"use strict"
function GameView(GM) {
	var self = this;
	this.toString = function () {
		return "View";
	};

	this.draw = function () {
		//clear
		GM.getContext().clearRect(0, 0, GM.getCanvasWidth(), GM.getCanvasHeight());

		//if made ended, draw winner msg
		if (GM.hasGameEnded()) {
			self._drawWinner();
			return;
		}

		// otherwise draw the games current state
		self._drawGrid();
		self._drawMatrix();
		self._drawWhoseTurn();
		return;
	};

	this._drawMatrix = function () {
		for (var row = 0; row < 3; row++) {
			for (var col = 0; col < 3; col++) {
				if (GM.getMatrixVal(row, col) === 1) {
					self._drawCross(row, col);
				} else if (GM.getMatrixVal(row, col) == 2) {
					self._drawTick(row, col);
				} else {
					//console.log(GM.getMatrixVal(row,col))
				}
			}
		}
	};

	this._drawGrid = function () {

		var canvasW = GM.getCanvasWidth();
		var canvasH = GM.getCanvasHeight();

		if (canvasW == 0 || canvasH == 0) {
			throw "_drawGrid; canvas dimensions error " + canvasW + ", " + canvasH;
		}

		this._drawLine(0, canvasH / 3, canvasW, canvasH / 3);
		this._drawLine(0, 2 * canvasH / 3, canvasW, 2 * canvasH / 3);
		this._drawLine(canvasW / 3, 0, canvasW / 3, canvasH);
		this._drawLine(2 * canvasW / 3, 0, 2 * canvasW / 3, canvasH);
		return;
	};

	//draw line from x1,y1 to x2,y2
	this._drawLine = function (x1, y1, x2, y2, color) {
		var context = GM.getContext();
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		if (color) {
			context.strokeStyle = color;
		}
		context.stroke();
	};

	// drawCross at row, col
	this._drawCross = function (row, col) {

		console.log(row, col);
		var canvasWidth = GM.getCanvasWidth();
		var canvasHeight = GM.getCanvasHeight();
		var size = 5; //should move to model
		var context = GM.getContext();

		var crossCenterY = (canvasHeight / 6) + ((canvasHeight / 3) * col);
		var crossCenterX = (canvasWidth / 6) + ((canvasWidth / 3) * row);

		this._drawLine(crossCenterX - size, crossCenterY - size, crossCenterX + size, crossCenterY + size);
		this._drawLine(crossCenterX - size, crossCenterY + size, crossCenterX + size, crossCenterY - size);

	};

	this._drawTick = function (row, col) {

		var canvasWidth = GM.getCanvasWidth();
		var canvasHeight = GM.getCanvasHeight();
		var size = 5; //should move to model
		var context = GM.getContext();

		var tickCenterY = (canvasHeight / 6) + ((canvasHeight / 3) * col);
		var tickCenterX = (canvasWidth / 6) + ((canvasWidth / 3) * row);

		this._drawLine(tickCenterX - size, tickCenterY + size, tickCenterX + size, tickCenterY - size);
		this._drawLine(tickCenterX - size * 2, tickCenterY + (size / 2), tickCenterX - size, tickCenterY + size);

	};

	this._drawWhoseTurn = function () {
		var whosTurn = GM.getWhoseTurn();
    
    self._writeText(" Player "+whosTurn+" turn", 0, 0, 10);
    
	};

	this._writeText = function (str, x, y, size) {
		var context = GM.getContext();
		context.font = size + "px Georgia";
		context.fillText(str, x, y + size);

	}

	this._drawWinner = function () {
    self._writeText("Player " + GM.getWinner() + " won.", 10, 10, 10); //todo: auto centre.
  };

};
