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

  it("Should throw `Error: Invalid range` when init RomanNumber with number not between 1 and 3999", () => {
    assert.throws(() => {
      RomanNumber(10000);
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

  it("Should return 'V' when RomanNumber(5)", () => {
    let romanNumber = new RomanNumber(5);
    expect(romanNumber.toString()).toEqual("V");
  });

  it("Should return 'VI' when RomanNumber(6)", () => {
    let romanNumber = new RomanNumber(6);
    expect(romanNumber.toString()).toEqual("VI");
  });

  it("Should return 'IX' when RomanNumber(9)", () => {
    let romanNumber = new RomanNumber(9);
    expect(romanNumber.toString()).toEqual("IX");
  });

  it("Should return 'X' when RomanNumber(10)", () => {
    let romanNumber = new RomanNumber(10);
    expect(romanNumber.toString()).toEqual("X");
  });

  it("Should return 'L' when RomanNumber(50)", () => {
    let romanNumber = new RomanNumber(50);
    expect(romanNumber.toString()).toEqual("L");
  });

  it("Should return 'MCMLXVIII' when RomanNumber(1968)", () => {
    let romanNumber = new RomanNumber(1968);
    expect(romanNumber.toString()).toEqual("MCMLXVIII");
  });

  it("Should return 'MMM' when RomanNumber(3000)", () => {
    let romanNumber = new RomanNumber(3000);
    expect(romanNumber.toString()).toEqual("MMM");
  });
});
