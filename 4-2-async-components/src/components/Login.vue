<template>
  <button v-if="!isLogged" @click="login" class="login">
    Log in
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters(["isLogged"]),
  },
  methods: {
    ...mapActions(["login"]),
  },
});
</script>

<style scoped>
.login {
  position: absolute;
  z-index: 1;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: #10fb7a;
  border: none;
  border-radius: 0.2rem;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
}
</style>
