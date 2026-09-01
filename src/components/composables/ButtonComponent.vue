
<template>
  <button
    :class="`mt-4 px-4 py-4 rounded min-w-32 text-sm font-medium ${bgColor} ${textColor} hover:bg-blue-700`"
    :style="{ width: width }"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Click Me'
  },

  width: {
    type: String,
    default: 'auto'
  },

  bgColor: {
    type: String,
    default: 'bg-blue-600'
  },

  textColor: {
    type: String,
    default: 'text-white'
  }
})
</script>