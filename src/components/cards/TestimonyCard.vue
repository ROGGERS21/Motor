<template>
  <div class="testimony-card">

    <!-- Image -->
    <div class="person-image-wrapper">
      

      <img
         :src="image"
           :alt="name"
           class="person-image"
          />
    </div>

    <!-- Content -->
    <div class="testimony-content">

      <h3 class="person-name">
        {{ name }}
      </h3>

      <p class="person-position">
        {{ position }}
      </p>

      <p class="comment">
        {{ comment }}
      </p>

    </div>

  </div>
</template>

<script setup>

defineProps({
  name: String,
  position: String,
  image: String,
  comment: String,
})


</script>

<style scoped>

.testimony-card {
  width: 100%;
  max-width: 350px;
 box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;

  padding: 30px 25px;

  text-align: center;

  margin: 10px;
}

/* Image */

.person-image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.person-image {
  width: 100px;
  height: 100px;

  border-radius: 50%;

  object-fit: cover;
}

/* Content */

.testimony-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.person-name {
  margin: 0;

  font-size: 20px;
  font-weight: 600;
}

.person-position {
  margin: 6px 0 15px;
 

  color: #10b981;
  font-size: 14px;
}

.comment {
  margin: 0;

  color: #666;

  line-height: 1.7;

  font-size: 15px;
}

</style>