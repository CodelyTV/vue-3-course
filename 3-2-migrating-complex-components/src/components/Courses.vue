<template>
  <section class="courses">
    <h2 class="courses-title">👌 Cursos disponibles</h2>
    <Filters @filter="handleFilter" @search="handleSearch" />
    <div class="courses-collection">
      <CourseCard
        v-for="course in filteredCourses"
        :key="course.title"
        :course="course"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CourseCard from "@/components/CourseCard.vue";
import Filters from "@/components/Filters.vue";
import { api } from "@/services/api";
import { Course } from "@/types/Course.ts";

interface ComponentState {
  courses: Course[];
  filters: string[];
  searchQuery: string;
}

export default defineComponent({
  components: {
    CourseCard,
    Filters,
  },
  data(): ComponentState {
    return {
      courses: [],
      filters: [],
      searchQuery: "",
    };
  },
  async mounted() {
    this.courses = await api.getCourses();
  },
  computed: {
    filteredCourses(): Course[] {
      let filteredCourses = this.courses;
      if (this.searchQuery) {
        filteredCourses = filteredCourses.filter(course => {
          return course.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      }
      if (this.filters.length) {
        filteredCourses = filteredCourses.filter(course => {
          return course.category.find(category =>
            this.filters.includes(category),
          );
        });
      }
      return filteredCourses;
    },
  },
  methods: {
    handleFilter(filters: string[]) {
      this.filters = filters;
    },
    handleSearch(search: string) {
      this.searchQuery = search;
    },
  },
});
</script>

<style scoped>
.courses {
  max-width: 90rem;
  margin: 0 auto;
  padding: 4rem 1rem;
}
.courses-title {
  font-size: 2rem;
}
.courses-collection {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
