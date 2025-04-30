<template>
  <div class="navbar">
    <div class="navbar__btns">
      <button @click="$router.push('/about-us')">About us</button>
      <button @click="$router.push('/receipts')">Receipts</button>
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
  background-color: #bdded0;
  display: flex;
}

.navbar__btns {
  margin: auto;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.navbar__btns button {
  border: none;
  background: transparent;
  text-decoration: underline;
  width: 5rem;
  padding: 10px 15px;
  border-radius: 10px;
}
</style>
