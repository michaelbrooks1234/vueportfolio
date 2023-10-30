<template>
  <v-container>
    <div
      v-for="item in aboutMeTexts"
    >
      <h1
        style="color: #90ff7d;"
        class="my-4"
      >
        {{ item.title }}
      </h1>
      <h3>
        {{ item.text }}
      </h3> 
    </div>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import aboutMeTexts from './AboutMe.js';

export default defineComponent({
  data() {
    return {
      aboutMeTexts: aboutMeTexts,
    }
  }
});
</script>