const calculator = require("../calculator");

describe("Calculator Function Tests", () => {
  describe("Addition", () => {
    it("should correctly add two positive numbers", () => {
      expect(calculator.add(5, 7)).toBe(12);
    });

    it("should correctly add negative numbers", () => {
      expect(calculator.add(-3, -6)).toBe(-9);
    });
  });

  describe("Subtraction", () => {
    it("should correctly subtract two numbers", () => {
      expect(calculator.subtract(10, 3)).toBe(7);
    });
  });

  describe("Multiplication", () => {
    it("should correctly multiply two numbers", () => {
      expect(calculator.multiply(4, 5)).toBe(20);
    });
  });

  describe("Division", () => {
    it("should correctly divide two numbers", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrowError(
        "Cannot divide by zero"
      );
    });
  });

  describe("Percentage", () => {
    it("should calculate the correct percentage", () => {
      expect(calculator.percentage(20, 200)).toBeCloseTo(10);
    });
  });
});


