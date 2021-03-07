<template>
  <div class="home-screen">
    <img src="/img/pikachu.svg" class="home-screen-logo" />
    <h3 class="home-screen-title">Welcome to Pokédex</h3>
    <p class="home-screen-paragraph paragraph">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <router-link to="/pokemon-list">
      <Button>Get started</Button>
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
