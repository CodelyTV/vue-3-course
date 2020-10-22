<template>
  <section class="filters">
    <label for="search" class="sr-only">Buscar</label>
    <input
      id="search"
      type="search"
      placeholder="Buscar…"
      class="search"
      :value="query"
      @input="handleSearch"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    query: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleSearch(ev) {
      this.$emit("update:query", ev.target.value);
    },
  },
});
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 90rem;
  margin: 2rem auto;
}

.filters-tags {
  display: flex;
  flex-grow: 1;
  margin: 0 auto 0 -0.5rem;
  padding: 0.5rem;
  overflow: auto;
  column-gap: 0.2rem;
  list-style: none;
  mask-image: linear-gradient(to left, transparent 1%, black 13%);
}

.toggle {
  position: relative;
}
.toggle-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.toggle-label:hover {
  background: rgba(0, 0, 0, 0.1);
}
.toggle input {
  position: absolute;
  opacity: 0;
}
.toggle input:focus + .toggle-label {
  box-shadow: 0 0 0 0.2rem var(--primary-color);
}
.toggle input:checked + .toggle-label {
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}

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
