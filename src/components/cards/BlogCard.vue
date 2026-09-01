
<template>
  <div class="w-full">
    <img
      :src="getImage(image)"
      :alt="title"
      class="w-full h-210 object-cover"
    />

    <div class="p-4">
      <p>{{ author }}</p>

      <div v-if="showComments">
        <p>
          Comments:
          {{ Array.isArray(comments) ? comments.length : comments }}
        </p>
      </div>

      <h2 class="text-xl font-bold">{{ title }}</h2>

      <p>{{ description }}</p>

      <div
        v-if="showComments && Array.isArray(comments) && comments.length > 0"
        class="mt-4"
      >
        <h4 class="font-semibold text-gray-700">
          Recent Comments:
        </h4>

        <div
          v-for="(comment, idx) in comments.slice(0, 2)"
          :key="idx"
          class="text-sm text-gray-600 mt-2 border-l-2 border-blue-500 pl-3"
        >
          <p>
            <strong>{{ comment.author }}</strong>
            <span class="text-yellow-500">
              ★ {{ comment.rating }}
            </span>
          </p>

          <p class="text-gray-500">
            {{ comment.text }}
          </p>
        </div>

        <p
          v-if="comments.length > 2"
          class="text-sm text-blue-500 mt-2"
        >
          + {{ comments.length - 2 }} more comments...
        </p>
      </div>

      <ButtonComponent text="Read More" />
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../composables/ButtonComponent.vue";

const props = defineProps({
  id: Number,
  title: String,
  author: String,
  comments: {
    type: [Array, Number],
    default: 0
  },
  date: String,
  image: String,
  description: String,
  showComments: {
    type: Boolean,
    default: true
  }
});

const getImage = (imageName) => {
  if (!imageName) return "";

  if (
    imageName.startsWith("http") ||
    imageName.startsWith("/")
  ) {
    return imageName;
  }

  return new URL(
    `/src/assets/images/${imageName}`,
    import.meta.url
  ).href;
};
</script>

