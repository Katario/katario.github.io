<script>
import '@/assets/css/variable.css';
import '@/assets/css/global.css';
import BackgroundComponent from './components/BackgroundComponent.vue';
import SwitchThemeComponent from './components/SwitchThemeComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    BackgroundComponent,
    SwitchThemeComponent,
    FooterComponent,
  },
  created() {
    if (this.$cookies.isKey('theme')) {
      document.body.classList.add(this.$cookies.get('theme'));
    } else {
      console.log(this.$cookies.keys());
    }
  },
};
</script>

<template>
  <BackgroundComponent />
  <SwitchThemeComponent />
  <router-view />
  <FooterComponent />
</template>
