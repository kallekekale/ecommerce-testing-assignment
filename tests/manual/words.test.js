import words from "../../src/words.js";

describe("words - Manual Tests", () => {
  describe("Basic functionality", () => {
    test("should split string with commas into words", () => {
      expect(words("fred, barney, & pebbles")).toEqual([
        "fred",
        "barney",
        "pebbles",
      ]);
    });

    test("should split simple sentence into words", () => {
      expect(words("hello world")).toEqual(["hello", "world"]);
    });

    test("should handle single word", () => {
      expect(words("hello")).toEqual(["hello"]);
    });

    test("should handle empty string", () => {
      expect(words("")).toEqual([]);
    });

    test("should split camelCase", () => {
      expect(words("camelCaseString")).toEqual(["camel", "Case", "String"]);
    });

    test("should split PascalCase", () => {
      expect(words("PascalCaseString")).toEqual(["Pascal", "Case", "String"]);
    });

    test("should handle words with numbers", () => {
      expect(words("test123 word456")).toEqual(["test", "123", "word", "456"]);
    });

    test("should handle multiple spaces", () => {
      expect(words("hello    world")).toEqual(["hello", "world"]);
    });

    test("should use custom pattern", () => {
      expect(words("fred, barney, & pebbles", /[^, ]+/g)).toEqual([
        "fred",
        "barney",
        "&",
        "pebbles",
      ]);
    });

    test("should handle special characters", () => {
      expect(words("hello-world_test")).toEqual(["hello", "world", "test"]);
    });
  });

  describe("Edge cases", () => {
    test("should throw error with undefined input", () => {
      expect(() => words(undefined)).toThrow();
    });

    test("should throw error with null input", () => {
      expect(() => words(null)).toThrow();
    });

    test("should throw error with number input", () => {
      expect(() => words(123)).toThrow();
    });

    test("should throw error with boolean input", () => {
      expect(() => words(true)).toThrow();
    });

    test("should throw error with object input", () => {
      expect(() => words({ key: "value" })).toThrow();
    });
  });
});
