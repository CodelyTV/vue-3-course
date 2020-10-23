import { computed, defineComponent, provide, readonly, Ref, ref } from "vue";

interface User {
  id: string;
  name: string;
  image: string;
}

export const ProvideUserKey = "USER";
export const ProvideUserIsLoggedKey = "IS_LOGGED";
export const ProvideUserLogInKey = "LOG_IN";
export const ProvideUserLogOutKey = "LOG_OUT";

export default defineComponent({
  setup() {
    const user: Ref<User | null> = ref(null);
    const isLogged = computed(() => !!user.value);

    provide(ProvideUserKey, readonly(user));
    provide(ProvideUserIsLoggedKey, isLogged);

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

    provide(ProvideUserLogInKey, login);
    provide(ProvideUserLogOutKey, logout);
  },
  render() {
    return this.$slots.default?.();
  },
});
