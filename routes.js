"use strict";

const config = require("./config.json");

const app = require("./index.js").app;
const passport = require("./index.js").passport;
const Router = require("koa-router");

const routes = new Router();

const main = require("./controllers/main.js");

// routes
routes.get("/", main.index);

// start a new game
routes.get("/game/newGame", main.newGame);

routes.post("/signup", main.signup);

// add passport strategies here
routes.get("/login",
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/"
	})
);

app.use(routes.middleware());
