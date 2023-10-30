<template>
  <div style="height: 95%; width: 100%; display: flex; align-items: center;">
    <h1 style="margin-left: 15%;">
      <span style="font-size: 100px;">
      Michael<br>
      <span style="color: #90ff7d;">Brooks</span></span><br>
      <span style="color: #4a7a42;">A self-taught software engineer specializing in web developement.</span>
    </h1>
  </div>
  <div
    style="height: 5%; width: 100%; display: flex; justify-content: center;"
  >
    <v-btn
      @click="navigateToWorkPage"
    >
      Check out my work!
    </v-btn>
</div>
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
  methods: {
    navigateToWorkPage() {
      this.$router.push('/projects');
    }
  },
});
</script>