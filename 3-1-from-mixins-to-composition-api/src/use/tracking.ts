import { onMounted } from "vue";
import { useStore } from "vuex";
import { api } from "../services/api";

export function useTracking(eventName = "view") {
  const store = useStore();

  function trackEvent(ev: string, payload?: {}) {
    console.log(`track ${ev} event by user ${store.getters.userId}`);

    api.trackEvent({
      user: store.getters.userId,
      event: ev,
      payload,
    });
  }

  onMounted(() => trackEvent(eventName));

  return {
    trackEvent,
  };
}
