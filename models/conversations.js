"use strict";

/**
* Conversation Model
* In charge of all things dealing with the conversation object
*/

const Chance = require("chance");
const chance = new Chance();

module.exports = {
	/**
	* newCoversation
	* Creates a new conversation object and returns it
	*
	* @param {array} participants - The users participating in the conversation
	* @returns {object} conversation -  The full conversation object
	*/

	newConversation: (participants) => {
		const conversation = {
			id: chance.guid(),
			participants: participants,
			messages: []
		};
		return conversation;
	},

	/**
	* addMessage
	* Adds a new message to the conversation object
	*
	* @param {object} conversation - The conversation object to be modified
	* @param {object} message - The message to be added to the conversation
	* @returns {object} conversation -  The full conversation object
	*/

	addMessage: (conversation, message) => {
		conversation.messages.push(message);
		return conversation;
	}
};
