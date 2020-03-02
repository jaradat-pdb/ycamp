const app = require("../services/add.js");

// creating a test module by the name of Addition
describe("Addition", function() {
	// adding a description of the test using the it keyword and then calling a function to actually run the test
	it("The function should add two numbers", function() {
		const value = app.AddNumber(10, 20);
		expect(value).toBe(30);
	});
});