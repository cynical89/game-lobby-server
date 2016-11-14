"use strict";

/**
* Authentication Model
* In charge of all things dealing with the passport-user object
*/

const passport = require("../index.js").passport;
const config = require("../config.json");
const co = require("co");
const userModel = require("../models/users");

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy((username, password, done) => {
	// eslint-disable-next-line require-yield
	co(function* auth() {
		const user = userModel.getUser(username, password);
		if (user.error === true) {
			done(null, false);
		} else {
			done(null, user);
		}
	}).catch(function onError(e) {
		console.error("Something went terribly wrong!");
		console.error(e.stack);
		done(e, null);
	});
}));
