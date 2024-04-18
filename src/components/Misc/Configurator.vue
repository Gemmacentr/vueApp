<script setup lang="ts">
import GemmaInput from "../UI/GemmaInput.vue";

const title = defineModel("title");
const title2 = defineModel("title2");
</script>

<template>
  <GemmaInput v-model:nome="title" v-model:cognome="title2" />
</template>
