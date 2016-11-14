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

io.on("updateSocket", (ctx, data) => {
	co(function* co() {
		const document = yield db.getDocument(data.user, "gcusers");
		const user = userModel.addSocketId(document, data.socket);
		const result = yield db.saveDocument(document, "gcusers");
	});
});

io.on("messageUser", (ctx, data) => {
	let socket;
	console.log(`Sending pm from ${data.from} to ${data.to}`);
	co(function* co() {
		const document = yield db.getDocument(data.to, "gcusers");
		socket = document.socketId;
		io.socket.sockets.connected[`/#${socket}`].emit("getUserMessage",
			{ user: data.from, message: data.message });
	});
});

// TODO: create new conversation with users
// TODO: add new message sent to conversation

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
