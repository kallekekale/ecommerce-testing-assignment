import compact from "../../src/compact.js";

describe("compact - Manual Tests", () => {
  describe("Basic functionality", () => {
    test("should remove all falsy values from array", () => {
      expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
    });

    test("should return array with only truthy values unchanged", () => {
      expect(compact([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("should return empty array when all values are falsy", () => {
      expect(compact([0, false, "", null, undefined, NaN])).toEqual([]);
    });
  });

  describe("Individual falsy values", () => {
    test("should remove false", () => {
      expect(compact([1, false, 2])).toEqual([1, 2]);
    });

    test("should remove null", () => {
      expect(compact([1, null, 2])).toEqual([1, 2]);
    });

    test("should remove undefined", () => {
      expect(compact([1, undefined, 2])).toEqual([1, 2]);
    });

    test("should remove zero", () => {
      expect(compact([1, 0, 2])).toEqual([1, 2]);
    });

    test("should remove empty string", () => {
      expect(compact([1, "", 2])).toEqual([1, 2]);
    });

    test("should remove NaN", () => {
      expect(compact([1, NaN, 2])).toEqual([1, 2]);
    });
  });

  describe("Truthy values that should be kept", () => {
    test("should keep non-empty strings", () => {
      expect(compact(["hello", "", "world"])).toEqual(["hello", "world"]);
    });

    test("should keep non-zero numbers", () => {
      expect(compact([1, 0, -1, 2])).toEqual([1, -1, 2]);
    });

    test("should keep true boolean", () => {
      expect(compact([true, false, true])).toEqual([true, true]);
    });

    test("should keep objects", () => {
      const obj = { key: "value" };
      expect(compact([obj, null, obj])).toEqual([obj, obj]);
    });

    test("should keep arrays", () => {
      const arr = [1, 2, 3];
      expect(compact([arr, false, arr])).toEqual([arr, arr]);
    });

    test("should keep empty objects and arrays", () => {
      expect(compact([{}, [], null])).toEqual([{}, []]);
    });
  });

  describe("Edge cases", () => {
    test("should handle empty array", () => {
      expect(compact([])).toEqual([]);
    });

    test("should handle array with single truthy value", () => {
      expect(compact([1])).toEqual([1]);
    });

    test("should handle array with single falsy value", () => {
      expect(compact([0])).toEqual([]);
    });

    test("should handle array with multiple consecutive falsy values", () => {
      expect(compact([1, false, null, undefined, 2])).toEqual([1, 2]);
    });
  });

  describe("Mixed data types", () => {
    test("should handle mixed truthy and falsy values", () => {
      expect(compact([1, "hello", false, 2, null, "world", 0])).toEqual([
        1,
        "hello",
        2,
        "world",
      ]);
    });

    test("should handle array with objects and primitives", () => {
      expect(compact([{ a: 1 }, 0, "test", false, [1, 2]])).toEqual([
        { a: 1 },
        "test",
        [1, 2],
      ]);
    });
  });

  describe("Array immutability", () => {
    test("should not modify the original array", () => {
      const original = [0, 1, false, 2, "", 3];
      const copy = [...original];
      compact(original);
      expect(original).toEqual(copy);
    });

    test("should return a new array", () => {
      const original = [1, 2, 3];
      const result = compact(original);
      expect(result).not.toBe(original);
    });
  });
});
