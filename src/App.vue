<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/UI/Navbar.vue";
</script>

<style scoped></style>
