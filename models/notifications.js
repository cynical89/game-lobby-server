"use strict";

/**
* Notification Model
* In charge of all things dealing with the notification object
*/

module.exports = {
	/**
	* newNotification
	* Creates a new notification object and returns it
	*
	* @param {string} from - Who the notification is from
	* @param {string} to - Who the notification is to
	* @param {string} type - What is the type of notification? (Friend request, Game request, etc...)
	* @param {string} content - The content that is provided in the notification
	* @returns {object} notification -  The full notification object
	*/
	// TODO: Create a set list of notification types, and set content to provide to the notification

	newNotification: (from, to, type, content) => {
		const notification = {
			from: from,
			to: to,
			type: type,
			content: content
		};
		return notification;
	}
};
