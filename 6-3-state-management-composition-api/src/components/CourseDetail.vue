<template>
  <header class="header">
    <img :src="course.thumbnail" alt="" />
    <div class="header-info">
      <h1>{{ course.title }}</h1>
      <small>{{ course.authors.join(", ") }}</small>
      <p class="lead">
        {{ course.summary }}
      </p>
    </div>
  </header>

  <section class="content">
    <Card>
      <div v-html="course.description"></div>
      <a href="#">Ver más cursos de CSS</a>
    </Card>

    <Suspense v-if="isLogged">
      <template #default>
        <Chat />
      </template>
      <template #fallback>
        <Loader />
      </template>
    </Suspense>
  </section>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from "vue";
import course from "@/data/course-detail.json";
import Card from "@/components/Card.vue";
import Loader from "@/components/Loader.vue";
import { useUser } from "@/use/user";

export default defineComponent({
  components: {
    Card,
    Loader,
    Chat: defineAsyncComponent(() => import("./Chat.vue")),
  },
  setup() {
    const { isLogged } = useUser();

    return {
      course,
      isLogged,
      background: computed(() => `url(${course.background})`),
    };
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
  background: #2a3e86;
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

.content {
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.content > * {
  flex-grow: 1;
}
</style>
