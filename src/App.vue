<script setup>
import Navigation from "./components/NavComponent.vue"

</script>

<template>
  <div>
     <Navigation/>
  </div>
  <div class="container m-auto px-4">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>