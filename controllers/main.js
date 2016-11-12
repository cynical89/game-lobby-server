"use strict";

const config = require("../config.json");
const gameModel = require("../models/game");

let user = null;

module.exports.index = function* index() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	yield this.body = user;
};

module.exports.newGame = function* newGame() {
	const game = gameModel.newGame();
	yield this.body = game;
};
