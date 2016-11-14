"use strict";

const expect = require("chai").expect;
const messageModel = require("../models/message");

let message;

describe("Message Model - New Message", () => {
	before(() => {
		message = messageModel.newMessage("User1", "User2", "test message");
	});

	it("message should be a valid object", (done) => {
		expect(message).to.not.be.an("undefined");
		expect(message).to.be.an("object");
		return done();
	});

	it("message should have required properties", (done) => {
		expect(message).to.have.property("from");
		expect(message).to.have.property("to");
		expect(message).to.have.property("dateTime");
		expect(message).to.have.property("message");
		return done();
	});

	it("message should have the correct starting values", (done) => {
		expect(message.from).to.be.a("string");
		expect(message.from).to.equal("User1");
		expect(message.to).to.be.a("string");
		expect(message.to).to.equal("User2");
		expect(message.dateTime).to.be.a("Date");
		expect(message.message).to.be.a("string");
		expect(message.message).to.equal("test message");
		return done();
	});
});
