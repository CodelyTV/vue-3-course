<template>
  <div class="total">Mostrando {{ coursesLength }} cursos</div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    return {
      coursesLength: inject("coursesLength"),
    };
  },
});
</script>

<style scoped>
.total {
  color: #777;
}
</style>
