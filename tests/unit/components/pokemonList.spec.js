import { mount } from "@vue/test-utils";

import PokemonList from "../../../src/components/PokemonList";

describe("PokemonList", () => {
  it("render list items", () => {
    const wrapper = mount(PokemonList, {
      props: { pokemons: [{ name: "Pikachu" }, { name: "Venusaur" }] },
    });
    expect(wrapper.findAll("li").length).toBe(2);
  });
  it("should call on click", () => {
    const spy = jest.fn();
    const spyStar = jest.fn();
    const wrapper = mount(PokemonList, {
      props: {
        pokemons: [{ name: "Pikachu" }, { name: "Venusaur" }],
        onClick: spy,
        onClickStar: spyStar,
      },
    });
    wrapper.find("li").trigger("click");
    wrapper.find("img").trigger("click");
    expect(spy).toHaveBeenCalled();
    expect(spyStar).toHaveBeenCalled();
  });
});
