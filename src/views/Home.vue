<template>
  <div class="home">
    <Intro />
    <ContactComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue';
import ContactComponent from '@/components/ContactComponent.vue';

export default {
  name: 'Home',
  components: {
    Intro,
    ContactComponent,
  },
};
</script>
