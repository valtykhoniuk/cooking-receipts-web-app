import { ref, computed } from "vue";
import type { Ref } from "vue";

interface Receipt {
  id: number;
  title: string;
  description: string;
}

export default function useSortedAndSearchedPeceipts(
  sortedReceipts: Ref<Receipt[]>
) {
  const searchQuery = ref("");

  const sortedAndSearchedReceipts = computed(() =>
    sortedReceipts.value.filter((receipt) =>
      receipt.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );

  return {
    searchQuery,
    sortedAndSearchedReceipts,
  };
}
