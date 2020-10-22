<template>
  <div class="filters">
    <template v-if="areFiltersVisible">
      <button
        class="button"
        aria-label="Ocultar filtros"
        @click="toggleFilters"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
        </svg>
      </button>
      <FilterControls
        :courses-length="coursesLength"
        @filter="$emit('filter', $event)"
        @search="$emit('search', $event)"
      />
    </template>
    <button
      v-else
      class="button"
      aria-label="Mostrar filtros"
      @click="toggleFilters"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FilterControls from "@/components/FilterControls.vue";

export default defineComponent({
  components: {
    FilterControls,
  },
  props: {
    coursesLength: {
      type: Number,
      required: true,
    },
  },
  emits: ["filter", "search"],
  data() {
    return {
      areFiltersVisible: false,
    };
  },
  methods: {
    toggleFilters() {
      return (this.areFiltersVisible = !this.areFiltersVisible);
    },
  },
});
</script>

<style scoped>
.filters {
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.button {
  background: transparent;
  border: none;
  opacity: 0.5;
  cursor: pointer;
}
.button:hover {
  opacity: 1;
}
</style>
