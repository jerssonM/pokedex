<template>
  <div class="loading-screen full-width bg-card">
    <img src="/img/loader.svg" class="loading-screen-loader" />
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
};
</script>

<style scoped>
.loading-screen {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
.loading-screen-loader {
  width: 106px;
  animation: rotate 3s infinite linear;
}
</style>
