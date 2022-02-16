<template>
  <UserCourses :per-page="6">
    <h1>Mis cursos</h1>
  </UserCourses>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCourses from "@/components/UserCourses.vue";

export default defineComponent({
  components: {
    UserCourses,
  },
});
</script>
