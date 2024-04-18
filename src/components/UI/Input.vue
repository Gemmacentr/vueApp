<script setup lang="ts">
const firstName = defineModel("name");
const lastName = defineModel("surname");
defineProps({
  name: String,
  surname: String
})
</script>

<template>
  <div class="input-container">
  <div class="input-group">
    <label for="firstName" class="label">Name</label>
    <input type="text" v-model="firstName" :class="'field'">
    
  </input>
  </div>
  <div class="input-group">
      <label  for="lastName" class="label">Surname</label>
    <input type="text" v-model="lastName" :class="'field'"> 
  </input>
  </div>
  </div>
</template>
