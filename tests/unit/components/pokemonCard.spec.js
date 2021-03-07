/* eslint-disable no-undef */
import { mount, shallowMount } from "@vue/test-utils";

import PokemonCard from "../../../src/components/PokemonCard";

describe("PokemonCard", () => {
  it("render list items", () => {
    const wrapper = shallowMount(PokemonCard, {
      props: {
        pokemon: {
          name: "Pikachu",
          height: 0,
          weight: 0,
          types: ["fire"],
          index: 1,
        },
      },
    });
    expect(wrapper.findAll("li").length).toBe(4);
  });
  it("should call on click events", () => {
    const spy = jest.fn();
    const spyCloseIcon = jest.fn();
    const spyClipboard = jest.fn();
    global.document.execCommand = spyClipboard;

    const wrapper = mount(PokemonCard, {
      props: { onClick: spy, onClickCloseIcon: spyCloseIcon },
    });
    wrapper.find("button img").trigger("click");
    wrapper.find("button").trigger("click");
    wrapper.findAll(".pokemon-card-icon-close")[0].trigger("click");
    expect(spy).toHaveBeenCalled();
    expect(spyCloseIcon).toHaveBeenCalled();
    expect(spyClipboard).toHaveBeenCalled();
  });
});
