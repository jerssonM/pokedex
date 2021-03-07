import { shallowMount } from "@vue/test-utils";

import FabButtonStar from "../../../src/components/FabButtonStar";

describe("FabButtonStar", () => {
  it("should call on click", () => {
    const spy = jest.fn();
    const wrapper = shallowMount(FabButtonStar, { props: { onClick: spy } });
    wrapper.trigger("click");
    expect(spy).toHaveBeenCalled();
  });
});
