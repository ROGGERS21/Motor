<template>
  <div class="text-gray-200">
    <h2 class="text-white text-xl font-semibold mb-6">
      {{ title }}
    </h2>

    <ul class="space-y-4">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="text-gray-200 text-base cursor-pointer hover:text-green-500 transition"
      >
        {{ link }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },

  links: {
    type: Array,
    required: true
  }
})
</script>