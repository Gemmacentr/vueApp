<script setup lang="ts">
import { ref } from "vue";
import Configurator from "../components/Misc/Configurator.vue";
import GemmaInput from "./UI/GemmaInput.vue";


const model = ref({
  first: '',
  second: ''
})

// Definire un array "elements" che contiene input con il proprio placeholder e colore del bordo dell'input
// Questo array sarà passato in configurator tramite la props "el"
</script>

<template>

<br>
  <GemmaInput v-model="model.first" />
  <br>
  <GemmaInput v-model="model.second" />

  <Configurator v-model="model" />
</template>
