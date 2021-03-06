<template>
  <div class="bottom-bar bg-card">
    <div class="bottom-bar-buttons-container full-width">
      <Button
        fullWidth="true"
        :onClick="onClickButton"
        :color="showAll ? 'primary' : 'inactive'"
      >
        <img
          src="/img/all-list.svg"
          class="bottom-bar-img-icon"
          alt="all-list"
        />
        All</Button
      >
      <Button
        fullWidth="true"
        :onClick="onClickButton"
        :color="showAll ? 'inactive' : 'primary'"
      >
        <img
          src="/img/star-white.svg"
          class="bottom-bar-img-icon"
          alt="star-white"
        />
        Favorites</Button
      >
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  data() {
    return {
      showAll: true,
    };
  },
  components: { Button },
  props: { onClick: { type: Function, default: () => {} } },
  methods: {
    onClickButton(e) {
      this.showAll = !this.showAll;
      this.onClick(this.showAll, e);
    },
  },
};
</script>

<style>
.bottom-bar {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80px;
  width: 100%;
}
.bottom-bar-buttons-container {
  display: flex;
  align-items: center;
  padding: 0 30px;
}
.bottom-bar-buttons-container button:first-of-type {
  margin-right: 15px;
}
.bottom-bar-img-icon {
  margin-right: 10px;
  width: 22px;
}
@media (min-width: 1024px) {
  .bottom-bar-buttons-container {
    width: 50%;
  }
}
</style>
