"use strict";

/**
* User Model
* In charge of all things dealing with the user object
*/

const bcrypt = require("bcrypt");
const db = require("../helpers/db");
const co = require("co");

// User data used for testing
const viewData = require("../tests/mockData/usersdb.json");

module.exports = {
	/**
	* newUser
	* Creates a new user object and returns it
	*
	* @param {string} name - Who the notification is from
	* @param {string} password - Password of the user
	* @param {string} email - Email address of the user
	* @param {string} timezone - *(Optional) The timezone of the user (for moment-timezone formatting)
	* @returns {object} user -  The full user object
	*/

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

	/**
	* getUser
	* Gets the user from the database and returns the user object
	*
	* @param {string} username - the username the user entered
	* @param {string} passsword - the password the user entered
	* @param {boolean} test - *(Optional) Are we testing this function or not?
	* @returns {object} user -  The full user object
	*/

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

	/**
	* addSocketId
	* Adds the users socketID to the user object
	*
	* @param {object} user - The user object to be modified
	* @param {string} to - The socketID to add to the user
	* @returns {object} user -  The full user object
	*/

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
