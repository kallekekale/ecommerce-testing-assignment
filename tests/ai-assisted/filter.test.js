/**
 * AI-ASSISTED TEST SUITE
 *
 * This test suite was created with the assistance of GitHub Copilot AI.
 * The tests were generated through iterative prompting and refinement
 * to ensure comprehensive coverage of the filter() function.
 */

import { jest } from "@jest/globals";
import filter from "../../src/filter.js";

describe("filter - AI-Assisted Tests", () => {
  describe("Basic filtering", () => {
    test("should filter array based on predicate function", () => {
      const array = [1, 2, 3, 4, 5];
      const result = filter(array, (n) => n > 3);
      expect(result).toEqual([4, 5]);
    });

    test("should filter objects based on property", () => {
      const users = [
        { user: "barney", active: true },
        { user: "fred", active: false },
        { user: "pebbles", active: true },
      ];
      const result = filter(users, ({ active }) => active);
      expect(result).toEqual([
        { user: "barney", active: true },
        { user: "pebbles", active: true },
      ]);
    });

    test("should return empty array when no elements match predicate", () => {
      const array = [1, 2, 3];
      const result = filter(array, (n) => n > 10);
      expect(result).toEqual([]);
    });

    test("should return all elements when all match predicate", () => {
      const array = [2, 4, 6, 8];
      const result = filter(array, (n) => n % 2 === 0);
      expect(result).toEqual([2, 4, 6, 8]);
    });
  });

  describe("Predicate function arguments", () => {
    test("should pass value, index, and array to predicate", () => {
      const array = ["a", "b", "c"];
      const mockPredicate = jest.fn(() => true);

      filter(array, mockPredicate);

      expect(mockPredicate).toHaveBeenCalledTimes(3);
      expect(mockPredicate).toHaveBeenNthCalledWith(1, "a", 0, array);
      expect(mockPredicate).toHaveBeenNthCalledWith(2, "b", 1, array);
      expect(mockPredicate).toHaveBeenNthCalledWith(3, "c", 2, array);
    });

    test("should use index in predicate function", () => {
      const array = [10, 20, 30, 40];
      const result = filter(array, (value, index) => index < 2);
      expect(result).toEqual([10, 20]);
    });
  });

  describe("Edge cases", () => {
    test("should handle null array", () => {
      const result = filter(null, (n) => n > 0);
      expect(result).toEqual([]);
    });

    test("should handle undefined array", () => {
      const result = filter(undefined, (n) => n > 0);
      expect(result).toEqual([]);
    });

    test("should handle empty array", () => {
      const result = filter([], (n) => n > 0);
      expect(result).toEqual([]);
    });

    test("should handle array with falsy values", () => {
      const array = [0, 1, false, 2, "", 3, null, undefined, NaN];
      const result = filter(array, Boolean);
      expect(result).toEqual([1, 2, 3]);
    });

    test("should handle array with one element", () => {
      const result = filter([5], (n) => n > 3);
      expect(result).toEqual([5]);
    });
  });

  describe("Data types", () => {
    test("should filter strings", () => {
      const array = ["apple", "banana", "cherry", "apricot"];
      const result = filter(array, (str) => str.startsWith("a"));
      expect(result).toEqual(["apple", "apricot"]);
    });

    test("should filter booleans", () => {
      const array = [true, false, true, false];
      const result = filter(array, (val) => val === true);
      expect(result).toEqual([true, true]);
    });

    test("should filter mixed types", () => {
      const array = [1, "two", 3, "four", 5];
      const result = filter(array, (val) => typeof val === "number");
      expect(result).toEqual([1, 3, 5]);
    });
  });

  describe("Complex predicates", () => {
    test("should filter with complex object conditions", () => {
      const products = [
        { name: "apple", price: 1.5, inStock: true },
        { name: "banana", price: 0.5, inStock: false },
        { name: "cherry", price: 3.0, inStock: true },
        { name: "date", price: 2.0, inStock: true },
      ];

      const result = filter(products, (p) => p.inStock && p.price < 2.5);
      expect(result).toEqual([
        { name: "apple", price: 1.5, inStock: true },
        { name: "date", price: 2.0, inStock: true },
      ]);
    });

    test("should handle nested objects", () => {
      const data = [
        { id: 1, details: { active: true } },
        { id: 2, details: { active: false } },
        { id: 3, details: { active: true } },
      ];

      const result = filter(data, (item) => item.details.active);
      expect(result).toEqual([
        { id: 1, details: { active: true } },
        { id: 3, details: { active: true } },
      ]);
    });
  });

  describe("Array immutability", () => {
    test("should not modify the original array", () => {
      const original = [1, 2, 3, 4, 5];
      const copy = [...original];

      filter(original, (n) => n > 2);

      expect(original).toEqual(copy);
    });

    test("should return a new array", () => {
      const original = [1, 2, 3];
      const result = filter(original, () => true);

      expect(result).not.toBe(original);
    });
  });
});
