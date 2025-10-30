import { describe, it, expect } from "vitest";
import { test } from "./index.js";

describe("Sample Test", () => {
  it("should return give [[1,1,1,5,6]] pass", () => {
    expect(test([[1,1,1,5,6]])).toBe(14);
  });
});
