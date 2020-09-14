let { RomanNumber, dictionary } = require("./lib/index");
console.log("Added entry point");
console.log("dictionary", dictionary);
console.log("RomanNumber creation with new", new RomanNumber("X"));
console.log("RomanNumber creation without new", RomanNumber("X"));

console.log("RomanNumber toInt", RomanNumber("X").toInt());
console.log("RomanNumber toString", RomanNumber("X").toString());

try {
  console.log("RomanNumber required validation", RomanNumber(""));
} catch (error) {
  console.log("RomanNumber required validation error", error);
}
