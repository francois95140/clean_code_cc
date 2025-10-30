import { describe, it, expect } from "vitest";
import { yamsScore } from "./index.js";

describe("Sample Test", () => {
  it("should return give [[1,1,1,5,6]] pass", () => {
    expect(yamsScore([[1,1,1,5,6]])).toBe(14);
  });
});
describe("Test Brelan", () => {
  it("should return 32 give [[1,2,3,4,6],[1,2,3,4,6]] ", () => {
    expect(yamsScore([[1,2,2,4,5],[1,2,2,4,5]])).toBe(28);
  });
});
