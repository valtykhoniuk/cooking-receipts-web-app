<template>
  <h1>Receipts page</h1>
  <ReceiptsList :receipts="receipts" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ReceiptsList from "../components/ReceiptsList.vue";

interface Receipt {
  id: number;
  title: string;
  description: string;
}

const receipts = ref<Receipt[]>([
  { id: 1, title: "Borscht", description: "Beet soup with vegetables" },
  {
    id: 2,
    title: "Varenyky",
    description: "Dumplings with potatoes or cherries",
  },
  {
    id: 3,
    title: "Potatoes",
    description: "Smash potatoes with salt",
  },
]);
</script>

<style scoped></style>
