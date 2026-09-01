<!-- <template> --

    <BgContainer title="Cars"
     bgImage="clients.jpg"
    :links="[
        { text: 'Car', to:'/' },
        { text: 'Cars', to:'/cars' },
    ]"  />

    <div class="flex justify-center w-full my-20">
        <div class="grid grid-cols-1 grid-cols-3 w-4/5 gap-10">
            <carCards 
            v-for="(car, index) in cars"
            :key="index"
            :car="car.id"
            :name="car.name"
            :price="car.price"
            :image="car.image"
             :brand="car.brand"
             
            
            />
        </div>
    </div>

</template>

<script setup>
import BgContainer from "../components/composables/BgContainer.vue";
// import {cars} from "../data/carsData"


import carCards from "../components/cards/carCards.vue";
// import BMW from "../assets/images/BMW.jpg";
import mercedess from "../assets/images/Mercedes.jpg";
import Audi from "../assets/images/Audi.jpg";


const cars = [
  {
    id: 1,
    name: "BMW X5",
    brand: "BMW",
    price: "Ksh 8,000,000",
    image: "BMW.jpg"
  },
  {
    id: 2,
    name: "Mercedes Benz",
    brand: "Mercedes",
    price: "Ksh 9,000,000",
    image: "Mercedes.jpg"
  },
  {
    id: 3,
    name: "Toyota Supra",
    brand: "Toyota",
    price: "Ksh 7,000,000",
    image: "Audi.jpg"
  },
   {
      id: 4,
      brand: "Mercedes-Benz",
      price: "$180",
      image: "car-4.jpg",
      name: "Mercedes Grand Sedan"},
   {
      id: 5,
      brand: "Mercedes-Benz",
      price: "$180",
      image: "car-5.jpg",
      name: "Mercedes Grand Sedan"},
  {
      id: 6,
      brand: "Mercedes-Benz",
      price: "$180",
      image: "car-6.jpg",
      name: "Mercedes Grand Sedan"},
   {
      id: 7,
      brand: "Mercedes-Benz",
      price: "$180",
      image: "car-7.jpg",
      name: "Mercedes Grand Sedan"},
    {
      id: 8,
      brand: "Mercedes-Benz",
      price: "$180",
      image: "car-8.jpg",
      name: "Mercedes Grand Sedan",},
     {
      id: 9,
      brand: "Mercedes-Benz",
      price: "$180",
      image: "car-9.jpg",
      name: "Mercedes Grand Sedan",},
    {
      id: 10,
      brand: "Mercedes-Benz",
      price: "$180",
      image: "car-10.jpg",
      name: "Mercedes Grand Sedan",},
    {
      id: 11,
      brand: "Mercedes-Benz",
      price: "$180",
      image: "car-11.jpg",
      name: "Mercedes Grand Sedan",},
    {
      id: 12,
      brand: "Mercedes-Benz",
      price: "$180",
      image: "car-12.jpg",},

]

</script>

<style>

</style>

<!--  -->

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
        :id="car.id"
        :name="car.name"
        :price="car.price"
        :image="car.image"
        :brand="car.brand"
      />

    </div>
  </div>

</template>

<script setup>
import BgContainer from "../components/composables/BgContainer.vue";
import CarCards from "../components/cards/carCards.vue";
import { cars } from "../data/carsData";
</script>