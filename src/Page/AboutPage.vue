<template>

    <BgContainer title="About"
     bgImage="clients.jpg"
    :links="[
        { text: 'Home', to:'/' },
        { text: 'About Us', to:'/about' },
    ]"  />

    <AboutUs/> 
    <TestimonySection/> 
    <StatisticSection/> 
  
</template>

<script setup>
import BgContainer from "../components/composables/BgContainer.vue";
import AboutUs from "@/components/homepage/AboutUs.vue";
import TestimonySection from "../components/homepage/TestimonySection.vue";
import StatisticSection from "../components/homepage/StatisticSection.vue";

</script>

<style>

</style>