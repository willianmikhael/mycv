<template>
       <div>
        <div class="grid grid-rows-4 grid-flow-col gap-1">
          <div class="row-span-3">
            <div class="h-full">
              <Particles/>
            </div>
          </div>
        
          <div class="row-span-1">
            <div class=" h-full mx-6 mb-6">
              <h1 class="font-Merriweather italic text-5xl p-3">Hello, my name is Willian Mikhael,
                 I'm 23 years old, I've been studying software engineering since 2022. I'm passionate about technology.</h1>
            </div>
          </div>
       </div>

       <Projects/>

      </div>
  
       
  </template>
  
  <script>
  import Footer from '../components/Footer.vue'
  import Particles from '../components/Particles.vue'
  import Projects from '../components/Projects.vue'
  
  
  export default {
    name: 'Home',
    components: {
      Footer,
      Particles,
      Projects,
    }
  }
  </script>
  
  