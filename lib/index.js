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
    const intValue = Math.floor(value);
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

    Object.entries(dictionary).forEach(function (key) {
      while (currentNumber >= key[1]) {
        romanString += key[0];
        currentNumber -= key[1];
      }
    });

    return romanString;
  };

  this.toInt = function () {
    let romanNumber = 0;
    let romanLetters = this.value.split("");
    let currentValue;

    console.log("romanLetters", romanLetters);
    let i;
    const romanLettersLength = romanLetters.length;

    // Also works for all roman number that not has a smaller value followed by a letter of large value like IV or IX.
    // Now we have to solve this problem.
    for (i = 0; i < romanLettersLength; i++) {
      currentValue = dictionary[romanLetters[i]];
      romanNumber += currentValue;
    }

    return romanNumber;
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
