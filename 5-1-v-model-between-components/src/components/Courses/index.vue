<template>
  <section class="courses">
    <h2 class="courses-title">👌 Cursos disponibles</h2>
    <Search :query="searchQuery" @update:query="searchQuery = $event" />
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
import { computed, defineComponent, onMounted, Ref, ref } from "vue";
import { useRoute } from "vue-router";
import CourseCard from "@/components/CourseCard.vue";
import Search from "@/components/Search.vue";
import { useCourses } from "./useCourses";

export default defineComponent({
  components: {
    CourseCard,
    Search,
  },
  setup() {
    const route = useRoute();
    const { courses } = useCourses();
    const searchQuery: Ref<string> = ref("");

    onMounted(async () => {
      searchQuery.value = route.query.search as string;
    });

    const filteredCourses = computed(() => {
      if (searchQuery.value) {
        return courses.value.filter(item => {
          return item.title
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase());
        });
      }

      return courses.value;
    });

    return {
      courses: filteredCourses,
      searchQuery,
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
