<template>
  <div class="pokemon-list-view">
    <SearchInput placeholder="Search" :onChange="onChangeSearchInput" />
    <NonItems v-if="filteredPokemonList.length === 0 && inputText" />
    <PokemonList
      :pokemons="filteredPokemonList"
      :onClick="onClickPokemon"
      :onClickStar="onClickPokemonStar"
      :favorites="favoritePokemonsNames"
      :loadMoreData="fetchPokemons"
      :showLoader="showAll && !inputText"
    />
    <BottomBar :onClick="onClickBottomBar" />
    <PokemonCard
      v-if="selectedPokemon !== null"
      :pokemon="selectedPokemon"
      :onClickCloseIcon="closePokemonCard"
      :onClickStar="onClickPokemonStar"
      :isSelectedStar="favoritePokemonsNames.includes(selectedPokemon?.name)"
    />
    <LoadingScreen v-if="isLoading" />
  </div>
</template>

<script>
import { includes } from "../utils/strings";
import apiRequest from "../utils/apiRequest";
import NonItems from "../components/NonItems";
import BottomBar from "../components/BottomBar";
import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";
import SearchInput from "../components/SearchInput";
import LoadingScreen from "../components/LoadingScreen";
import { getStore, addToStore } from "../utils/favoritesStore";

export default {
  data() {
    return {
      inputText: "",
      pokemons: [],
      showAll: true,
      countItems: 20,
      isLoading: true,
      isFetching: false,
      selectedPokemon: null,
      favoritesPokemons: [],
    };
  },
  name: "PokemonListView",
  components: {
    NonItems,
    BottomBar,
    SearchInput,
    LoadingScreen,
    PokemonList,
    PokemonCard,
  },
  methods: {
    onChangeSearchInput({ target }) {
      this.inputText = target.value;
    },
    async onClickPokemon(index) {
      const pokemon = this.filteredPokemonList[index];
      const data = await apiRequest("getPokemonDetail", pokemon.name);
      this.selectedPokemon = { ...data, index };
    },
    onClickPokemonStar(index) {
      const pokemon = this.filteredPokemonList[index];
      this.favoritesPokemons = addToStore(pokemon);
    },
    onClickBottomBar(showAll) {
      this.showAll = showAll;
    },
    closePokemonCard() {
      this.selectedPokemon = null;
    },
    disableLoadingScreen() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    async fetchPokemons() {
      if (!this.isFetching && this.showAll && !this.inputText) {
        this.isFetching = true;
        const data = await apiRequest(
          "getAllPokemons",
          `?offset=${this.countItems - 20}&limit=${this.countItems}`
        );
        if (data && !data.error) {
          this.pokemons = this.pokemons.concat(data);
          this.countItems += 20;
        }
        this.isFetching = false;
      }
    },
  },
  computed: {
    filteredPokemonList() {
      const pokemonsToFilter = !this.showAll
        ? this.favoritesPokemons
        : this.pokemons;
      return pokemonsToFilter.filter(({ name }) =>
        this.inputText ? includes(name, this.inputText) : true
      );
    },
    favoritePokemonsNames() {
      return this.favoritesPokemons.map(({ name }) => name);
    },
  },
  async mounted() {
    this.fetchPokemons();
    this.favoritesPokemons = getStore();
    this.disableLoadingScreen();
  },
};
</script>

<style>
.pokemon-list-view {
  padding: 35px 30px 80px 30px;
}
.search-input-container {
  margin-bottom: 40px;
}
@media (min-width: 1024px) {
  .pokemon-list-view {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
