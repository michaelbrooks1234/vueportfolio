<template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/appStore';

export default defineComponent({
  name: 'HomeView',
  beforeMount() {
    console.log(this.store.isNavActive);
    this.store.setNavState(false);
    console.log(this.store.isNavActive);
  },
  data() {
    return {
      store: useAppStore(),
    }
  },
  components: {

  },
});
</script>
