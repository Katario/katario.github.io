<template>
  <div class="contact">
    <p class="contact-question">Wanna work together?</p>
    <ul class="buttons-media">
      <li class="button-media" v-for="button in buttonList" :key="button.text">
        <ButtonComponent
          :text="button.text"
          :url="button.url"
        />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'ContactComponent',
  components: {
    ButtonComponent,
  },
  data: function () {
    return {
      buttonList: {
        github: {
          url: 'https://github.com/Katario',
          text: 'Github',
        },
        linkedin: {
          url: 'https://www.linkedin.com/in/hadrien-boe-web-developer/',
          text: 'Linkedin',
        },
      },
    };
  },
};
</script>

<style>
  .contact-question {
    padding: 0 20px;
    font-size: 18px;
  }
  .buttons-media {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: 0;
  }

  .button-media {
    list-style-type: none;
    padding: 0 20px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 767px) {
    .contact-question {
      font-size: 24px;
    }
  }
</style>
