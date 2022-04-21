<template>
  <div class="button-component">
    <a :href="url">{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: [
    'url',
    'text',
  ],
};
</script>

<style lang="css">
  .button-component {
    width: 120px;
    text-align: center;
    padding: 7px 10px;
    border: 2px solid var(--base-black);
    background-color: var(--base-white);
    transition: 0.2s ease-in-out;
  }

  .button-component a {
    color: var(--base-black);
    transition: 0.2s ease-in-out;
    font-size: 20px;
    text-decoration: none;
  }

  .button-component:hover {
    background-color: #33414F;
  }

  .button-component:hover a {
    color: var(--base-white);
  }

  .dark .button-component {
    border: 2px solid var(--dark-base-white);
    background-color: var(--dark-base-black);
    transition: 0.3s ease-in-out;
  }

  .dark .button-component:hover {
    background-color: #EDEDA3;
  }

  .dark .button-component:hover a {
    color: var(--dark-base-black);
  }

  .dark .button-component a {
    color: var(--dark-base-white);
    transition: 0.3s ease-in-out;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 767px) {
    .button-component a {
      font-size: 26px;
    }
  }
</style>
