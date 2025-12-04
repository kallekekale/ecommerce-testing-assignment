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
});
