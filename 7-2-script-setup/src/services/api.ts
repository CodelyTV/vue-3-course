import courses from "./courses.json";
import { Course } from "@/types/Course";

interface Response {
  courses: Course[];
  total: number;
}

export const api = {
  getUserCourses({
    id,
    page = 1,
    perPage,
  }: {
    id: string;
    page?: any;
    perPage: number;
  }): Promise<Response> {
    const end = perPage * page;
    const start = end - perPage;

    return new Promise((resolve) => {
      resolve({
        courses: courses.slice(start, end),
        total: courses.length,
      });
    });
  },
};
