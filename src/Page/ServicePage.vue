<template>
    <BgContainer 
        title="Service"
        bgImage="clients.jpg"
        :links="[
            { text: 'Home', to: '/'},
            { text: 'Service', to: '/service'},

        ]" />

        <ServiceList/> 
         <!-- <ServicePage/> -->


    
</template>

<script setup>

import BgContainer from "../components/composables/BgContainer.vue";
import ServiceList from "../components/homepage/ServiceList.vue";
// import ServicePage from "/ServicePage.vue'"
</script>

<style>

</style>