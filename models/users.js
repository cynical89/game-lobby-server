"use strict";

const bcrypt = require("bcrypt");
const db = require("../helpers/db");
const co = require("co");

const viewData = require("../tests/mockData/usersdb.json");

module.exports = {
	newUser: (username, password, email, timezone = "America/Los_Angeles") => {
		const encryptedPass = encryptPassword(password);
		const user = {
			error: false,
			id: username,
			email: email,
			password: encryptedPass,
			timezone: timezone,
			socketId: "socket:id",
			friends: []
		};
		return user;
	},

	getUser: function getUser(username, password, test = false) {
		let document = viewData;
		/* istanbul ignore else  */
		if (test === true) {
			document = viewData;
		}
		else {
			co(function* co() {
				document = yield db.getDocument(username, "gcusers");
			});
		}
		const passwordMatch = comparePassword(password, document);
		/* istanbul ignore if  */
		if (!passwordMatch) {
			return {error: true, message: "You must provide valid credentials"};
		}
		return document;
	},

	addSocketId: function addSocketId(user, id) {
		user.socketId = id;
		return user;
	}
};

function encryptPassword(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
};

function comparePassword(password, doc) {
	return bcrypt.compareSync(password, doc.password);
};
