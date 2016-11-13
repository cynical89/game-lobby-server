"use strict";

const config = require("../config.json");
const gameModel = require("../models/game");
const userModel = require("../models/users");
const db = require("../helpers/db");

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

module.exports.userInfo = function* userInfo() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	const document = yield db.getDocument(user.id, "gcusers");
	if (document.error === true) {
		this.throw(401, document.message);
	}
	const userObject = {
		username: document.id,
		friends: document.friends
	};
	return this.body = userObject;
};

module.exports.signup = function* newGame() {
	const params = this.request.body;
	if (!params.username) {
		this.throw(400, "You need to provide a username.");
	}
	if (!params.password) {
		this.throw(400, "You need to provide a password.");
	}
	if (!params.email) {
		this.throw(400, "You need to provide an email.");
	}
	const user = yield userModel.newUser(params.username,
		params.password, params.email);
	if (user.error === true) {
		this.throw(400, "Something went wrong creating and user.");
	}
	const document = yield db.saveDocument(document, "users");
	if (document.error === true) {
		this.throw(400, document.message);
	}
	// we shouldn't need to return anything to the user
	this.throw(200, "Successfully logged in");
};
