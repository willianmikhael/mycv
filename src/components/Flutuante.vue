<!-- LogoFlutuante.vue -->
<template>
  <div class="container">
    <h1 :class="{ 'logo-hidden': hideLogo, 'logo-visible': showLogo }" class="float-start text-Merriweather font-bold text-2xl p-3 ">WM.</h1> 
  </div>
    
</template>

<script>
export default {
  data() {
    return {
      hideLogo: false,
      showLogo: true
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const offset = 200; // Distance from top to hide logo
      this.hideLogo = scrollY > offset;
      this.showLogo = scrollY <= offset;
    }
  }
};
</script>

<style scoped>
.logo-hidden {
  transform: translateY(-100%);
  transition: transform 0.3s ease-out; /* Adiciona a transição */
}

.logo-visible {
  transform: translateY(0);
  transition: transform 0.3s ease-out; /* Adiciona a transição */
}
</style>
