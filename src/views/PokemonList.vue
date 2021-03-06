<template>
  <div class="pokemon-list">
    <SearchInput placeholder="Search" :onChange="onChangeSearchInput" />
    <PokemonCardList
      :pokemons="filteredPokemonList"
      :onClick="onClickPokemon"
      :onClickStar="onClickPokemonStar"
    />
    <BottomBar :onClick="onClickBottomBar" />
  </div>
</template>

<script>
import { includes } from "../utils/strings";
import BottomBar from "../components/BottomBar";
import SearchInput from "../components/SearchInput";
import PokemonCardList from "../components/PokemonCardList";
import { getStore, addToStore } from "../utils/favoritesStore";

export default {
  data() {
    return {
      inputText: "",
      pokemons: [],
      showAll: true,
    };
  },
  name: "PokemonList",
  components: { BottomBar, SearchInput, PokemonCardList },
  methods: {
    onChangeSearchInput({ target }) {
      this.inputText = target.value;
    },
    onClickPokemon(index) {
      console.log(index);
    },
    onClickPokemonStar(index) {
      const pokemon = this.filteredPokemonList[index];
      addToStore(pokemon);
    },
    onClickBottomBar(showAll) {
      this.showAll = showAll;
    },
  },
  computed: {
    filteredPokemonList() {
      if (!this.showAll) {
        return getStore();
      }
      return this.pokemons.filter(({ name }) =>
        this.inputText ? includes(name, this.inputText) : true
      );
    },
  },
  async mounted() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    this.pokemons = data.results;
  },
};
</script>

<style>
.pokemon-list {
  padding: 35px 30px 80px 30px;
}
.search-input-container {
  margin-bottom: 40px;
}
@media (min-width: 1024px) {
  .pokemon-list {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
