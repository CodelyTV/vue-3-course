<template>
  <h1>Mis cursos</h1>
  <Carousel class="carousel" :items-to-show="4.5" snapAlign="start">
    <Slide v-for="course in courses" :key="course.slug">
      <Course :course="course" />
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Course from "@/components/Course.vue";
import courses from "@/data/courses.json";

export default defineComponent({
  components: {
    Course,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      courses,
    };
  },
});
</script>

<style scoped>
h1 {
  margin-top: 0;
}
</style>
