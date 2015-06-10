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
	this._matrix = [[1, 1, 2], [2, 1, 1], [1, 2, 1]];
	this._whoWon = "none";
	this._gameEnded = false;

	this.getCanvas = function () {
    if (!_self._context) {
			throw "getCanvas: Canvas empty " + _self._canvas;
		}
		return _self._canvas;
	};

	this.getContext = function () {
		if (!_self._context) {
			throw "getContext: context empty " + _self._context;
		}
		return _self._context;
	};

	this.getCanvasWidth = function () {
		return _self._canvas.width;
	};

	this.getCanvasHeight = function () {
		return _self._canvas.height;
	};

	this.getWhoseTurn = function () {
		return _self._whoseTurn;
	};

	this.setWhoseTurn = function (player) {

		if (player !== 1 && player !== 2) {
			throw "setWhoseTurn: invalid value " + player;
			return false;
		}
		_self._whoseTurn = p;
		return true;
	};

	this.getMatrixVal = function (row, col) {
		if (row > 2 || row < 0 || col < 0 || col > 2) {
			throw "getMatrixVal: Matrix index out of bound [" + row + " ," + col + "]";
			return false;
		};
		return _self._matrix[row][col];
	};

	this.setMatrixVal = function (row, col, val) {
		if (val !== 0 && val !== 1 && val !== 2) {
			throw "setMatrixValue: invalid value " + val;
		}

		if (row > 2 || row < 0 || col < 0 || col > 2) {
			throw "setMatrixVal: Matrix index out of bound [" + row + ", " + col + "]";
			return false;
		};

		_self._matrix[row][col] = val;

		return true;
	};

	this.hasGameEnded = function () {
		return _self._gameEnded;
	};

	this.endGame = function (winner) {
		if (winner !== 1 && winner !== 2 && winner !== "none") {
			throw "endGame: invalid winner " + winner;
			return false;
		};

		_self._whoWon = winner;
		_self._gameEnded = true;
		return true;
	};
  
  this.getWinner = function(){
    if (_self._gameEnded)
      return _self._whoWon;
    
    throw "getWinner: game was still in session "+_self._gameEnded;
  };

};
