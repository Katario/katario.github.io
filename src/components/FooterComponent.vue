<template>
  <div class="footer">
    <div class="footer-copyright">Handcrafted by me!</div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style lang="css">
  .footer {
    grid-column: 2;
    grid-row: 3;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    color: var(--base-black);
    opacity: 0.4;
  }

  .footer .footer-copyright {
    padding: 5px;
    font-size: 12px;
  }

  .dark .footer {
    color: var(--dark-base-white);
    transition: 0.3 ease-in-out;
  }
</style>
