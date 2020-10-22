import courses from "./courses.json";
import { Course } from "@/types/Course";

export const api = {
  getCourses(): Promise<Course[]> {
    return new Promise(resolve => {
      resolve(courses);
    });
  },
};
