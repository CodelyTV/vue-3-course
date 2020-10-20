<template>
  <section class="courses">
    <h2 class="courses-title">👌 Cursos disponibles</h2>
    <div class="courses-collection">
      <CourseCard
        v-for="(course, index) in courses"
        :key="course.title"
        :course="course"
        @click="openCourseModal(index)"
      />
    </div>
    <transition name="fade">
      <Modal v-if="isOpen" @close="closeModal">
        <CourseInfo :course="selectedCourse" />
      </Modal>
    </transition>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CourseCard from "@/components/CourseCard.vue";
import CourseInfo from "@/components/CourseInfo.vue";
import Modal from "@/components/Modal.vue";
import track from "@/mixins/track.js";
import courses from "@/services/courses.json";
import { Course } from "@/types/Course";

export default defineComponent({
  mixins: [track],
  components: {
    CourseCard,
    CourseInfo,
    Modal,
  },
  data() {
    return {
      isOpen: false,
      courses,
      currentCourse: 0,
    };
  },
  computed: {
    selectedCourse(): Course {
      return this.courses[this.currentCourse];
    },
  },
  methods: {
    openCourseModal(index: number) {
      this.currentCourse = index;
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
});
</script>

<style scoped>
.courses {
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
