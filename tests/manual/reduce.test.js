import reduce from "../../src/reduce.js";

describe("reduce - Manual Tests", () => {
  describe("Basic functionality", () => {
    test("should sum array of numbers with initial value", () => {
      expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6);
    });

    test("should sum array of numbers without initial value", () => {
      expect(reduce([1, 2, 3], (sum, n) => sum + n)).toBe(6);
    });

    test("should multiply array of numbers", () => {
      expect(reduce([2, 3, 4], (product, n) => product * n, 1)).toBe(24);
    });

    test("should concatenate strings", () => {
      expect(reduce(["a", "b", "c"], (result, str) => result + str, "")).toBe(
        "abc"
      );
    });

    test("should build array from accumulator", () => {
      const result = reduce(
        [1, 2, 3],
        (acc, n) => {
          acc.push(n * 2);
          return acc;
        },
        []
      );
      expect(result).toEqual([2, 4, 6]);
    });

    test("should reduce object values", () => {
      const result = reduce(
        { a: 1, b: 2, c: 3 },
        (sum, value) => sum + value,
        0
      );
      expect(result).toBe(6);
    });

    test("should group by value", () => {
      const result = reduce(
        { a: 1, b: 2, c: 1 },
        (result, value, key) => {
          (result[value] || (result[value] = [])).push(key);
          return result;
        },
        {}
      );
      expect(result["1"]).toContain("a");
      expect(result["1"]).toContain("c");
      expect(result["2"]).toContain("b");
    });

    test("should handle empty array with initial value", () => {
      expect(reduce([], (sum, n) => sum + n, 0)).toBe(0);
    });

    test("should handle single element array with initial value", () => {
      expect(reduce([5], (sum, n) => sum + n, 10)).toBe(15);
    });

    test("should handle single element array without initial value", () => {
      expect(reduce([5], (sum, n) => sum + n)).toBe(5);
    });
  });
});
