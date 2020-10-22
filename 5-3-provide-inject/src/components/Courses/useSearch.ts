import { ref, Ref } from "vue";
import { Course } from "@/types/Course";

export function useSearch() {
  const searchQuery: Ref<string> = ref("");

  function setSearchQuery(search: string) {
    searchQuery.value = search;
  }

  function searchByTitle(courses: Course[]) {
    if (searchQuery.value) {
      return courses.filter(item => {
        return item.title
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
      });
    }

    return courses;
  }

  return { searchByTitle, setSearchQuery };
}
