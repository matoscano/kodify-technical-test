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
const romanRegex = new RegExp(
  "^M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$"
);
const requiredError = new Error("Error: Value required");
const invalidRangeError = new Error("Error: Invalid range");
const invalidValueError = new Error("Error: Invalid value");

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

  if (typeof value === "string" && !romanRegex.test(value)) {
    throw invalidValueError;
  }

  this.toString = function () {
    let romanString = "";
    let currentNumber = this.value;

    if (currentNumber >= 9) {
      romanString += "IX";
      currentNumber -= 9;
    }
    if (currentNumber >= 5) {
      romanString += "V";
      currentNumber -= 5;
    }
    if (currentNumber === 4) {
      romanString += "IV";
      currentNumber -= 4;
    } else {
      for (let i = 0; i < currentNumber; i++) {
        romanString += "I";
      }
    }

    return romanString;
  };

  this.toInt = function () {
    return "Transform roman to number";
  };

  return this;
}

module.exports = {
  RomanNumber,
  dictionary,
  requiredError,
  invalidRangeError,
  invalidValueError,
};
