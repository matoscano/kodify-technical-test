const assert = require("assert");
var { RomanNumber, requiredError } = require("./index");

describe("Should throw errors test suite", () => {
  it("Should throw error: value required when init RomanNumber with null", () => {
    assert.throws(() => {
      RomanNumber(null);
    }, requiredError);
  });

  it("Should throw error: value required when init RomanNumber with undefined", () => {
    assert.throws(() => {
      RomanNumber(undefined);
    }, requiredError);
  });

  it("Should throw error: value required when init RomanNumber with empty string", () => {
    assert.throws(() => {
      RomanNumber("");
    }, requiredError);
  });
});
