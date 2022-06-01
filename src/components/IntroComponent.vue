<template>
  <div class="intro">
    <div class="hi">Hi!</div>
    <div class="catch-phrase">I'm Hadrien, and I build <strong>Websites</strong>.</div>
  </div>
</template>

<script>
export default {
  name: 'IntroComponent',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
  .intro {
    padding: 0 20px;
  }

  .div .strong {
    background-color: #FFF321;
    color: var(--base-black);
    line-height: 55px;
    padding: 0 5px;
    text-transform: uppercase;
  }

  .hi {
    font-size: 86px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .catch-phrase {
    font-size: 42px;
    line-height: 48px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 767px) {
    .hi {
      font-size: 104px;
    }
    .catch-phrase {
      line-height: 64px;
      font-size: 52px;
    }
  }
</style>
