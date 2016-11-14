"use strict";

/**
* Game Model
* In charge of all things dealing with the message object
*/

const Chance = require("chance");
const chance = new Chance();

module.exports = {
	/**
	* newGame
	* Creates a new game object and returns it
	*
	* @returns {object} game -  The full game object
	*/

	newGame: () => {
		const game = {
			error: false,
			id: chance.guid(),
			active: false,
			time: null,
			players: []
		};
		return game;
	},

	/**
	* addPlayer
	* Adds a player to the game object
	*
	* @param {object} game - The full game object to modify
	* @param {string} player - the user's username
	* @returns {object} game -  The full game object
	*/

	addPlayer: (game, player) => {
		game.players.push(player);
		return game;
	}
};
