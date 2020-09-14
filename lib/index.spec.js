const assert = require("assert");
var {
  RomanNumber,
  requiredError,
  invalidRangeError,
  invalidValueError,
} = require("./index");

describe("Should throw errors test suite", () => {
  it("Should throw `Error: Value required` when init RomanNumber with null", () => {
    assert.throws(() => {
      RomanNumber(null);
    }, requiredError);
  });

  it("Should throw `Error: Value required` when init RomanNumber with undefined", () => {
    assert.throws(() => {
      RomanNumber(undefined);
    }, requiredError);
  });

  it("Should throw `Error: Value required` when init RomanNumber with empty string", () => {
    assert.throws(() => {
      RomanNumber("");
    }, requiredError);
  });

  it("Should throw `Error: Invalid range` when init RomanNumber with number not between 1 and 3999", () => {
    assert.throws(() => {
      RomanNumber(0);
    }, invalidRangeError);
  });

  it("Should throw `Error: Invalid value` when init RomanNumber with an invalid roman string", () => {
    assert.throws(() => {
      RomanNumber("error");
    }, invalidValueError);
  });
});

describe("Should transform numbers to roman string and viceversa", () => {
  it("Should return 'I' when RomanNumber(1)", () => {
    let romanNumber = new RomanNumber(1);
    expect(romanNumber.toString()).toEqual("I");
  });

  it("Should return 'II' when RomanNumber(2)", () => {
    let romanNumber = new RomanNumber(2);
    expect(romanNumber.toString()).toEqual("II");
  });

  it("Should return 'III' when RomanNumber(3)", () => {
    let romanNumber = new RomanNumber(3);
    expect(romanNumber.toString()).toEqual("III");
  });

  it("Should return 'IV' when RomanNumber(4)", () => {
    let romanNumber = new RomanNumber(4);
    expect(romanNumber.toString()).toEqual("IV");
  });
});
