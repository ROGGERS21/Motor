<template>
    
    <BgContainer title="Blogs"
     bgImage="clients.jpg"
    :links="[
        { text: 'Home', to:'/' },
        { text: 'Blog', to:'/blog' },
    ]"  />


<!-- TEST IMAGE -->



  <section class="flex flex-col items-center gap-16 p-4 py-10 md:py-20">
    <BlogCard
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :author="blog.author"
      :date="blog.date"
      :image="blog.image"
      :description="blog.description"
      :comments="blog.comments"
      :showComments="false"
      :class="'w-5/6 object-contain text-center'"
      :imageHeight="'h-auto'"
    />
  </section>

</template>

<script setup>

import BgContainer from "../components/composables/BgContainer.vue";
import BlogCard from "../components/cards/BlogCard.vue";
import { blogs } from "../data/blogData";


</script>

<style>

</style>