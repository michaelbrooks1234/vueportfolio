<template>
  <nav-bar></nav-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/appStore';
import NavBar from '../components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',
  beforeMount() {
  },
  data() {
    return {
      store: useAppStore(),
    }
  },
  components: {
    NavBar,
  },
});
</script>
