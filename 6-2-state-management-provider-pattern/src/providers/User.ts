import { computed, defineComponent, provide, readonly, Ref, ref } from "vue";

interface User {
  id: string;
  name: string;
  image: string;
}

export default defineComponent({
  setup() {
    const user: Ref<User | null> = ref(null);
    const isLogged = computed(() => !!user.value);

    provide("USER", user);
    provide("IS_LOGGED", isLogged);

    function login() {
      return new Promise(resolve => {
        user.value = {
          id: "123",
          name: "Núria",
          image: "/users/nuria.jpg",
        };
        resolve(user.value);
      });
    }
    function logout() {
      return new Promise(resolve => {
        user.value = null;
        resolve(user.value);
      });
    }

    provide("LOG_IN", login);
    provide("LOG_OUT", logout);
  },
  render() {
    return this.$slots.default?.();
  },
});
