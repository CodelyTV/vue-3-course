<template>
  <CourseDetail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CourseDetail from "@/components/CourseDetail.vue";

export default defineComponent({
  components: {
    CourseDetail,
  },
});
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
