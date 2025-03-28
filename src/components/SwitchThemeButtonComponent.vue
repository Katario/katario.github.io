<template>
  <div class="switch-theme-button">
    <input
      type="checkbox"
      class="checkbox"
      id="switch-theme-button-checkbox"
      :checked=isChecked
    />
    <label class="label" for="switch-theme-button-checkbox" v-on:click="onCheckedSwitchTheme">
      <img :src="leftIcon" alt="" />
      <img :src="rightIcon" alt="" />
      <div id="switch" class="on"></div>
    </label>
  </div>
</template>

<script>

export default {
  name: 'SwitchThemeButtonComponent',
  components: {
  },
  props: [
    'leftIcon',
    'rightIcon',
    'alternativeTheme',
  ],
  data: function () {
    return {
      isChecked: this.$cookies.isKey('theme')
        ? 'checked'
        : '',
    };
  },
  mounted() {
    if (!document.body.classList.contains(this.alternativeTheme)) {
      document.getElementById('switch-theme-button-checkbox').checked = false;
    }
  },
  methods: {
    onCheckedSwitchTheme: function () {
      const bodyClass = document.body.classList;
      if (bodyClass.contains(this.alternativeTheme)) {
        bodyClass.remove(this.alternativeTheme);
        this.$cookies.remove('theme');
      } else {
        bodyClass.add(this.alternativeTheme);
        this.$cookies.set('theme', 'dark', 60 * 60 * 24 * 30);
      }
    },
  },
};

</script>

<style lang="css">
  .switch-theme-button .checkbox:checked + .label #switch {
    transform: translateX(24px);
  }

  .switch-theme-button .checkbox {
    opacity: 0;
    position: absolute;
    width: 26px;
    height: 26px;
    margin: 5px;
  }

  .switch-theme-button .label {
    height: 26px;
    width: 50px;
    background-color: var(--base-black);
    cursor: pointer;
    padding: 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .switch-theme-button .label #switch {
    background-color: var(--base-white);
    position: absolute;
    top: 3px;
    left: 3px;
    height: 30px;
    width: 30px;
    transform: translateX(0px);
    transition: transform 0.2s ease-in-out;
  }

  .switch-theme-button .label img {
    width: 16px;
    height: 16px;
  }

  .dark .switch-theme-button .label {
    background-color: var(--dark-base-white);
  }

  .dark .switch-theme-button .label #switch {
    background-color: var(--dark-base-black);
  }
</style>
