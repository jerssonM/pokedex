<template>
  <div class="non-items full-width text-bold">
    <h4 class="non-items-title title color-primary">Uh-oh!</h4>
    <p class="non-items-paragraph paragraph-large color-secondary">
      {{ $t("youLookLost") }}
    </p>
    <router-link to="/">
      <Button>{{ $t("goBackHome") }}</Button>
    </router-link>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "NonItems",
  components: { Button },
};
</script>

<style scoped>
.non-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.non-items-title {
  margin-bottom: 10px;
}
.non-items-paragraph {
  margin-bottom: 25px;
}
</style>
