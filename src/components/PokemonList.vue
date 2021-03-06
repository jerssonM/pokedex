<template>
  <ul class="pokemon-list">
    <PokemonItem
      v-for="(pokemon, index) in pokemons"
      v-bind:key="pokemon.name"
      :isSelectedStar="favorites.includes(pokemon.name)"
      :onClick="(e) => onClick(index, e)"
      :onClickStar="(e) => onClickStar(index, e)"
    >
      {{ pokemon.name }}
    </PokemonItem>
  </ul>
</template>

<script>
import PokemonItem from "./PokemonItem";

export default {
  name: "PokemonList",
  components: {
    PokemonItem,
  },
  props: {
    pokemons: { type: Array, default: () => [] },
    favorites: { type: Array, default: () => [] },
    onClick: { type: Function, default: () => {} },
    onClickStar: { type: Function, default: () => {} },
  },
};
</script>

<style scoped>
.pokemon-list {
  width: 100%;
}
</style>
