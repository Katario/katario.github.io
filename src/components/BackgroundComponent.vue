<template>
  <div class="background-component">
    <!-- Day -->
    <div class="sun-circle inner"></div>
    <div class="sun-circle middle"></div>
    <div class="sun-circle outer"></div>
    <div class="fixed-clouds">
    <!-- <div class="cloud"></div> -->
    </div>
    <!-- End Day -->

    <!-- Night -->
    <div class="stars"></div>
    <div class="position-moon">
      <div class="moon-circle crescent"></div>
      <div class="moon-circle shadow"></div>
    </div>
    <!-- End Night -->

    <!-- End Cloudy -->
    <div class="moving-clouds">
      <div class="cloud-1">
        <div class="cloud"></div>
      </div>
      <div class="cloud-2">
        <div class="cloud"></div>
      </div>
      <div class="cloud-3">
        <div class="cloud"></div>
      </div>
      <div class="cloud-4">
        <div class="cloud"></div>
      </div>
      <div class="cloud-5">
        <div class="cloud"></div>
      </div>
    </div>
    <!-- End Cloudy -->
  </div>
</template>

<script>
import { generateRandomBackground } from '@/helpers/helper';

export default {
  name: 'BackgroundComponent',
  mounted: function () {
    generateRandomBackground(this.$el);
  },
  methods: {
    generateRandomBackground,
  },
};
</script>

<style lang="css">
  /* Sun rays */
  @keyframes shining{
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
  /* Moonlight Shines */
  @keyframes moonlight{
    0% {
      filter: drop-shadow(-10px 8px 16px #F5EF87) brightness(1);
    }
    50% {
      filter: drop-shadow(-10px 8px 16px #F5EF87) brightness(0.8);
    }
    100% {
      filter: drop-shadow(-10px 8px 16px #F5EF87) brightness(1);
    }
  }

  /* Moving clouds */
  @keyframes animatedClouds {
    from {
      visibility: visible;
      left: -300px;
    }
    to {
      visibility: hidden;
      left: 100%;
    }
  }

  body > div:first-child {
    background: transparent;
  }

  .background-component {
    position: absolute;
    z-index: -999;
    width:100%;
    height:100%;
  }

  .sun-circle {
    position: absolute;
    display: block;
    border-radius: 50%;
    background: #FFCF21;
    animation: shining 8s infinite;
    transition: 0.2s ease-in-out;
  }

  .inner {
    width: 130px;
    height: 130px;
    left: -60px;
    top: -60px;
    opacity: 1;
  }

  .sun-circle .middle {
    width: 220px;
    height: 220px;
    left: -110px;
    top: -110px;
    opacity: 0.6;
  }

  .sun-circle .outer {
    width: 300px;
    height: 300px;
    left: -150px;
    top: -150px;
    opacity: 0.3;
  }

  .moving-clouds {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  .cloud-1 {
    position: absolute;
    top: 10%;
    animation: animatedClouds var(--duration-animation-cloud) 4s linear infinite;
    animation-fill-mode: backwards;
    opacity: var(--opacity-cloud);
    transform: scale(var(--scale-cloud));
    visibility: hidden;
  }
  .cloud-2 {
    position: absolute;
    top: 22%;
    animation: animatedClouds var(--duration-animation-cloud) 22s linear infinite;
    animation-fill-mode: backwards;
    opacity: var(--opacity-cloud);
    transform: scale(var(--scale-cloud));
    visibility: hidden;
  }
  .cloud-3 {
    position: absolute;
    top: 48%;
    animation: animatedClouds var(--duration-animation-cloud) 15s linear infinite;
    animation-fill-mode: backwards;
    opacity: var(--opacity-cloud);
    transform: scale(var(--scale-cloud));
    visibility: hidden;
  }
  .cloud-4 {
    position: absolute;
    top: 71%;
    animation: animatedClouds var(--duration-animation-cloud) 9s linear infinite;
    animation-fill-mode: backwards;
    opacity: var(--opacity-cloud);
    transform: scale(var(--scale-cloud));
    visibility: hidden;
  }
  .cloud-5 {
    position: absolute;
    top: 89%;
    animation: animatedClouds var(--duration-animation-cloud) 29s linear infinite;
    animation-fill-mode: backwards;
    opacity: var(--opacity-cloud);
    transform: scale(var(--scale-cloud));
    visibility: hidden;
  }

  .cloud {
    background: #fff;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
    height: 120px;
    position: relative;
    width: 350px;
  }

  .cloud:after, .cloud:before {
    background: #fff;
    content: '';
    position: absolute;
    z-indeX: -1;
  }

  .cloud:after {
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;

    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
  }

  .cloud:before {
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
    border-radius: 200px;

    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
  }

  .stars {
    display: none;
    height: 5px;
    width: 5px;
    box-shadow: var(--stars);
    opacity: 0.3;
    z-index: -99
  }

  .position-moon {
    display: none;
    position: relative;
  }

  .background-component .moon-circle {
    position: absolute;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  .background-component .crescent {
    background: #F5EF87;
    left: 35px;
    bottom: -120px;
    animation: moonlight linear 2s infinite;
  }

  .background-component .shadow {
    overflow:hidden;
    background: var(--base-black);
    left: 50px;
    bottom: -110px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 767px) {
    .inner {
      width: 180px;
      height: 180px;
      left: -90px;
      top: -90px;
      opacity: 1;
    }

    .middle {
      width: 260px;
      height: 260px;
      left: -130px;
      top: -130px;
      opacity: 0.6;
    }

    .outer {
      width: 370px;
      height: 370px;
      left: -200px;
      top: -200px;
      opacity: 0.3;
    }

    .moon-circle {
      position: absolute;
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }

    .crescent {
      background: #F5EF87;
      left: 35px;
      bottom: -150px;
      animation: moonlight linear 2s infinite;
    }

    .shadow {
      overflow:hidden;
      background: var(--base-black);
      left: 50px;
      bottom: -140px;
    }
  }

  .dark .sun-circle {
    display: none;
  }

  .dark .position-moon {
    display: block;
  }

  .dark .stars {
    display: block;
  }

  .dark .moving-clouds {
    opacity: 0;
  }

</style>
