<template>
  <section class="course-content">
    <h2 class="course-content-title">{{ course.title }}</h2>
    <p class="course-content-lead">
      {{ course.description }}
    </p>

    <button class="btn" @click="handleAdd">Añadir a mis cursos</button>

    <h3>💸 ¡Primera lección disponible sin registro!</h3>
    <p>
      Magna ea ut enim reprehenderit consectetur nulla. Laborum cupidatat dolore
      dolore ullamco proident. Cupidatat culpa sit consequat ad ex eiusmod
      laboris aliqua enim ea exercitation.
    </p>

    <p>
      Veniam fugiat nulla amet non quis occaecat sint in. Aute nisi eiusmod
      exercitation id irure dolor. Commodo non occaecat sit veniam fugiat cillum
      sunt sint ea do sit.
    </p>

    <p>
      Nostrud cillum aute magna proident ex. Laboris labore dolore minim id do
      reprehenderit amet irure do nulla id ipsum adipisicing. Magna adipisicing
      veniam pariatur reprehenderit laborum adipisicing. Sit quis velit laboris
      dolor. Minim duis nulla labore ipsum veniam sint nostrud enim in deserunt
      Lorem. Nisi nisi quis nulla velit excepteur pariatur. Aliqua laboris id
      quis veniam Lorem aliquip voluptate anim est adipisicing adipisicing.
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { api } from "@/services/api";
import { useTracking } from "@/use/tracking";

export default defineComponent({
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { trackEvent } = useTracking("course-view");

    function handleAdd() {
      trackEvent("course-add", { course: props.course.slug });

      api.addCourse(props.course.slug);
    }

    return {
      handleAdd,
    };
  },
});
</script>

<style scoped>
.course-content {
  max-width: 90ch;
  margin: 0 auto;
  padding: 0 4rem;
  font-size: 1.2rem;
}
.course-content h3 {
  font-size: 1.7rem;
}
.course-content-title {
  font-size: 2.7rem;
}
.course-content-lead {
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.5rem;
  font-family: var(--ff-primary);
  line-height: 1.3;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.btn {
  min-width: 20rem;
  margin: 0 0 2rem;
  padding: 0.75em 1em;
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  background: #36ab67;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
}
</style>
