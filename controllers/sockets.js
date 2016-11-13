"use strict";

const config = require("../config.json");
const app = require("../index").app;
const io = app.io;
const socket = app._io;
const db = require("../helpers/db");
const gameModel = require("../models/game");
const userModel = require("../models/users");
const session = require("../helpers/session");

const co = require("co");

io.on("connection", (ctx, data) => {
	// eslint-disable-next-line require-yield
	co(function* co() {
		console.log(`*${data} connected`);
	}).catch(onError);
});

io.on("disconnect", (ctx, data) => {
	// eslint-disable-next-line require-yield
	co(function* co() {
		console.log(`*${data} disconnected`);
	}).catch(onError);
});

io.on("chat message", (ctx, data) => {
	// eslint-disable-next-line require-yield
	co(function* co() {
		console.log(`*${data}`);
		socket.emit("chat message", `${data}`);
	}).catch(onError);
});

function onError(err) {
	console.log("error!");
	console.error(err);
}

function parsePayload(inputStr) {
	let payload;
	try {
		payload = JSON.parse(inputStr);
	} catch (err) {
		return {
			error: true,
			message: "Bad JSON"
		};
	}
	try {
		payload = JSON.parse(payload);
		console.log("using testing utility");
	} catch (err) {
		console.log("not using testing utility");
	}
	payload.error = false;
	return payload;
}
