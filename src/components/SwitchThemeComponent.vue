<template>
  <div class="switch-theme">
    <SwitchThemeButtonComponent
      :leftIcon=sunIcon
      :rightIcon=moonIcon
      alternativeTheme='dark' />
  </div>
</template>

<script>
// @ is an alias to /src
import SwitchThemeButtonComponent from '@/components/SwitchThemeButtonComponent.vue';

import sunIcon from '@/assets/icons/sun.svg';
import moonIcon from '@/assets/icons/crescent.svg';

export default {
  name: 'SwitchThemeComponent',
  components: {
    SwitchThemeButtonComponent,
  },
  data: function () {
    return {
      sunIcon,
      moonIcon,
    };
  },
};
</script>

<style lang="css">
  .switch-theme {
    position: absolute;
    right: 25px;
    top: 25px;
  }
</style>
