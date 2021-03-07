/* eslint-disable no-undef */
import clipboard from "../../../src/utils/clipboard";

describe("strings", () => {
  const spy = jest.fn();
  global.document.execCommand = spy;
  it("should includes in strings", () => {
    clipboard("text");
    expect(spy).toHaveBeenCalled();
  });
});
