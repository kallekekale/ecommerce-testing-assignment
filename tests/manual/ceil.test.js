import ceil from "../../src/ceil.js";

describe("ceil - Manual Tests", () => {
  describe("Basic functionality", () => {
    test("should round up decimal to next integer", () => {
      expect(ceil(4.006)).toBe(5);
    });

    test("should round up with precision", () => {
      expect(ceil(6.004, 2)).toBe(6.01);
    });

    test("should round up with negative precision", () => {
      expect(ceil(6040, -2)).toBe(6100);
    });

    test("should return integer unchanged when no decimals", () => {
      expect(ceil(5)).toBe(5);
    });

    test("should round up negative numbers", () => {
      expect(ceil(-4.2)).toBe(-4);
    });

    test("should round up small decimal", () => {
      expect(ceil(0.001)).toBe(1);
    });

    test("should handle zero", () => {
      expect(ceil(0)).toBe(0);
    });

    test("should handle precision 0 explicitly", () => {
      expect(ceil(4.006, 0)).toBe(5);
    });

    test("should round up with positive precision", () => {
      expect(ceil(1.234, 1)).toBe(1.3);
    });

    test("should handle large numbers", () => {
      expect(ceil(12345.6789, 2)).toBe(12345.68);
    });
  });
});
