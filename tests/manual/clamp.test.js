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

  describe("Edge cases with undefined bounds", () => {
    test("should treat undefined lower as no lower bound", () => {
      expect(clamp(-100, undefined, 5)).toBe(-100);
    });

    test("should treat undefined upper as no upper bound", () => {
      expect(clamp(100, -5, undefined)).toBe(100);
    });

    test("should work with both bounds undefined", () => {
      expect(clamp(50, undefined, undefined)).toBe(50);
    });

    test("should clamp when only upper bound is defined", () => {
      expect(clamp(10, undefined, 5)).toBe(5);
    });

    test("should clamp when only lower bound is defined", () => {
      expect(clamp(-10, -5, undefined)).toBe(-5);
    });
  });

  describe("NaN handling", () => {
    test("should return NaN when number is NaN", () => {
      expect(clamp(NaN, -5, 5)).toBeNaN();
    });

    test("should handle NaN as lower bound", () => {
      expect(clamp(0, NaN, 5)).toBe(0);
    });

    test("should handle NaN as upper bound", () => {
      expect(clamp(0, -5, NaN)).toBe(0);
    });

    test("should handle all NaN values", () => {
      expect(clamp(NaN, NaN, NaN)).toBeNaN();
    });
  });

  describe("Decimal numbers", () => {
    test("should work with decimal values", () => {
      expect(clamp(2.5, 0, 5)).toBe(2.5);
    });

    test("should clamp decimal below lower bound", () => {
      expect(clamp(0.5, 1.0, 5.0)).toBe(1.0);
    });

    test("should clamp decimal above upper bound", () => {
      expect(clamp(5.5, 0.0, 5.0)).toBe(5.0);
    });

    test("should handle very small decimals", () => {
      expect(clamp(0.001, 0, 1)).toBe(0.001);
    });
  });

  describe("Zero handling", () => {
    test("should handle zero as number", () => {
      expect(clamp(0, -5, 5)).toBe(0);
    });

    test("should handle zero as lower bound", () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });

    test("should handle zero as upper bound", () => {
      expect(clamp(5, -10, 0)).toBe(0);
    });

    test("should handle all zeros", () => {
      expect(clamp(0, 0, 0)).toBe(0);
    });

    test("should distinguish -0 from +0", () => {
      expect(clamp(-0, 0, 5)).toBe(-0);
    });
  });
});
