<template>
  <div class="navbar">
    <div class="navbar__btns">
      <custom-button @click="$router.push('/about-us')">About us</custom-button>
      <custom-button @click="$router.push('/receipts')">Receipts</custom-button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "navbar",
});
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: rgb(252, 156, 65);
  display: flex;
}

.navbar__btns {
  margin: auto;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}
</style>
