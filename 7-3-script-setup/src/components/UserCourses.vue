<template>
  <section class="dashboard">
    <header><slot /></header>
    <div class="dashboard-courses">
      <CourseCard
        v-for="course in courses"
        :course="course"
        :key="course.slug"
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

<script lang="ts">
import { computed, defineComponent, onMounted, Ref, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { api } from "@/services/api";
import { Course } from "@/types/Course";
import CourseCard from "@/components/CourseCard.vue";

export default defineComponent({
  props: {
    perPage: {
      type: Number,
      default: 3,
    },
  },
  components: {
    CourseCard,
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();

    const courses: Ref<Course[]> = ref([]);
    const totalCourses = ref(0);

    const coursesInProgress = computed(() => {
      return courses.value.filter(
        (course) => course.progress > 0 && course.progress < 100
      );
    });

    const canLoadMore = computed(() => {
      return totalCourses.value > courses.value.length;
    });

    async function getCourses() {
      const response = await api.getUserCourses({
        id: store.getters.userId,
        page: route.query.page,
        perPage: props.perPage,
      });

      courses.value = courses.value.concat(response.courses);
      totalCourses.value = response.total;
    }

    onMounted(getCourses);

    watch(() => route.query, getCourses);

    return {
      courses: coursesInProgress,
      canLoadMore,
    };
  },
});
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
