<template>
  <div class="pokemon-list-container">
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
    <div class="pokemon-list-loader" ref="pokemonListLoader">
      <img src="/img/loader.svg" alt="pokeball" v-if="showLoader" />
    </div>
  </div>
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
    showLoader: { type: Boolean, default: () => false },
    loadMoreData: { type: Function, default: () => {} },
  },
  methods: {
    pokemonListIntersection(entries) {
      const [element] = entries;
      if (element.isIntersecting && this.pokemons.length > 0) {
        this.loadMoreData();
      }
    },
  },
  mounted() {
    const observer = new IntersectionObserver(this.pokemonListIntersection, {
      threshold: 1,
    });
    observer.observe(this.$refs.pokemonListLoader);
  },
};
</script>

<style scoped>
.pokemon-list {
  width: 100%;
}
.pokemon-list-loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
