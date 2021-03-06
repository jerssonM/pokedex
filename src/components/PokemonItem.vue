<template>
  <li class="pokemon-item bg-card" v-on:click="onClick">
    <p class="paragraph-large text-capitalize color-primary"><slot /></p>
    <FabButtonStar :onClick="onClickStar" :isSelected="isSelectedStar" />
  </li>
</template>

<script>
import FabButtonStar from "../components/FabButtonStar";

export default {
  name: "PokemonItem",
  components: { FabButtonStar },
  props: {
    onClickStar: { type: Function, default: () => {} },
    onClick: { type: Function, default: () => {} },
    isSelectedStar: { type: Boolean, default: () => false },
  },
};
</script>

<style scoped>
.pokemon-item {
  display: flex;
  padding: 18px 20px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 10px;
  width: stretch;
}
.pokemon-item:hover {
  cursor: pointer;
}
</style>
