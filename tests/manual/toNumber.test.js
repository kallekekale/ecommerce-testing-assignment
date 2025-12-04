import toNumber from "../../src/toNumber.js";

describe("toNumber - Manual Tests", () => {
  describe("Basic functionality", () => {
    test("should return number unchanged", () => {
      expect(toNumber(3.2)).toBe(3.2);
    });

    test("should handle Number.MIN_VALUE", () => {
      expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
    });

    test("should handle Infinity", () => {
      expect(toNumber(Infinity)).toBe(Infinity);
    });

    test("should convert string number to number", () => {
      expect(toNumber("3.2")).toBe(3.2);
    });

    test("should handle zero", () => {
      expect(toNumber(0)).toBe(0);
    });

    test("should handle negative numbers", () => {
      expect(toNumber(-5.5)).toBe(-5.5);
    });

    test("should convert integer string to number", () => {
      expect(toNumber("42")).toBe(42);
    });

    test("should handle boolean true as 1", () => {
      expect(toNumber(true)).toBe(1);
    });

    test("should handle boolean false as 0", () => {
      expect(toNumber(false)).toBe(0);
    });

    test("should handle null as 0", () => {
      expect(toNumber(null)).toBe(0);
    });

    test("should handle undefined as NaN", () => {
      expect(toNumber(undefined)).toBeNaN();
    });

    test("should return NaN for invalid strings", () => {
      expect(toNumber("abc")).toBeNaN();
    });

    test("should handle binary strings", () => {
      expect(toNumber("0b1010")).toBe(10);
    });

    test("should handle octal strings", () => {
      expect(toNumber("0o12")).toBe(10);
    });

    test("should handle whitespace in strings", () => {
      expect(toNumber("  42  ")).toBe(42);
    });

    test("should return NaN for bad hex strings", () => {
      expect(toNumber("-0x1")).toBeNaN();
    });

    test("should handle negative Infinity", () => {
      expect(toNumber(-Infinity)).toBe(-Infinity);
    });
  });
});
