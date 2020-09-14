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

function RomanNumber(value) {
  if (!(this instanceof RomanNumber)) {
    return new RomanNumber(value);
  }
  this.value = value;

  if (value === null || value === undefined || value === "") {
    throw requiredError;
  }

  this.toString = function () {
    return "Transform number to roman";
  };

  this.toInt = function () {
    return "Transform roman to number";
  };

  return this;
}

module.exports = { RomanNumber, dictionary, requiredError };
