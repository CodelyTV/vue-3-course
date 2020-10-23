import { computed, readonly, Ref, ref } from "vue";

interface User {
  id: string;
  name: string;
  image: string;
}

const user: Ref<User | null> = ref(null);

export function useUser() {
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

  return {
    user: readonly(user),
    isLogged: computed(() => !!user.value),
    login,
    logout,
  };
}
