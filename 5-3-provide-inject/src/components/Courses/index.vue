<template>
  <section class="courses">
    <h2 class="courses-title">👌 Cursos disponibles</h2>
    <Filters
      @filter="setFilters"
      @search="setSearchQuery"
      :courses-length="courses.length"
    />
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
import { computed, defineComponent } from "vue";
import CourseCard from "@/components/CourseCard.vue";
import Filters from "@/components/Filters.vue";
import { useCourses } from "./useCourses";
import { useSearch } from "./useSearch";
import { useFilter } from "./useFilter";

export default defineComponent({
  components: {
    CourseCard,
    Filters,
  },
  setup() {
    const { courses } = useCourses();
    const { searchByTitle, setSearchQuery } = useSearch();
    const { filterByCategory, setFilters } = useFilter();

    const filteredCourses = computed(() => {
      return filterByCategory(searchByTitle(courses.value));
    });

    return {
      courses: filteredCourses,
      setFilters,
      setSearchQuery,
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
