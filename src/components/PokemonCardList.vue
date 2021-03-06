<template>
  <ul class="pokemon-card-list">
    <PokemonCardItem
      v-for="(pokemon, index) in pokemons"
      v-bind:key="pokemon.name"
      :onClick="(e) => onClick(index, e)"
      :onClickStar="(e) => onClickStar(index, e)"
    >
      {{ pokemon.name }}
    </PokemonCardItem>
  </ul>
</template>

<script>
import PokemonCardItem from "./PokemonCardItem";
export default {
  components: {
    PokemonCardItem,
  },
  props: {
    pokemons: { type: Array, default: () => [] },
    onClick: { type: Function, default: () => {} },
    onClickStar: { type: Function, default: () => {} },
  },
};
</script>

<style>
.pokemon-card-list {
  width: 100%;
}
</style>
