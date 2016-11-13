"use strict";

const bcrypt = require("bcrypt");

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
	
	addSocketId: (user, id) => {
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
