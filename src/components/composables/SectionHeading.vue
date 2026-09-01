<template>
  
  <div ref="content" class="text-center pt-10 md:pt-20 content-wrapper" :class="{'animate-in'  : isVisible}">
    <p class="text-sm text-blue-500 uppercase tracking-wider font-medium">{{ description }}</p>
    <h1 class="text-2xl md:text-4xl font-semibold text-grey-200">{{ title }}</h1>
    
  </div>
</template>

<script setup>
// import type { onMounted } from 'vue';

import {ref, onMounted, onBeforeUnmount} from 'vue'
// export default {

// }
defineProps({
    title: String,
    description: String,


})

const isVisible = ref(false)
const content = ref(null)

let observer = null

onMounted(() => {
    const observer = new IntersectionObserver((entries) =>  {
        entries.forEach((entry) => {
            if (entry.isIntersecting)  {
                isVisible.value = true
                observer.unobserve(content.value)
            }
        })
    }, { threshold: 0.5 })

    if(content.value) {
            observer.observe(content.value)
    }

    // Clean up observer when component unmounts
onBeforeUnmount(() => {
  if (observer && content.value) {
    observer.unobserve(content.value)
    observer.disconnect()
  }
})

})
</script>



<style>

.content-wrapper {
    transition: opacity 0.3s ease-in-out;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.8s ease-out;
} 

.content-wrapper.animate-in {
  transform: translateY(0);
  opacity: 1;

}

</style>