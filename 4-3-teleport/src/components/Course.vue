<template>
  <article
    class="card"
    role="button"
    :aria-label="`Ver información sobre ${course.title}`"
    @click="openModal"
  >
    <img class="card-img" :src="`/cursos/${course.img}`" :alt="course.title" />
  </article>
  <Modal v-if="isOpen" @close="closeModal">
    <CourseInfo :course="course" />
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/components/Modal.vue";
import CourseInfo from "@/components/CourseInfo.vue";

export default defineComponent({
  components: {
    Modal,
    CourseInfo,
  },
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },

    closeModal() {
      this.isOpen = false;
    },
  },
});
</script>

<style scoped>
.card {
  max-width: 18rem;
  min-height: 10rem;
  background: #fff;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card-img {
  width: 100%;
}
</style>
