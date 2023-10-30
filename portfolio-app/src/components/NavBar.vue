<template>
  <v-navigation-drawer
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
          prepend-avatar="https://media.licdn.com/dms/image/D5603AQEMXJclBwBM2Q/profile-displayphoto-shrink_200_200/0/1698597922759?e=1704326400&v=beta&t=v2BqMU8Hg82ADNFVqPGqha-lzE_-kAKsEw19Km30_c0"
          title="Michael Brooks"
          subtitle="michaelbrooks6897@gmail.com"
          @click="showInfoCard = true"
        >
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list
      density="compact"
      nav  
    >
      <v-list-item
        v-for="listItem in navItems"
        :prepend-icon="listItem.icon"
        :title="listItem.title"
        @click="listItem.onClick"
        :base-color="listItem.colorGetter"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <div
    class="infoContainer"
    :style="showInfoCard ? 'backdrop-filter: blur(4px);' : ''"
  >  
    <v-card
      v-if="showInfoCard"
      class="mx-auto infoCard"
      rounded
      elevation="4"
    >
      <div
        class="ma-4 closeInfoCard"
      >
        <v-icon
          @click="showInfoCard = false"
          color="#4a7a42"
        >
          mdi-close
        </v-icon>
      </div>
      <v-card-title
        class="ma-4 linksText"
      >
      Links
      </v-card-title>
      <v-hover
        v-for="linkItem in linkItems"
      >
        <template v-slot:default="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="ma-4 pa-2"
            @click="linkItem.onClick"
            :color="isHovering ? '#568f4d' : '#4a7a42'"
          >
            <v-icon 
              :icon="linkItem.icon"
            />
            {{ linkItem.text }}
          </v-card>
        </template>
      </v-hover>
    </v-card> 
  </div>
  <alert-component
    :alertText="alertText"
    :createAlert="createAlert"
  ></alert-component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AlertComponent from './AlertComponent.vue';

export default defineComponent({
  data() {
    return {
      showInfoCard: false,
      alertText: '',
      createAlert: 0,
    }
  },
  methods: {
    async copyEmailToClipboard() {
      await navigator.clipboard.writeText('michaelbrooks6897@gmail.com');
      this.alertText = 'Email Copied!';
      this.createAlert++;
    },
    navigateToAboutMe() {
      this.$router.push('/about-me');
    },
    navigateToLandingPage() {
      this.$router.push('/');
    },
    navigateToWorkPage() {
      this.$router.push('/projects');
    },
    getNavClass(navName: string) {
      if(navName === this.$route.name) {
        return '#90ff7d';
      }
      return '';
    },
    openLinkInNewTab(link: string) {
      window.open(link, '_blank'); 
    },
  },
  computed: {
    linkItems() {
      return [
        {
          icon: 'mdi-linkedin',
          text: 'https://www.linkedin.com/in/michael-brooksengineer/',
          onClick: () => { this.openLinkInNewTab('https://www.linkedin.com/in/michael-brooksengineer/') },
        },
        {
          icon: 'mdi-github',
          text: 'https://github.com/michaelbrooks1234',
          onClick: () => { this.openLinkInNewTab('https://github.com/michaelbrooks1234') },
        },
        {
          icon: 'mdi-email-outline',
          text: 'michaelbrooks6897@gmail.com',
          onClick: this.copyEmailToClipboard,
        },
      ]
    },
    navItems() {
      return [
        {
          icon: 'mdi-page-next-outline',
          onClick: this.navigateToLandingPage,
          colorGetter: this.getNavClass('home'),
          title: 'Landing Page'
        },
        {
          icon: 'mdi-account',
          onClick: this.navigateToAboutMe,
          colorGetter: this.getNavClass('aboutMe'),
          title: 'About Me'
        },
        {
          icon: 'mdi-file',
          onClick: this.navigateToWorkPage,
          colorGetter: this.getNavClass('projects'),
          title: 'Projects'
        },
      ]
    }
  },
  components: {
    AlertComponent,
  }
})
</script>
<style>
.infoCard {
  width: 80%;
  height: 50%;
}

.infoContainer {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.linksText {
  color: #90ff7d;
}

.closeInfoCard {
  position: absolute;
  right: 0;
}
</style>