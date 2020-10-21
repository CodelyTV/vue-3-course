import { ref, Ref } from "vue";
import { Course } from "@/types/Course";

export function useFilter() {
  const filters: Ref<string[]> = ref([]);

  function setFilters(newFilters: string[]) {
    filters.value = newFilters;
  }

  function filterByCategory(courses: Course[]) {
    if (filters.value.length) {
      return courses.filter(course => {
        return course.category.find(category =>
          filters.value.includes(category),
        );
      });
    }
    return courses;
  }

  return { filterByCategory, setFilters };
}
