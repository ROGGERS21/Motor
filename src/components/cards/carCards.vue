<template>
  <div class="car-card">
    <!-- <img -->
   
       <img 
       :src="image" 
        :alt="name" 
         class="car-image" 
      />

    <div class="car-info">

      <div class="car-details">
        <p class="brand">{{ brand }}</p>
        <p class="price">{{ price }}</p>
      </div>

      <div class="car-actions">
        <RouterLink to="/pricing">
          <ButtonComponent text="Book Now" />
        </RouterLink>

        <RouterLink :to="`/cars/${id}`">
          <button class="bg-blue-500 text-white px-6 py-3">
            Details
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../composables/ButtonComponent.vue";

defineProps({
  id: Number,
  name: String,
  brand: String,
  price: String,
  image: String,
});

</script>

<style scoped>
.car-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 16px;
  margin: 10px;
}

.car-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.car-info {
  padding: 12px 0;
}

.car-details {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
}

.car-actions {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.car-actions button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.brand {
  font-weight: 400;
}

.price {
  color: blue;
}
</style>