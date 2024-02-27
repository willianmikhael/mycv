<template>
  <div>
    <div class="container mx-auto lg:max-w-screen-xl bg-regal">
      <Flutuante />
      <Navbar />

      <router-view />

    </div>
    <Footer />
  </div>
</template>



<script>
import Flutuante from './components/Flutuante.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    Navbar,
    Flutuante,
    Footer,
  }
}
</script>
