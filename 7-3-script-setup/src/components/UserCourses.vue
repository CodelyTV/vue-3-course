<template>
  <section class="dashboard">
    <header><slot /></header>
    <div class="dashboard-courses">
      <CourseCard
        v-for="course in courses"
        :key="course.slug"
        :course="course"
      />
    </div>
    <router-link
      v-if="canLoadMore"
      class="dashboard-next"
      :to="{ name: 'Home', query: { page: 2 } }"
      >Load more</router-link
    >
  </section>
</template>

<script lang="ts" setup>
import CourseCard from "@/components/CourseCard.vue";
import { getUserCourses } from "./UserCourses";

interface Props {
  perPage: number;
}

const props = withDefaults(defineProps<Props>(), {
  perPage: 3,
});

const { courses, canLoadMore } = getUserCourses(props.perPage);
</script>

<style scoped>
.dashboard {
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem;
}

.dashboard-courses {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.dashboard-next {
  display: block;
  text-align: center;
  color: #333;
  text-decoration: none;
  border-radius: 0.2rem;
  padding: 0.8rem;
}
.dashboard-next:hover,
.dashboard-next:focus {
  outline: none;
  background: rgba(0, 0, 0, 0.05);
}
</style>
