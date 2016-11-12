"use strict";

const Chance = require("chance");
const chance = new Chance();

module.exports = {
	newGame: () => {
		const game = {
			error: false,
			id: chance.guid(),
			active: false,
			time: null,
			players: []
		};
		return game;
	}
};
