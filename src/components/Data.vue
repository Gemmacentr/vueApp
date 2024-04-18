<script setup lang="ts">
import { ref } from "vue";
import Configurator from "../components/Misc/Configurator.vue";

const name = ref("");
const surname = ref("");

const currentValue = ref("");
const changeValue = (value: any) => {
  currentValue.value = value.value;
};
</script>

<template>
  <Configurator v-model:title="name" v-model:title2="surname" />
  <h1>Prova</h1>
  <Configurator
    :value="surname"
    @input="changeValue($event.target)"
    v-model:title="name"
    v-model:title2="surname"
  />
</template>
