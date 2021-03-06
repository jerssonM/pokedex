<template>
  <li class="pokemon-card-item bg-card" v-on:click="onClick">
    <p class="paragraph-large text-capitalize"><slot /></p>
    <FabButtonStar :onClick="onClickStar" />
  </li>
</template>

<script>
import FabButtonStar from "../components/FabButtonStar";

export default {
  name: "PokemonCardItem",
  components: { FabButtonStar },
  props: {
    onClickStar: { type: Function, default: () => {} },
    onClick: { type: Function, default: () => {} },
  },
};
</script>

<style scoped>
.pokemon-card-item {
  display: flex;
  padding: 18px 20px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 10px;
  width: stretch;
}
.pokemon-card-item:hover {
  cursor: pointer;
}
</style>
