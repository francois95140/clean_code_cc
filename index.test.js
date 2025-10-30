import { describe, it, expect } from "vitest";
import { yamsScore } from "./index.js";

describe("Sample Test", () => {
  it("should return give [[1,1,1,5,6]] pass", () => {
    expect(yamsScore([[1,1,1,5,6]])).toBe(14);
  });
});
describe("Test Brelan", () => {
  it("should return give [[1,2,3,4,6],[1,2,3,4,6]] pass", () => {
    expect(yamsScore([[1,2,3,4,6],[1,2,3,4,6]])).toBe(32);
  });
});
