// defining a module, exports keyword essentially allows other files to access the functionality in this file
var exports = module.exports = {};

// creating a function in the module and adding the function definition to the module exports making it publicly accessible
exports.AddNumber = function(a, b) {
	// returning a value back to the function caller
	return (a + b);
};