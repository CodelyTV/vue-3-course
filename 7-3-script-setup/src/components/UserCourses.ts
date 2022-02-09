import { computed, onMounted, Ref, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { api } from "@/services/api";
import { Course } from "@/types/Course";

export function getUserCourses(perPage: number) {
  const store = useStore();
  const route = useRoute();

  const courses: Ref<Course[]> = ref([]);
  const totalCourses = ref(0);

  const coursesInProgress = computed(() => {
    return courses.value.filter(
      course => course.progress > 0 && course.progress < 100,
    );
  });

  const canLoadMore = computed(() => {
    return totalCourses.value > courses.value.length;
  });

  async function getCourses() {
    const response = await api.getUserCourses({
      id: store.getters.userId,
      page: route.query.page,
      perPage: perPage,
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
}
