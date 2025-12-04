import capitalize from "../../src/capitalize.js";

describe("capitalize - Manual Tests", () => {
  describe("Basic functionality", () => {
    test("should capitalize first letter of lowercase string", () => {
      expect(capitalize("fred")).toBe("Fred");
    });

    test("should capitalize and lowercase rest of uppercase string", () => {
      expect(capitalize("FRED")).toBe("Fred");
    });

    test("should capitalize mixed case string", () => {
      expect(capitalize("fReD")).toBe("Fred");
    });

    test("should handle already capitalized string", () => {
      expect(capitalize("Fred")).toBe("Fred");
    });
  });

  describe("Edge cases", () => {
    test("should handle empty string", () => {
      expect(capitalize("")).toBe("");
    });

    test("should handle single character", () => {
      expect(capitalize("a")).toBe("A");
    });

    test("should handle string with multiple words", () => {
      expect(capitalize("hello world")).toBe("Hello world");
    });

    test("should handle string with numbers", () => {
      expect(capitalize("123abc")).toBe("123abc");
    });
  });

  describe("Different input types", () => {
    test("should handle null by converting to string", () => {
      expect(capitalize(null)).toBe("Null");
    });

    test("should handle undefined by converting to string", () => {
      expect(capitalize(undefined)).toBe("Undefined");
    });

    test("should handle number input", () => {
      expect(capitalize(123)).toBe("123");
    });
  });
});
