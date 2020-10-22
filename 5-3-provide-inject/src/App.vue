<template>
  <Courses />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Courses from "@/components/Courses/index.vue";

export default defineComponent({
  components: {
    Courses,
  },
});
</script>

<style>
body {
  background: #eee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sr-only {
  position: absolute;
  top: auto;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
