<!-- Footer.vue -->
<template>
  <footer :class="{ 'footer-hidden': hideFooter, 'footer-visible': showFooter }" class="fixed bottom-0 left-0 right-0 text-gray-200 bg-zinc-800 text-center p-5 mt-5 grid grid-cols-2 gap-4">
    <p>&copy; 2024 Willian Mikhael - to infinity and beyond</p>
    <p>willian.mikhael.lol@gmail.com</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      hideFooter: true,
      showFooter: false
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
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const offset = 70; // Distance from bottom to show footer
      const scrollPosition = windowHeight + scrollY;
      this.hideFooter = scrollPosition < documentHeight - offset;
      this.showFooter = scrollPosition >= documentHeight - offset;
    }
  }
};
</script>

<style scoped>
.footer-hidden {
  transform: translateY(100%);
  transition: transform 0.3s ease-in; /* Adiciona a transição */
}

.footer-visible {
  transform: translateY(0);
  transition: transform 0.3s ease-out; /* Adiciona a transição */
}
</style>
 