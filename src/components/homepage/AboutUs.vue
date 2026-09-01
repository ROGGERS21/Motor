
<template>
  <div class="relative w-full min-h-screen flex items-center">

    <!-- Green background -->
    <div class="absolute right-0 top-0 w-full md:w-2/3 h-full md:h-[92%] bg-[#10b981]"></div>

    <!-- Content -->
    <div class="relative z-10 w-full flex flex-col md:flex-row items-center">

      <!-- IMAGE - LEFT SIDE -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          src="../../assets/images/dealer.jpg"
          alt="Car dealer"
          class="w-full max-w-[32rem] h-auto object-cover"
        >
      </div>

      <!-- TEXT - RIGHT SIDE -->
      <div class="w-full md:w-1/2 text-white px-6 md:px-10 lg:px-16">
        <h2 class="text-sm uppercase">About Us</h2>

        <h1 class="text-3xl md:text-5xl font-bold mb-5">
          Welcome to a carbook
        </h1>

        <p class="mb-4">
        Whether you're searching for what's available in your local area or performing a quick search by make and model, the car for sale page provides a clear picture to help you research your car purchase.

        </p>

        <p>
         We aim to simplify the process of finding the right car for you with expert and information on what’s hot in the world of cars – and thanks to our ‘Supportive team’ who make the process be easier.
        </p>
       <RouterLink to="/cars">
           <ButtonComponent text="Search Vehicle" />

        </RouterLink> 
      </div>

    </div>
  </div>
</template>

<script setup>

import ButtonComponent from '../composables/ButtonComponent.vue'
</script>