<template>
  <div class="main">
    <h1>Receipts page</h1>
    <input
      class="main__input"
      v-focus
      v-model="searchQuery"
      placeholder="Search..."
    />
    <CustomButton @click="showModal = true">Add recipe</CustomButton>
    <ReceiptForm
      :visible="showModal"
      @create="addReceipt"
      @close="showModal = false"
    />
    <select class="main__select" v-model="selectedSort">
      <option disabled value="">Select sorting</option>
      <option
        v-for="option in sortedOptions"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>

    <ReceiptsList
      :receipts="sortedAndSearchedReceipts"
      @remove="removeReceipt"
    />
  </div>
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

<style scoped>
.main__select {
  width: 50%;
}

.main__select:focus {
  border-bottom: 2px solid #b1302b;
}

.main__input {
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #b1302b;
  color: #b1302b;
  width: 50%;
  padding: 5px 8px;
  outline: none;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  text-align: center;
  align-items: center;
}
</style>
