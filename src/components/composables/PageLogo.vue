<template>
   <router-link to="/">
        <h1 class="uppercase text-xl font-bold cursor-pointer no-underline">
            <span :class="carClass">Car</span>
            <span class="text-green-500">Book</span>
        </h1>

   </router-link>
</template>

<script>
import { onBeforeUnmount,onMounted, computed, ref } from 'vue'
export default {
    setup() {
        const isScrolled = ref(false)
        const isMobile = ref(window.innerWidth < 760)


        const handleScroll = ()  => {
            isScrolled.value = window.scrollY > 5
            isMobile.value = window.innerwidth < 760
        }

        onMounted(() => {

            window.addEventListener('scroll', handleScroll)
            handleScroll()   
        })

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll)
        })

        const carClass = computed(() => {

            if (isMobile.value) return "text-black"
            return isScrolled.value ? "text-black" : "text-red"; 

        })

        return {
            carClass,
            // isScrolled,
            // isMobile
        }

 
    }

}
</script>

<style>

</style>