<template>
  <div v-if="receipts.length > 0">
    <transition-group name="receipt-list" tag="div">
      <receipt-item
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

<style scoped>
.receipt-list-enter-active,
.receipt-list-leave-active {
  transition: all 0.4s ease;
}

.receipt-list-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.receipt-list-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.receipt-list-move {
  transition: transform 0.4s ease;
}
</style>
