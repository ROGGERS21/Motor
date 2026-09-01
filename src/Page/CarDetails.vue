<template>

  <BgContainer
    title="Car Details"
    bgImage="clients.jpg"
    :links="[
      { text: 'Home', to: '/' },
      { text: 'Cars', to: '/cars' },
      { text: car?.name || 'Details', to: `/cars/${carId}` }
    ]"
  />

  <div
    v-if="car"
    class="w-4/5 mx-auto py-20"
  >

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

      <!-- IMAGE -->
      <div>
        <img
          :src="getImage(car.image)"
          :alt="car.name"
          class="w-full h-[450px] object-cover rounded-lg"
        />
      </div>


      <!-- DETAILS -->
      <div>

        <p class="text-blue-500 text-lg">
          {{ car.brand }}
        </p>

        <h1 class="text-4xl font-bold mt-2">
          {{ car.name }}
        </h1>

        <p class="text-2xl font-semibold mt-4">
          {{ car.price }}
        </p>


        <!-- RATING -->
        <div class="flex text-yellow-400 text-xl mt-4">

          <span
            v-for="star in 5"
            :key="star"
          >
            {{ star <= car.rating ? "★" : "☆" }}
          </span>

        </div>


        <!-- DESCRIPTION -->
        <p
          v-if="car.description"
          class="text-gray-600 leading-7 mt-6"
        >
          {{ car.description }}
        </p>


        <!-- RENTAL PRICES -->
        <div class="grid grid-cols-2 gap-4 mt-8">

          <div class="border p-4 rounded-lg">
            <p class="text-gray-500">
              Per Hour
            </p>

            <h3 class="text-xl font-bold">
              ${{ car.ratePerHour }}
            </h3>
          </div>


          <div class="border p-4 rounded-lg">
            <p class="text-gray-500">
              Per Day
            </p>

            <h3 class="text-xl font-bold">
              ${{ car.ratePerDay }}
            </h3>
          </div>

        </div>

      </div>

    </div>


    <!-- FEATURES -->
    <div
      v-if="car.features"
      class="mt-16"
    >

      <h2 class="text-2xl font-bold mb-6">
        Features
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-5">

        <div
          v-for="(available, feature) in car.features"
          :key="feature"
          class="border p-4 rounded-lg"
        >

          <span
            :class="available ? 'text-green-500' : 'text-red-500'"
          >
            {{ available ? "✓" : "✕" }}
          </span>

          {{ feature }}

        </div>

      </div>

    </div>


    <!-- REVIEW -->
    <div
      v-if="car.review"
      class="mt-10"
    >

      <h2 class="text-2xl font-bold">
        Customer Review
      </h2>

      <p class="text-gray-600 mt-3">
        {{ car.review }}
      </p>

    </div>

  </div>


  <!-- CAR NOT FOUND -->
  <div
    v-else
    class="text-center py-20"
  >

    <h2 class="text-3xl font-bold">
      Car not found
    </h2>

    <RouterLink
      to="/cars"
      class="text-blue-500 mt-5 inline-block"
    >
      Back to Cars
    </RouterLink>

  </div>

</template>


<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import BgContainer from "../components/composables/BgContainer.vue";
import { cars } from "../data/carsData";


const route = useRoute();


const carId = computed(() => {
  return Number(route.params.id);
});


const car = computed(() => {
  return cars.find(car => car.id === carId.value);
});


const getImage = (imageName) => {
  return new URL(
    `/src/assets/images/${imageName}`,
    import.meta.url
  ).href;
};
</script>