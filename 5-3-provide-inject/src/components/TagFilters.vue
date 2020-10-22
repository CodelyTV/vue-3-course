<template>
  <ul class="filters-tags">
    <li v-for="filter in filters" :key="filter.value" class="toggle">
      <input
        :id="filter.value"
        :value="filter.value"
        v-model="activeFilters"
        @change="handleFilter"
        type="checkbox"
      />
      <label :for="filter.value" class="toggle-label">
        {{ filter.label }}
      </label>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["filter"],
  data() {
    return {
      activeFilters: [],
      filters: [
        {
          value: "software-architecture",
          label: "Arquitectura",
        },
        { value: "devops", label: "DevOps" },
        { value: "tooling", label: "Tooling" },
        { value: "backend", label: "Backend" },
        { value: "frontend", label: "JavaScript" },
        { value: "mobile", label: "Mobile" },
      ],
    };
  },
  methods: {
    handleFilter() {
      this.$emit("filter", this.activeFilters);
    },
  },
});
</script>

<style scoped>
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
</style>
