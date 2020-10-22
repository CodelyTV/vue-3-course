<template>
  <Carousel />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Carousel from "@/components/Carousel.vue";

export default defineComponent({
  components: {
    Carousel,
  },
});
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
body > * {
  width: 100%;
}
</style>
