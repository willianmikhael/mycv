<!-- Navbar.vue -->
<template>
  <nav :class="{ 'navbar-hidden': hideNavbar, 'navbar-visible': showNavbar }" class="m-3 text-lg mb-28">
    <ul class="flex justify-end font-Roboto text-zinc-800">       
      <li class="p-3"><router-link to="/">Home</router-link></li>
      <li class="p-3"><router-link to="/about">About</router-link></li>
      <li class="p-3"><router-link to="/resum">Resume</router-link></li>
    </ul>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      hideNavbar: true,
      showNavbar: false
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
      const offset = 300; // Distance from top to hide navbar
      this.hideNavbar = scrollY > offset;
      this.showNavbar = scrollY <= offset;
    }
  }
};
</script>

<style scoped>
.navbar-hidden {
  transform: translateY(-100%);
  transition: transform 0.3s ease-out; /* Adiciona a transição */
}

.navbar-visible {
  transform: translateY(0);
  transition: transform 0.3s ease-out; /* Adiciona a transição */
}
</style>
