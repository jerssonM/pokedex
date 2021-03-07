import { shallowMount } from "@vue/test-utils";

import Button from "../../../src/components/Button";

describe("Button", () => {
  it("render slot", () => {
    const wrapper = shallowMount(Button, {
      slots: { default: "Press me!" },
    });
    expect(wrapper.text()).toBe("Press me!");
  });
  it("should call on click", () => {
    const spy = jest.fn();
    const wrapper = shallowMount(Button, { props: { onClick: spy } });
    wrapper.trigger("click");
    expect(spy).toHaveBeenCalled();
  });
});
