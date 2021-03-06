import {
  POKEMONS_API_IMG,
  POKEMONS_API_LIST,
  POKEMONS_API_DETAIL,
} from "./constants";

export default {
  getAllPokemons: { url: POKEMONS_API_LIST, method: "get", key: "results" },
  getPokemonDetail: {
    url: POKEMONS_API_DETAIL,
    method: "get",
    serializer: (data) => ({
      name: data.name,
      weight: data.weight,
      height: data.height,
      imgUrl: `${POKEMONS_API_IMG}${data.id}.png`,
      types: data.types.map(({ type }) => type.name),
    }),
  },
};
