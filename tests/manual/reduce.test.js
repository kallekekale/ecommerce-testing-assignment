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

  describe("Iteratee arguments", () => {
    test("should pass correct 4 arguments to iteratee for arrays", () => {
      const array = [1, 2, 3];
      const args = [];
      
      reduce(
        array,
        (accumulator, value, index, collection) => {
          args.push({ accumulator, value, index, collection });
          return accumulator + value;
        },
        0
      );

      expect(args[0]).toEqual({
        accumulator: 0,
        value: 1,
        index: 0,
        collection: array,
      });
      expect(args[1]).toEqual({
        accumulator: 1,
        value: 2,
        index: 1,
        collection: array,
      });
      expect(args[2]).toEqual({
        accumulator: 3,
        value: 3,
        index: 2,
        collection: array,
      });
    });

    test("should pass correct 4 arguments to iteratee for objects", () => {
      const obj = { a: 1, b: 2 };
      const args = [];

      reduce(
        obj,
        (accumulator, value, key, collection) => {
          args.push({ accumulator, value, key, collection });
          return accumulator + value;
        },
        0
      );

      expect(args.length).toBe(2);
      expect(args[0].collection).toBe(obj);
      expect(args[1].collection).toBe(obj);
    });
  });

  describe("Edge cases", () => {
    test("should handle null collection with initial value", () => {
      expect(reduce(null, (sum, n) => sum + n, 0)).toBe(0);
    });

    test("should handle undefined collection with initial value", () => {
      expect(reduce(undefined, (sum, n) => sum + n, 0)).toBe(0);
    });

    test("should handle empty object with initial value", () => {
      expect(reduce({}, (sum, value) => sum + value, 0)).toBe(0);
    });

    test("should handle null values in array", () => {
      expect(reduce([1, null, 3], (sum, n) => sum + (n || 0), 0)).toBe(4);
    });
  });
});
