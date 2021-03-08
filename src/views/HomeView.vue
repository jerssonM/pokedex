<template>
  <div class="home-screen">
    <img src="/img/pikachu.svg" class="home-screen-logo" />
    <h3 class="home-screen-title">{{ $t("welcomePokedex") }}</h3>
    <p class="home-screen-paragraph paragraph">
      {{ $t("theDigitalEncyclopedia") }}
    </p>
    <router-link to="/pokemon-list">
      <Button>{{ $t("getStarted") }}</Button>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "HomeScreen",
  components: { Button },
};
</script>

<style scoped>
.home-screen {
  height: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
}
.home-screen-logo {
  margin-bottom: 60px;
  width: 325px;
}
.home-screen-title {
  margin-bottom: 30px;
}
.home-screen-paragraph {
  margin-bottom: 50px;
  font-weight: 300;
  text-align: center;
}
@media (min-width: 1024px) {
  .home-screen-paragraph {
    width: 50%;
  }
}
</style>
