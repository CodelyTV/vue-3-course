<template>
  <label for="search" class="sr-only">Buscar</label>
  <input
    id="search"
    type="search"
    placeholder="Buscar…"
    class="search"
    @input="handleSearch"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["search"],
  methods: {
    handleSearch(ev) {
      this.$emit("search", ev.target.value);
    },
  },
});
</script>

<style scoped>
.search {
  flex-basis: 0;
  flex-grow: 1;
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  border: 1px solid transparent;
}
.search:focus {
  border: 1px solid var(--primary-color);
  outline: 2px solid var(--primary-color);
}
</style>
