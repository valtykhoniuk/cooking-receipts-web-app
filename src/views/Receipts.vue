<template>
  <h1>Receipts page</h1>
  <input v-focus v-model="searchQuery" placeholder="Search..." />
  <CustomButton @click="showModal = true">Add recipe</CustomButton>
  <ReceiptForm
    :visible="showModal"
    @create="addReceipt"
    @close="showModal = false"
  />
  <select v-model="selectedSort">
    <option disabled value="">Select sorting</option>
    <option
      v-for="option in sortedOptions"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>

  <ReceiptsList :receipts="sortedAndSearchedReceipts" @remove="removeReceipt" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ReceiptsList from "../components/ReceiptsList.vue";
import ReceiptForm from "../components/ReceiptForm.vue";
import CustomButton from "../components/UI/CustomButton.vue";
import useSortedAndSearchedReceipts from "../components/hooks/useSortedAndSearchedPeceipts";
import useSortedReceipts from "../components/hooks/useSortedReceipts";

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

const showModal = ref(false);
const sortedOptions = ref([
  { value: "title", name: "By name" },
  { value: "body", name: "By content" },
]);

function addReceipt(newReceipt: Receipt) {
  receipts.value.push(newReceipt);
}

function removeReceipt(receiptToRemove: Receipt) {
  receipts.value = receipts.value.filter(
    (receipt) => receipt.id !== receiptToRemove.id
  );
}

const { selectedSort, sortedReceipts } = useSortedReceipts(receipts);
const { searchQuery, sortedAndSearchedReceipts } =
  useSortedAndSearchedReceipts(sortedReceipts);
</script>

<style scoped></style>
