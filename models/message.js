"use strict";

/**
* Message Model
* In charge of all things dealing with the message object
*/

module.exports = {
	/**
	* newMessage
	* Creates a new message object and returns it
	*
	* @param {string} from - Who the notification is from
	* @param {string} to - Who the notification is to
	* @param {string} msg - The message that is to be sent to the user
	* @returns {object} message -  The full message object
	*/

	newMessage: (from, to, msg) => {
		const message = {
			from: from,
			to: to,
			dateTime: new Date(),
			message: msg
		};
		return message;
	}
};
