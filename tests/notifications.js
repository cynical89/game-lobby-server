"use strict";

const expect = require("chai").expect;
const notifyModel = require("../models/notifications");

let notification;

describe("Notification Model - New Notification", () => {
	before(() => {
		notification = notifyModel.newNotification("User1", "User2", "friendRequest", "test notification");
	});

	it("notification should be a valid object", (done) => {
		expect(notification).to.not.be.an("undefined");
		expect(notification).to.be.an("object");
		return done();
	});

	it("notification should have required properties", (done) => {
		expect(notification).to.have.property("from");
		expect(notification).to.have.property("to");
		expect(notification).to.have.property("type");
		expect(notification).to.have.property("content");
		return done();
	});

	it("notification should have the correct starting values", (done) => {
		expect(notification.from).to.be.a("string");
		expect(notification.from).to.equal("User1");
		expect(notification.to).to.be.a("string");
		expect(notification.to).to.equal("User2");
		expect(notification.type).to.be.a("string");
		expect(notification.type).to.equal("friendRequest");
		expect(notification.content).to.be.a("string");
		expect(notification.content).to.equal("test notification");
		return done();
	});
});
