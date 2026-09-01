<template>
   <SectionHeading title="Recent Blog" description="Blog"/>
   <section>
        <BlogCard 
        v-for="(blog, index) in  blogs"
         :key="index"
         :id="blog.id"
         :date="blog.date"
         :title="blog.title"
         :author="blog.author"
         :description="blog.description"
         :comments="blog.comments"
         :class="`md:w-801`"

         />
   </section>

</template>

<script setup>
// import SectionHeader from '../composables/SectionHeader.vue';
import SectionHeading from '../composables/SectionHeading.vue'
import BlogCard from '../cards/BlogCard.vue';
import { blogs} from "../../data/blogData";


// import BMW from "../assets/images/BMW.jpg"

/*
export const blogs = [
  {
    id: 1,
   //  name: "BMW X5",
   //  brand: "BMW",
   //  price: "Ksh 8,000,000",
    image: "BMW.jpg",comments: 2,
    date: "Oct. 29, 2019",
  },
  {
    id: 2,
    name: "Mercedes Benz",
    brand: "Mercedes",
    price: "Ksh 9,000,000",
    image: "Mercedes.jpg"
  },
]

*/
</script>

<style>


</style>