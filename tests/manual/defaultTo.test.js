import defaultTo from "../../src/defaultTo.js";

describe("defaultTo - Manual Tests", () => {
  describe("Basic functionality", () => {
    test("should return value when it is defined", () => {
      expect(defaultTo(1, 10)).toBe(1);
    });

    test("should return defaultValue when value is undefined", () => {
      expect(defaultTo(undefined, 10)).toBe(10);
    });

    test("should return defaultValue when value is null", () => {
      expect(defaultTo(null, 10)).toBe(10);
    });

    test("should return defaultValue when value is NaN", () => {
      expect(defaultTo(NaN, 10)).toBe(10);
    });
  });

  describe("Falsy values that should be returned", () => {
    test("should return zero as valid value", () => {
      expect(defaultTo(0, 10)).toBe(0);
    });

    test("should return false as valid value", () => {
      expect(defaultTo(false, true)).toBe(false);
    });

    test("should return empty string as valid value", () => {
      expect(defaultTo("", "default")).toBe("");
    });
  });

  describe("Different value types", () => {
    test("should handle string values", () => {
      expect(defaultTo("hello", "default")).toBe("hello");
    });

    test("should handle object values", () => {
      const obj = { key: "value" };
      expect(defaultTo(obj, {})).toBe(obj);
    });

    test("should handle array values", () => {
      const arr = [1, 2, 3];
      expect(defaultTo(arr, [])).toBe(arr);
    });
  });
});
