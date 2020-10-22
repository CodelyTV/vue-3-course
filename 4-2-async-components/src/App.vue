<template>
  <Login />
  <CourseDetail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CourseDetail from "@/components/CourseDetail.vue";
import Login from "@/components/Login.vue";

export default defineComponent({
  components: {
    CourseDetail,
    Login,
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
