const { assert } = require("chai");
const PaymentPackage = require("../Exercise/payment-package");

describe("PaymentPackage unit tests", () => {
  const numbersValueSetter = function(setter) {
    it("Throws Error if value is less than zero", () => {
      assert.throws(() => (package[setter] = -1.1), Error);
    });

    let valueSetError = function(param) {
      it("Throws Error if value is not a number", () => {
        assert.throws(() => (package[setter] = param), Error);
      });
    };

    NaNParams.forEach((x) => valueSetError(x));
  };

  let package;
  let nonStringParams = [1, 0];
  let NaNParams = ["1", "0", "-1", ""];
  let nonBooleanParams = ["test", 1, -1, 0, undefined, ""];

  beforeEach(() => {
    package = new PaymentPackage("Box", 250.3);
  });

  it("Constructor creates new class PaymentPackage successfully", () => {
    assert.equal(package.name, "Box");
    assert.equal(package.value, 250.3);
    assert.equal(package.VAT, 20);
    assert.equal(package.active, true);
  });

  describe("Test name setter", () => {
    it("Throws Error if value is empty string", () => {
      assert.throws(() => (package.name = ""), Error);
    });

    let nameSetError = function(param) {
      it("Throws Error if value is not a string", () => {
        assert.throws(() => (package.name = param), Error);
      });
    };

    nonStringParams.forEach((x) => nameSetError(x));
  });

  describe("Test value setter", () => {
    numbersValueSetter("value");
  });

  describe("Test VAT setter", () => {
    numbersValueSetter("VAT");
  });

  describe("Test active setter", () => {
    let activeSetError = function(param) {
      it("Throws Error if value is not boolean", () => {
        assert.throws(() => (package.active = param), Error);
      });
    };

    nonBooleanParams.forEach((x) => activeSetError(x));
  });

  describe("Test toString", () => {
    it("test toString with active === true", () => {
      let expected = `Package: ${package.name}\n- Value (excl. VAT): ${
        package.value
      }\n- Value (VAT ${package.VAT}%): ${package.value *
        (1 + package.VAT / 100)}`;

      assert.equal(package.toString(), expected);
    });
    it("test toString with active === false", () => {
      let expected = `Package: ${
        package.name
      } (inactive)\n- Value (excl. VAT): ${package.value}\n- Value (VAT ${
        package.VAT
      }%): ${package.value * (1 + package.VAT / 100)}`;

      package.active = false;
      assert.equal(package.toString(), expected);
    });
  });
});
