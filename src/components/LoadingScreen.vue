<template>
  <div class="loading-screen">
    <img src="/img/loader.svg" class="loading-screen-loader" />
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
};
</script>

<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading-screen {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-screen-loader {
  width: 106px;
  animation: rotate 8s infinite linear;
}
</style>
