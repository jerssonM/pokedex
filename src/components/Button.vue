<template>
  <button class="button paragraph" :class="classObject" v-on:click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: String,
    fullWidth: { type: Boolean, default: () => false },
    onClick: { type: Function, default: () => {} },
  },
  computed: {
    classObject() {
      return {
        "bg-primary": !this.color || this.color === "primary",
        "bg-inactive": this.color === "inactive",
        "full-width": this.fullWidth,
      };
    },
  },
};
</script>

<style scoped>
.button {
  border: none;
  outline: none;
  color: white;
  padding: 11px 20px;
  border-radius: 60px;
  font-weight: 700;
  line-height: 21.6px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button:hover {
  cursor: pointer;
  filter: brightness(0.8);
}
</style>
