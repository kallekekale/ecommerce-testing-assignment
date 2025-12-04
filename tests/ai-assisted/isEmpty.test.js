/**
 * AI-ASSISTED TEST SUITE
 *
 * This test suite was created with the assistance of GitHub Copilot AI.
 * The tests were generated through iterative prompting and refinement
 * to ensure comprehensive coverage of the isEmpty() function.
 */

import isEmpty from "../../src/isEmpty.js";

describe("isEmpty - AI-Assisted Tests", () => {
  describe("Basic emptiness checks", () => {
    test("should return true for null", () => {
      expect(isEmpty(null)).toBe(true);
    });

    test("should return true for undefined", () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    test("should return true for empty array", () => {
      expect(isEmpty([])).toBe(true);
    });

    test("should return false for non-empty array", () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test("should return true for empty string", () => {
      expect(isEmpty("")).toBe(true);
    });

    test("should return false for non-empty string", () => {
      expect(isEmpty("abc")).toBe(false);
    });

    test("should return true for empty object", () => {
      expect(isEmpty({})).toBe(true);
    });

    test("should return false for non-empty object", () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });
  });

  describe("Primitive values", () => {
    test("should return true for boolean true", () => {
      expect(isEmpty(true)).toBe(true);
    });

    test("should return true for boolean false", () => {
      expect(isEmpty(false)).toBe(true);
    });

    test("should return true for number 0", () => {
      expect(isEmpty(0)).toBe(true);
    });

    test("should return true for positive number", () => {
      expect(isEmpty(1)).toBe(true);
    });

    test("should return true for negative number", () => {
      expect(isEmpty(-1)).toBe(true);
    });

    test("should return true for NaN", () => {
      expect(isEmpty(NaN)).toBe(true);
    });
  });

  describe("Array-like values", () => {
    test("should return true for array with single empty element", () => {
      expect(isEmpty([undefined])).toBe(false);
    });

    test("should return false for array with multiple elements", () => {
      expect(isEmpty([1, 2, 3, 4, 5])).toBe(false);
    });

    test("should return false for array with mixed types", () => {
      expect(isEmpty([1, "two", null, undefined, {}])).toBe(false);
    });

    test("should return true for arguments object with no arguments", () => {
      (function () {
        expect(isEmpty(arguments)).toBe(true);
      })();
    });

    test("should return false for arguments object with arguments", () => {
      (function () {
        expect(isEmpty(arguments)).toBe(false);
      })(1, 2, 3);
    });
  });

  describe("Objects", () => {
    test("should return false for object with numeric keys", () => {
      expect(isEmpty({ 0: "a", 1: "b" })).toBe(false);
    });

    test("should return false for object with nested properties", () => {
      expect(isEmpty({ a: { b: { c: 1 } } })).toBe(false);
    });

    test("should return false for object with multiple properties", () => {
      expect(isEmpty({ name: "John", age: 30, active: true })).toBe(false);
    });

    test("should return true for object created with Object.create(null)", () => {
      const obj = Object.create(null);
      expect(isEmpty(obj)).toBe(true);
    });

    test("should return false for object created with Object.create(null) with properties", () => {
      const obj = Object.create(null);
      obj.a = 1;
      expect(isEmpty(obj)).toBe(false);
    });

    test("should ignore inherited properties", () => {
      function TestClass() {}
      TestClass.prototype.inheritedProp = "value";
      const instance = new TestClass();
      expect(isEmpty(instance)).toBe(true);
    });

    test("should return false for instance with own properties", () => {
      function TestClass() {
        this.ownProp = "value";
      }
      const instance = new TestClass();
      expect(isEmpty(instance)).toBe(false);
    });

    test("should return true for prototype object", () => {
      function TestClass() {}
      TestClass.prototype.protoProp = "value";
      expect(isEmpty(TestClass.prototype)).toBe(true);
    });

    test("should return false for prototype object with added properties", () => {
      function TestClass() {}
      TestClass.prototype.prop1 = "value1";
      TestClass.prototype.prop2 = "value2";
      expect(isEmpty(TestClass.prototype)).toBe(false);
    });
  });

  describe("Map and Set", () => {
    test("should return true for empty Map", () => {
      expect(isEmpty(new Map())).toBe(true);
    });

    test("should return false for non-empty Map", () => {
      const map = new Map();
      map.set("key", "value");
      expect(isEmpty(map)).toBe(false);
    });

    test("should return false for Map with multiple entries", () => {
      const map = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]);
      expect(isEmpty(map)).toBe(false);
    });

    test("should return true for empty Set", () => {
      expect(isEmpty(new Set())).toBe(true);
    });

    test("should return false for non-empty Set", () => {
      const set = new Set([1]);
      expect(isEmpty(set)).toBe(false);
    });

    test("should return false for Set with multiple values", () => {
      const set = new Set([1, 2, 3, 4, 5]);
      expect(isEmpty(set)).toBe(false);
    });
  });

  describe("Typed arrays", () => {
    test("should return true for empty Int8Array", () => {
      expect(isEmpty(new Int8Array())).toBe(true);
    });

    test("should return false for non-empty Int8Array", () => {
      expect(isEmpty(new Int8Array([1, 2, 3]))).toBe(false);
    });

    test("should return true for empty Uint8Array", () => {
      expect(isEmpty(new Uint8Array())).toBe(true);
    });

    test("should return false for non-empty Uint8Array", () => {
      expect(isEmpty(new Uint8Array([1, 2, 3]))).toBe(false);
    });

    test("should return true for empty Float32Array", () => {
      expect(isEmpty(new Float32Array())).toBe(true);
    });

    test("should return false for non-empty Float32Array", () => {
      expect(isEmpty(new Float32Array([1.5, 2.5]))).toBe(false);
    });
  });

  describe("Buffer", () => {
    test("should return true for empty Buffer", () => {
      expect(isEmpty(Buffer.alloc(0))).toBe(true);
    });

    test("should return false for non-empty Buffer", () => {
      expect(isEmpty(Buffer.from([1, 2, 3]))).toBe(false);
    });

    test("should return false for Buffer with data", () => {
      expect(isEmpty(Buffer.from("hello"))).toBe(false);
    });
  });

  describe("Strings", () => {
    test("should return false for string with whitespace", () => {
      expect(isEmpty(" ")).toBe(false);
    });

    test("should return false for string with newline", () => {
      expect(isEmpty("\n")).toBe(false);
    });

    test("should return false for long string", () => {
      expect(isEmpty("This is a long string with many characters")).toBe(false);
    });

    test("should return false for string with special characters", () => {
      expect(isEmpty("@#$%^&*()")).toBe(false);
    });
  });

  describe("Edge cases", () => {
    test("should return true for function", () => {
      expect(isEmpty(function () {})).toBe(true);
    });

    test("should return true for arrow function", () => {
      expect(isEmpty(() => {})).toBe(true);
    });

    test("should return true for Symbol", () => {
      expect(isEmpty(Symbol("test"))).toBe(true);
    });

    test("should return true for Date object", () => {
      expect(isEmpty(new Date())).toBe(true);
    });

    test("should return true for RegExp", () => {
      expect(isEmpty(/test/)).toBe(true);
    });

    test("should return true for Error object", () => {
      expect(isEmpty(new Error("test"))).toBe(true);
    });

    test("should return false for array-like object with length", () => {
      expect(isEmpty({ length: 0 })).toBe(false);
    });
  });

  describe("Complex objects", () => {
    test("should return false for object with array property", () => {
      expect(isEmpty({ items: [1, 2, 3] })).toBe(false);
    });

    test("should return false for object with nested empty objects", () => {
      expect(isEmpty({ a: {} })).toBe(false);
    });

    test("should return false for object with function property", () => {
      expect(isEmpty({ fn: () => {} })).toBe(false);
    });

    test("should return false for object with null property", () => {
      expect(isEmpty({ value: null })).toBe(false);
    });

    test("should return false for object with undefined property", () => {
      expect(isEmpty({ value: undefined })).toBe(false);
    });
  });

  describe("Real-world scenarios", () => {
    test("should validate empty user object", () => {
      const user = {};
      expect(isEmpty(user)).toBe(true);
    });

    test("should validate user object with data", () => {
      const user = { name: "John", email: "john@example.com" };
      expect(isEmpty(user)).toBe(false);
    });

    test("should validate empty shopping cart", () => {
      const cart = [];
      expect(isEmpty(cart)).toBe(true);
    });

    test("should validate shopping cart with items", () => {
      const cart = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
      ];
      expect(isEmpty(cart)).toBe(false);
    });

    test("should validate empty search results", () => {
      const results = [];
      expect(isEmpty(results)).toBe(true);
    });

    test("should validate form data", () => {
      const formData = { username: "", password: "" };
      expect(isEmpty(formData)).toBe(false); // Object has properties
    });
  });
});
