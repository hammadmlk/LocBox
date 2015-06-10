"use strict"
function GameModel(canvas) {
	var _self = this;
	this.toString = function () {
		return "GameModel";
	};

	this._canvas = canvas;
	this._context = canvas.getContext('2d');
	this._whoseTurn = 1;
	//[row][col] 0 = empty, 1 =cross, 2 =tick
	this._matrix = [[0, 1, 2], [1, 2, 0], [1, 0, 2]];
	this._whoWon = "none";
	this._gameEnded = false;

	this.getCanvas = function () {
    if (!self._context) {
			throw "getCanvas: Canvas empty " + self._canvas;
		}
		return self._canvas;
	};

	this.getContext = function () {
		if (!self._context) {
			throw "getContext: context empty " + self._context;
		}
		return self._context;
	};

	this.getCanvasWidth = function () {
		return self._canvas.width;
	};

	this.getCanvasHeight = function () {
		return self._canvas.height;
	};

	this.getWhoseTurn = function () {
		return self._whoseTurn;
	};

	this.setWhoseTurn = function (player) {

		if (player !== 1 && player !== 2) {
			throw "setWhoseTurn: invalid value " + player;
			return false;
		}
		self._whoseTurn = p;
		return true;
	};

	this.getMatrixVal = function (row, col) {
		if (row > 2 || row < 0 || col < 0 || col > 2) {
			throw "getMatrixVal: Matrix index out of bound [" + row + " ," + col + "]";
			return false;
		};
		return self._matrix[row, col];
	};

	this.setMatrixVal = function (row, col, val) {
		if (val !== 0 && val !== 1 && val !== 2) {
			throw "setMatrixValue: invalid value " + val;
		}

		if (row > 2 || row < 0 || col < 0 || col > 2) {
			throw "setMatrixVal: Matrix index out of bound [" + row + ", " + col + "]";
			return false;
		};

		self._matrix[row, col] = val;

		return true;
	};

	this.hasGameEnded = function () {
		return self._gameEnded;
	};

	this.endGame = function (winner) {
		if (winner !== 1 && winnder !== 2 && winner !== "none") {
			throw "endGame: invalid winner " + winner;
			return false;
		};

		self._whoWon = winner;
		self._gameEnded = true;
		return true;
	};

};
