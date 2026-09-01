
<template>
  <SectionHeading
    description="What we offer"
    title="Featured Vehicles"
  />

  <div class="swiper-container">
    <Swiper
      :modules="[Autoplay, Navigation]"
      :space-between="30"
      :slides-per-view="1"
      :navigation="true"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :breakpoints="{
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }"
    >
      <SwiperSlide
        v-for="car in cars"
        :key="car.id"
      >
        <CarCards
          :id="car.id"
          :name="car.name"
          :brand="car.brand"
          :price="car.price"
          :image="car.image"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import SectionHeading from '../composables/SectionHeading.vue'
import CarCards from '../cards/carCards.vue'
import { cars } from '../../data/carsData'

</script>

<style scoped>
.swiper-container {
  width: 100%;
  padding: 20px;
}

.swiper-slide {
  height: auto;
}

</style>