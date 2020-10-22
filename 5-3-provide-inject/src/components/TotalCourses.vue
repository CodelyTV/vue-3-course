<template>
  <div class="total">Mostrando {{ coursesLength }} cursos</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    coursesLength: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.total {
  color: #777;
}
</style>
