import { ref, computed } from "vue";
import type { Ref } from "vue";

interface Receipt {
  id: number;
  title: string;
  description: string;
}

type SortKey = keyof Pick<Receipt, "id" | "title">;

export default function useSortedPosts(receipts: Ref<Receipt[]>) {
  const selectedSort = ref<SortKey>("id");

  const sortedReceipts = computed(() => {
    return [...receipts.value].sort((a, b) => {
      const key = selectedSort.value;
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.localeCompare(bValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return aValue - bValue;
      }

      return 0;
    });
  });

  return {
    selectedSort,
    sortedReceipts,
  };
}
