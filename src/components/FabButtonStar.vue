<template>
  <button class="fab-button-star" v-on:click.stop="onClickButton">
    <img v-if="isSelected" src="/img/star.svg" alt="search-icon" />
    <img v-else src="/img/star-off.svg" alt="search-icon" />
  </button>
</template>

<script>
export default {
  name: "FabButtonStar",
  props: {
    onClick: { type: Function, default: () => {} },
    isSelected: { type: Boolean, default: false },
  },
  methods: {
    onClickButton(e) {
      this.onClick(!this.isSelected, e);
    },
  },
};
</script>

<style scoped>
.fab-button-star {
  border: none;
  outline: none;
  padding: 9px;
  border-radius: 50%;
  height: 44px;
  width: 44px;
}
.fab-button-star:hover {
  cursor: pointer;
}
</style>
