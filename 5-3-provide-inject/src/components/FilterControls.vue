<template>
  <section class="filter-controls">
    <TagFilters @filter="$emit('filter', $event)" />
    <Search @search="$emit('search', $event)" />
    <TotalCourses class="filters-result" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagFilters from "@/components/TagFilters.vue";
import Search from "@/components/Search.vue";
import TotalCourses from "@/components/TotalCourses.vue";

export default defineComponent({
  components: {
    TagFilters,
    Search,
    TotalCourses,
  },
  emits: ["filter", "search"],
});
</script>

<style scoped>
.filter-controls {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.filters-result {
  width: 100%;
  text-align: right;
}
</style>
