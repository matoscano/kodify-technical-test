let { RomanNumber, dictionary } = require("./lib/index");
console.log("Added entry point");
console.log("dictionary", dictionary);
console.log("RomanNumber creation with new", new RomanNumber("X"));
console.log("RomanNumber creation without new", RomanNumber("X"));
