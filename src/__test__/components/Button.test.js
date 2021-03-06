import { mount } from "@vue/test-utils";

import Button from "../../components/Button";

describe("Button", () => {
  it("render slot", () => {
    const wrapper = mount(Button, { scopedSlots: { default: "Press me!" } });
    expect(wrapper.text()).toBe("Press me!");
  });
  //it("should call on click", () => {
  //const spy = jest.fn();
  //render(Button, { propsData: { onClick: spy } });
  //screen.getByText("Press me!").click();
  //expect(spy).toHaveBeCalled();
  //});
});
