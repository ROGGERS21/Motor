<template>
  <section class="testimony-section">

    <SectionHeader
      description="Testimony"
      title="Happy Clients & Feedback"
    />

    <div class="swiper-container">

      <Swiper
        :modules="[Autoplay]"
        :space-between="30"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :breakpoints="{
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }"
      >

        <SwiperSlide
          v-for="testimony in testimonys"
          :key="testimony.name"
        >

          <TestimonyCard
            :name="testimony.name"
            :position="testimony.position"
            :image="testimony.image"
            :comment="testimony.comment"
          />

        </SwiperSlide>

      </Swiper>

    </div>

  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

import SectionHeading from '../composables/SectionHeading.vue'
import TestimonyCard from '../cards/TestimonyCard.vue'

import { testimonys } from '../../data/TestimonyData'
</script>

<style scoped>

.testimony-section {
  width: 100%;
  padding-bottom: 60px;
}

.swiper-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
}

.swiper-slide {
  height: auto;
  display: flex;
  justify-content: center;
}

</style>