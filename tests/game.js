"use strict";

const expect = require("chai").expect;
const gameModel = require("../models/game");

let game;

describe("Game Model - New Game", () => {
	before(() => {
		game = gameModel.newGame();
	});

	it("game should be a valid object", (done) => {
		expect(game).to.not.be.an("undefined");
		expect(game).to.be.an("object");
		return done();
	});

	it("game should have required properties", (done) => {
		expect(game).to.have.property("error");
		expect(game).to.have.property("id");
		expect(game).to.have.property("active");
		expect(game).to.have.property("time");
		expect(game).to.have.property("players");
		return done();
	});

	it("game should have the correct starting values", (done) => {
		expect(game.error).to.be.a("boolean");
		expect(game.error).to.equal(false);
		expect(game.id).to.be.a("string");
		expect(game.id.length).to.equal(36);
		expect(game.active).to.be.a("boolean");
		expect(game.active).to.equal(false);
		expect(game.time).to.equal(null);
		expect(game.players).to.be.a("array");
		expect(game.players.length).to.equal(0);
		return done();
	});
});
