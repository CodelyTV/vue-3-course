<template>
  <header class="header">
    <User />
  </header>
  <CourseDetail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CourseDetail from "@/components/CourseDetail.vue";
import User from "@/components/User.vue";

export default defineComponent({
  components: {
    CourseDetail,
    User,
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

.header {
  padding: 0.5rem 2rem;
  background: #333;
  display: flex;
  justify-content: flex-end;
}
</style>
