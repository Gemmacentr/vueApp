<script setup lang="ts">
import Input from "./Input.vue";
const testo = defineModel("nome");
const testo1 = defineModel("cognome");
</script>

<template>
  <div>
    <Input v-model:name="testo" v-model:surname="testo1" />
  </div>
</template>
