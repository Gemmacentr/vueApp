<script setup lang="ts">
import { computed } from "vue";
import Input from "./Input.vue";

const props = defineProps({
  modelValue: {
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})



</script>

<template>
  GEMMA INPUT
  <br>
  <input v-model="model" :style="{ 'border-color': borderColor }" :placeholder="placeholder" />
  <br>
</template>
