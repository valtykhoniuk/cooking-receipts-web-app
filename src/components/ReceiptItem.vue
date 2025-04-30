<template>
  <div class="receipt">
    <div>id: {{ receipt.id }}</div>
    <div>title: {{ receipt.title }}</div>
    <div>description: {{ receipt.description }}</div>
    <div class="receipt__btn">
      <custom-button @click="$emit('remove', receipt)">Delete</custom-button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Receipt {
  id: number;
  title: string;
  description: string;
}

defineProps<{ receipt: Receipt }>();
</script>

<style scoped>
.receipt {
  border: 1px solid #e0c89b;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
