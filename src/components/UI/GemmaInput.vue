<script setup lang="ts">
import { computed } from "vue";
import Input from "./Input.vue";

const props = defineProps({
  modelValue: {
    default: 'loldi'
  },
  placeholder: {
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
  <input v-model="model" :placeholder="placeholder" />
</template>
