<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-window">
      <h2>Add new recipe</h2>
      <form @submit.prevent="createReceipt">
        <input
          v-model="receipt.title"
          type="text"
          placeholder="Enter title"
          class="input"
        />
        <input
          v-model="receipt.description"
          type="text"
          placeholder="Enter description"
          class="input"
        />
        <custom-button>Add</custom-button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import CustomButton from "./UI/CustomButton.vue";

interface Receipt {
  id: number;
  title: string;
  description: string;
}

const emit = defineEmits<{
  (event: "create", payload: Receipt): void;
  (event: "close"): void;
}>();

defineProps<{
  visible: boolean;
}>();

const receipt = reactive<Receipt>({
  id: Date.now(),
  title: "",
  description: "",
});

function createReceipt() {
  if (!receipt.title.trim() || !receipt.description.trim()) return;

  emit("create", { ...receipt });
  emit("close");

  receipt.title = "";
  receipt.description = "";
  receipt.id = Date.now();
}

function close() {
  emit("close");
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-window {
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  width: 300px;
}

.input {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
