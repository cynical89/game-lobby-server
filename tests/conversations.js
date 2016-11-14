"use strict";

const expect = require("chai").expect;
const convModel = require("../models/conversations");
const messageModel = require("../models/message");

const participants = [
	"User1",
	"User2"
];

let conversation;
let message;

describe("Conversation Model - New Conversation", () => {
	before(() => {
		conversation = convModel.newConversation(participants);
	});

	it("conversation should be a valid object", (done) => {
		expect(conversation).to.not.be.an("undefined");
		expect(conversation).to.be.an("object");
		return done();
	});

	it("conversation should have required properties", (done) => {
		expect(conversation).to.have.property("id");
		expect(conversation).to.have.property("participants");
		expect(conversation).to.have.property("messages");
		return done();
	});

	it("conversation should have the correct starting values", (done) => {
		expect(conversation.id).to.be.a("string");
		expect(conversation.id.length).to.equal(36);
		expect(conversation.participants).to.be.a("array");
		expect(conversation.participants.length).to.equal(2);
		expect(conversation.participants[0]).to.equal("User1");
		expect(conversation.participants[1]).to.equal("User2");
		expect(conversation.messages).to.be.a("array");
		expect(conversation.messages.length).to.equal(0);
		return done();
	});
});

describe("Conversation Model - Add Message", () => {
	before(() => {
		message = messageModel.newMessage("User1", "User2", "test message");
		conversation = convModel.addMessage(conversation, message);
	});

	it("Returned conversation should be a valid object", (done) => {
		expect(conversation).to.not.be.an("undefined");
		expect(conversation).to.be.an("object");
		return done();
	});

	it("Returned conversation should have new message", (done) => {
		expect(conversation.messages.length).to.equal(1);
		expect(conversation.messages[0]).to.equal(message);
		return done();
	});

});
