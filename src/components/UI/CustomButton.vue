<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: "custom-button",
});
</script>

<style scoped>
.btn {
  border: none;
  color: white;
  padding: 10px 15px;
  background-color: black;
  border-radius: 10px;
}
</style>
