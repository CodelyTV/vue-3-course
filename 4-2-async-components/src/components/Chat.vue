<template>
  <Card>
    <section class="chat-messages"></section>
    <section class="chat-compose">
      <input type="text" placeholder="Escribir mensaje…" />
      <button>Send</button>
    </section>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  async setup() {
    function connect() {
      return new Promise(resolve => {
        setTimeout(resolve, 1500);
      });
    }
    await connect();

    return {};
  },
});
</script>

<style scoped>
.chat-compose {
  display: flex;
  gap: 0.5rem;
}
.chat-compose input {
  flex-grow: 1;
  font-size: 1rem;
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
  background: #10fb7a;
  border: none;
  border-radius: 0.2rem;
  color: #000;
  font-size: 1rem;
  font-weight: 700;
}
</style>
