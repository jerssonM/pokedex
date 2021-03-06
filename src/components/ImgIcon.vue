<template>
  <img :src="src" class="img-icon" />
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
  },
};
</script>

<style>
.img-icon {
  width: 22px;
}
</style>
