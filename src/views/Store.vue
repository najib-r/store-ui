<template>
  <div>
    <v-card v-for="item in menu">
      {{ item }}
    </v-card>
  </div>
</template>

<script setup>
import menu from '../data/menu'
</script>

<style scoped>
</style>
