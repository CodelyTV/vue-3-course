import { onMounted, ref, Ref } from "vue";
import { api } from "@/services/api";
import { Course } from "@/types/Course";

export function useCourses() {
  const courses: Ref<Course[]> = ref([]);

  onMounted(async () => {
    courses.value = await api.getCourses();
  });

  return { courses };
}
