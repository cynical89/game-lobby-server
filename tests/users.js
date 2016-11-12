"use strict";

const expect = require("chai").expect;
const userModel = require("../models/users");

let user;

describe("User Model - New User", () => {
	before(() => {
		user = userModel.newUser("name", "default", "e@e.com");
	});

	it("user should be a valid object", (done) => {
		expect(user).to.not.be.an("undefined");
		expect(user).to.be.an("object");
		return done();
	});

	it("user should have required properties", (done) => {
		expect(user).to.have.property("error");
		expect(user).to.have.property("id");
		expect(user).to.have.property("password");
		expect(user).to.have.property("email");
		expect(user).to.have.property("timezone");
		return done();
	});

	it("user should have the correct starting values", (done) => {
		expect(user.error).to.be.a("boolean");
		expect(user.error).to.equal(false);
		expect(user.id).to.be.a("string");
		expect(user.id).to.equal("name");
		expect(user.password).to.be.a("string");
		expect(user.password.length).to.equal(60);
		expect(user.email).to.be.a("string");
		expect(user.email).to.equal("e@e.com");
		expect(user.timezone).to.be.a("string");
		expect(user.timezone).to.equal("America/Los_Angeles");
		return done();
	});
});