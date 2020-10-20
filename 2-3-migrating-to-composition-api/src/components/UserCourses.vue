<template>
  <section class="dashboard">
    <header><slot /></header>
    <div class="dashboard-courses">
      <CourseCard
        v-for="course in coursesInProgress"
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
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { api } from "@/services/api";
import { Course } from "@/types/Course";
import CourseCard from "@/components/CourseCard.vue";

interface ComponentState {
  courses: Course[];
  totalCourses: number;
}

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
  data(): ComponentState {
    return {
      courses: [],
      totalCourses: 0,
    };
  },
  mounted() {
    this.getCourses();
  },
  watch: {
    $route() {
      this.getCourses();
    },
  },
  computed: {
    ...mapGetters({
      userId: "userId",
    }),
    coursesInProgress(): Course[] {
      return this.courses.filter(
        course => course.progress > 0 && course.progress < 100,
      );
    },
    canLoadMore(): boolean {
      return this.totalCourses > this.courses.length;
    },
  },
  methods: {
    async getCourses() {
      const { courses, total } = await api.getUserCourses({
        id: this.userId,
        page: this.$route.query.page,
        perPage: this.perPage,
      });
      this.courses = this.courses.concat(courses);
      this.totalCourses = total;
    },
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
