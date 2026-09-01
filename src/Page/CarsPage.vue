<template>
  <BgContainer
    title="Cars"
    bgImage="clients.jpg"
    :links="[
      { text: 'Car', to: '/' },
      { text: 'Cars', to: '/cars' },
    ]"
  />

  <div class="flex justify-center w-full my-20">
    <div class="grid grid-cols-1 md:grid-cols-3 w-4/5 gap-10">

      <CarCards
        v-for="car in cars"
        :key="car.id"
        :car="car"
      />

    </div>
  </div>
</template>

<script setup>
import BgContainer from "../components/composables/BgContainer.vue";
import CarCards from "../components/cards/carCards.vue";
import { cars } from "../data/carsData";
</script>