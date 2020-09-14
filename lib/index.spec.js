const assert = require("assert");
var { RomanNumber, requiredError } = require("./index");

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
    }, Error);
  });
});
