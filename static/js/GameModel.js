"use strict"
function GameModel(canvasID) {
	var self = this;
	this.toString = function () {
		return "GameModel";
	};

	this.canvas = document.getElementById(canvasID);
	this.context = this.canvas.getContext('2d');
	this.canvasWidth = this.canvas.width;
	this.canvasHeight = this.canvas.height;

	this.something;

	this.matrix = [[0, 1, 2], [1, 2, 0], [2, 2, 2]]; //[row][col] 0 = empty, 1 =cross, 2 =tick
	this.playerTurn = "p1";
	this.hasWon = "none";

	this.getSomething = function () {
		return self.something;
	};
	this.setSometing = function (data) {
		self.something = data;
	};

};
