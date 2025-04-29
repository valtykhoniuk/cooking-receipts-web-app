<template>
  <div v-if="receipts.length > 0">
    <transition-group name="post-list" tag="div">
      <ReceiptItem
        v-for="receipt in receipts"
        :key="receipt.id"
        :receipt="receipt"
        @remove="$emit('remove', $event)"
      />
    </transition-group>
  </div>

  <h2 v-else>Nothing found :[</h2>
</template>

<script setup lang="ts">
import ReceiptItem from "./ReceiptItem.vue";

interface Receipt {
  id: number;
  title: string;
  description: string;
}

defineProps<{ receipts: Receipt[] }>();
</script>

<style scoped></style>
