import { mapGetters } from "vuex";
import { api } from "../services/api";

export default {
  data() {
    return {
      event: "view",
    };
  },
  mounted() {
    this.trackEvent(this.event);
  },
  computed: {
    ...mapGetters(["userId"]),
  },
  methods: {
    trackEvent(ev, payload) {
      console.log(`track ${ev} event by user ${this.userId}`);

      api.trackEvent({
        user: this.userId,
        event: ev,
        payload,
      });
    },
  },
};
