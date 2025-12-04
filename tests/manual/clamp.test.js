import clamp from "../../src/clamp.js";

describe("clamp - Manual Tests", () => {
  describe("Basic functionality", () => {
    test("should clamp number below lower bound", () => {
      expect(clamp(-10, -5, 5)).toBe(-5);
    });

    test("should clamp number above upper bound", () => {
      expect(clamp(10, -5, 5)).toBe(5);
    });

    test("should return number within bounds unchanged", () => {
      expect(clamp(0, -5, 5)).toBe(0);
    });

    test("should handle number equal to lower bound", () => {
      expect(clamp(-5, -5, 5)).toBe(-5);
    });

    test("should handle number equal to upper bound", () => {
      expect(clamp(5, -5, 5)).toBe(5);
    });

    test("should work with positive bounds", () => {
      expect(clamp(15, 10, 20)).toBe(15);
    });

    test("should work with negative bounds", () => {
      expect(clamp(-15, -20, -10)).toBe(-15);
    });
  });
});
