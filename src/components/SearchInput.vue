<template>
  <div class="search-input-container">
    <img src="/img/search.svg" alt="search-icon" class="search-input-icon" />
    <input
      class="search-input paragraph color-primary"
      :placeholder="placeholder"
      v-on:input="onChange"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: { onChange: Function, placeholder: String },
};
</script>

<style scoped>
.search-input {
  border: none;
  outline: none;
  padding: 14px 14px 14px 52px;
  border-radius: 5px;
  width: stretch;
  box-shadow: 0px 2px 10px var(--box-shadow);
  text-transform: capitalize;
}
.search-input::placeholder {
  color: var(--inactive-text-color);
}
.search-input-container {
  position: relative;
}
.search-input-icon {
  position: absolute;
  width: 18px;
  top: calc(50% - 9px);
  left: 24px;
}
</style>
