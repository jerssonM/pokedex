import { includes, objectToString } from "../../../src/utils/strings";

describe("strings", () => {
  it("should includes in strings", () => {
    expect(includes("test includes", "test"));
  });
  it("should parse object values to strings", () => {
    expect(objectToString({ name: "test", id: null })).toBe("test,");
  });
});
