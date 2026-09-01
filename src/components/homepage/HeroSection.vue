<template>

  <Section class="bg-cover relative h-screen" :style="{ backgroundImage: `url(${bgImage})`}">

  

    <div class="absolute inset-0 bg-black opacity-25"></div>

      <div class="relative flex items-center justify-center h-full text-center text-white px-4">
          <div class="w-full md:w-3/5">

                  <h1 class="text-4xl md:text-5xl font-bold mb-4">Fast & Easy way to rent a car</h1>
                  <p class="text-md md:text-xl mb-6">Fastest and easiest way to rent a car is to use an online booking aggregator or a dedicated mobile app to compare rates, upload your documentation digitally, and secure instant confirmation.</p>
                  <h2 class="text-2xl font-semibold">Easy steps for renting a car</h2>
          </div>
      </div>  

  </Section>
</template>

<script setup>
import bgImage from "../../assets/images/bg_1.jpg"
</script>

<style>

</style>