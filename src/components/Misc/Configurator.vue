<script setup lang="ts">
import { computed } from "vue";
import GemmaInput from "../UI/GemmaInput.vue";

// Itereare el in modo da avere lo stesso numero di input sia su Data che in questo componente
// Fare in modo che i v-model siano dinamici, cioè:
// Se in Data.vue il primo input scrivo 'abc', lo devo visualizzare anche nel primo input di Configurator e viceversa, e così anche per il placeholder ed il colore
// dell'input.

const props = defineProps({
  modelValue: {
    default: {
      first: '',
      second: ''
    }
  },
  el: []
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
  
  <div class="configurator">
    CONFIGURATOR
    <br>
    <pre> {{ model }}</pre>
    <br>
    <GemmaInput v-model="model.first"  />
    <br>
    <GemmaInput v-model="model.second" />
  </div>

</template>
<style lang="scss">
.configurator {
  padding: 3rem;
  border: 1px solid red;
}
</style>