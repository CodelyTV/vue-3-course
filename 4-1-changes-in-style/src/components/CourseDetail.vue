<template>
  <header
    class="header"
    :style="`--background: ${background}; --color: ${course.color}`"
  >
    <img :src="course.thumbnail" alt="" />
    <div class="header-info">
      <h1>{{ course.title }}</h1>
      <small>{{ course.authors.join(", ") }}</small>
      <p class="lead">
        {{ course.summary }}
      </p>
    </div>
  </header>

  <Card>
    <div v-html="course.description"></div>
    <a href="#">Ver más cursos de CSS</a>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import course from "@/data/course-detail.json";
import Card from "@/components/Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  data() {
    return {
      course,
    };
  },
  computed: {
    background(): string {
      return `url(${this.course.background})`;
    },
  },
});
</script>

<style scoped>
.header {
  min-height: 20rem;
  margin-bottom: 5rem;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  background: var(--color);
  color: #fff;
  font-size: 1.3rem;
}
.header h1 {
  line-height: 1;
}
.header-info {
  max-width: 55ch;
}
small {
  opacity: 0.8;
}
@media screen and (max-width: 100rem) {
  .header {
    background-image: var(--background);
  }
}
</style>
