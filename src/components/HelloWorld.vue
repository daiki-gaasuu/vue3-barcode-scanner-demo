<template>
  <v-container>
    <p>counter: {{ counter.count }}, doubleCounter: {{ counter.doubleCount() }}</p>
    <v-btn @click="counter.increment">+1</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useCounterStore } from "../store/counter";
const counter = useCounterStore();
</script>
