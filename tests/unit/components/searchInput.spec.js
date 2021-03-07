import { mount } from "@vue/test-utils";

import SearchInput from "../../../src/components/SearchInput";

describe("SearchInput", () => {
  it("should call on change", () => {
    const spy = jest.fn();
    const wrapper = mount(SearchInput, { props: { onChange: spy } });
    const input = wrapper.find("input");
    input.trigger("input", { element: { value: "Pikachu" } });
    input.element.value = "Pikachu";

    expect(spy).toHaveBeenCalled();
    expect(input.element.value).toBe("Pikachu");
  });
});
