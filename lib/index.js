const dictionary = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const requiredError = new Error("Error: Value required");
const invalidRangeError = new Error("Error: Invalid range");

function RomanNumber(value) {
  if (!(this instanceof RomanNumber)) {
    return new RomanNumber(value);
  }
  this.value = value;

  if (value === null || value === undefined || value === "") {
    throw requiredError;
  }

  if (typeof value === "number") {
    let intValue = Math.floor(value);
    if (intValue < 1 || intValue > 3999) {
      throw invalidRangeError;
    }
    this.value = intValue;
  }

  this.toString = function () {
    return "Transform number to roman";
  };

  this.toInt = function () {
    return "Transform roman to number";
  };

  return this;
}

module.exports = { RomanNumber, dictionary, requiredError, invalidRangeError };
