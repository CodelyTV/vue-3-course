<template>
  <div class="block">
    <section class="courses">
      <h2 class="courses-title">👌 Cursos disponibles</h2>
      <div class="courses-collection">
        <Card
          v-for="course in courses"
          :key="course.title"
          :course="course"
          @click="openModal"
        />
      </div>
      <transition name="fade">
        <Modal v-if="isOpen" @close="closeModal">
          <CourseInfo />
        </Modal>
      </transition>
    </section>
  </div>
</template>


<script>
import Card from './Card'
import CourseInfo from './CourseInfo'
import Modal from './Modal'
import courses from '../content/courses.json'

export default {
  components: {
    Card,
    CourseInfo,
    Modal,
  },
  data() {
    return {
      isOpen: false,
      courses,
    }
  },
  methods: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    },
  },
}
</script>

<style scoped>
.block {
  background: #eee;
}

.courses {
  max-width: var(--max-width);
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
