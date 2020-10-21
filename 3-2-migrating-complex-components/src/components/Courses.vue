<template>
  <section class="courses">
    <h2 class="courses-title">👌 Cursos disponibles</h2>
    <Filters @filter="handleFilter" @search="handleSearch" />
    <div class="courses-collection">
      <CourseCard
        v-for="course in courses"
        :key="course.title"
        :course="course"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref } from "vue";
import CourseCard from "@/components/CourseCard.vue";
import Filters from "@/components/Filters.vue";
import { api } from "@/services/api";
import { Course } from "@/types/Course.ts";

export default defineComponent({
  components: {
    CourseCard,
    Filters,
  },
  setup() {
    const courses: Ref<Course[]> = ref([]);
    const filters: Ref<string[]> = ref([]);
    const searchQuery: Ref<string> = ref("");

    onMounted(async () => {
      courses.value = await api.getCourses();
    });

    const filteredCourses = computed(() => {
      let filteredCourses = courses.value;
      if (searchQuery.value) {
        filteredCourses = filteredCourses.filter(course => {
          return course.title
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase());
        });
      }
      if (filters.value.length) {
        filteredCourses = filteredCourses.filter(course => {
          return course.category.find(category =>
            filters.value.includes(category),
          );
        });
      }
      return filteredCourses;
    });

    function handleFilter(newFilters: string[]) {
      filters.value = newFilters;
    }

    function handleSearch(search: string) {
      searchQuery.value = search;
    }

    return {
      courses: filteredCourses,
      handleFilter,
      handleSearch,
    };
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
