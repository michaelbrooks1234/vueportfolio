<template>
  <div 
    style="position: absolute; bottom: 0; right: 0;"
    class="ma-4"
  >
    <v-card
      v-for="alert in alerts"
      class="py-2 px-4 alert my-2"
      color="#4a7a42"
    >
      {{ alert }}
    </v-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      alerts: <any[]>[],
    }
  },
  watch: {
    createAlert() {
      this.alerts.push(this.alertText);
      setTimeout(() => {
        this.alerts.splice(0, 1);
      }, 3500);
    },
  },
  props: {
    alertText: String,
    createAlert: Number,
  }
});
</script>
<style>
@keyframes fade-in {
  from {
    transform: translateX(100%);
    opacity: 100%;
  }
  to {
    transform: translateX(0%);
    opacity: 100%;
  }
}

@keyframes fade-out {
  from {
    opacity: 100%;
  }
  to {
    opacity: 0%;
  }
}

.alert {
  animation: fade-in .5s, fade-out 1.5s;
  animation-delay: 0s, 2s;
  animation-fill-mode: forwards;
}
</style>