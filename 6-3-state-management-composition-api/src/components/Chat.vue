<template>
  <Card>
    <section class="chat-messages"></section>
    <section class="chat-compose">
      <img :src="user.image" :alt="user.name" />
      <input type="text" placeholder="Escribir mensaje…" />
      <button>Send</button>
    </section>
  </Card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Card from "@/components/Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  async setup() {
    const store = useStore();

    function connect() {
      return new Promise(resolve => {
        setTimeout(resolve, 1500);
      });
    }
    await connect();

    return {
      user: computed(() => store.state.user),
    };
  },
});
</script>

<style scoped>
.chat-compose {
  display: flex;
  gap: 0.5rem;
}
.chat-compose img {
  max-height: 2.5rem;
  border-radius: 50%;
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
