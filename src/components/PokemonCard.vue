<template>
  <div class="pokemon-card-overlay full-width bg-overlay">
    <div class="pokemon-card bg-card">
      <picture class="pokemon-card-image-container">
        <img
          :src="pokemon.imgUrl"
          :alt="pokemon.name"
          class="pokemon-card-image"
        />
        <img
          src="/img/close.svg"
          alt="close"
          class="pokemon-card-icon-close"
          v-on:click="onClickCloseIcon"
        />
      </picture>
      <div class="pokemon-card-content">
        <ul class="pokemon-card-list">
          <li
            class="pokemon-card-list-item paragraph text-capitalize color-secondary"
          >
            <span class="text-bold">Name:</span> {{ pokemon.name }}
          </li>
          <li class="pokemon-card-list-item paragraph color-secondary">
            <span class="text-bold">Weight:</span> {{ pokemon.weight }}
          </li>
          <li class="pokemon-card-list-item paragraph color-secondary">
            <span class="text-bold">Height:</span> {{ pokemon.height }}
          </li>
          <li
            class="pokemon-card-list-item paragraph text-capitalize color-secondary"
          >
            <span class="text-bold">Types:</span> {{ pokemon.types.join(", ") }}
          </li>
        </ul>
        <div class="pokemon-card-buttons-container">
          <Button v-on:click="onClickShareButton">Share to my friends</Button>
          <FabButtonStar
            :onClick="onClickFabIcon"
            :isSelected="isSelectedStar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import clipboard from "../utils/clipboard";
import FabButtonStar from "./FabButtonStar";
import { objectToString } from "../utils/strings";

export default {
  name: "PokemonCard",
  components: { Button, FabButtonStar },
  props: {
    pokemon: {
      type: Object,
      default: () => ({
        index: 0,
        name: "",
        weight: 0,
        height: 0,
        types: [],
        imgUrl: "",
      }),
    },
    isSelectedStar: { type: Boolean, default: () => false },
    onClickCloseIcon: { type: Function, default: () => {} },
    onClickStar: { type: Function, default: () => {} },
  },
  methods: {
    onClickShareButton() {
      clipboard(objectToString({ ...this.pokemon, imgUrl: null, index: null }));
    },
    onClickFabIcon(e) {
      this.onClickStar(this.pokemon.index, e);
    },
  },
};
</script>

<style scoped>
.pokemon-card-overlay {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pokemon-card {
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px);
  height: 85%;
  margin: 0 auto;
  border-radius: 5px;
  overflow-y: auto;
}
.pokemon-card-image-container {
  background-image: url("/img/img-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  height: stretch;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}
.pokemon-card-image {
  width: 180px;
}
.pokemon-card-icon-close {
  position: absolute;
  top: 15px;
  right: 15px;
}
.pokemon-card-icon-close:hover {
  cursor: pointer;
}
.pokemon-card-content {
  padding: 30px;
}
.pokemon-card-list {
  list-style: none;
  margin-bottom: 20px;
}
.pokemon-card-list-item {
  padding: 10px 0;
  border-bottom: 1px solid var(--border-list);
}
.pokemon-card-buttons-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pokemon-card-buttons-container button {
  margin-right: 10px;
}
@media (min-width: 1024px) {
  .pokemon-card {
    height: 70%;
    width: 50%;
  }
}
</style>
