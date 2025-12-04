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
});
