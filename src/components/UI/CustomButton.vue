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
@property --color-gradient-start {
  syntax: "<color>";
  inherits: false;
  initial-value: #e0c89b;
}

@property --color-gradient-end {
  syntax: "<color>";
  inherits: false;
  initial-value: #62a198;
}

.btn {
  background-image: linear-gradient(
    90deg,
    var(--color-gradient-start) 0%,
    var(--color-gradient-end) 100%
  );
  transition: --color-gradient-start 0.5s, --color-gradient-end 0.5s;

  &:hover {
    --color-gradient-start: #62a198;
    --color-gradient-end: #b1302b;
  }

  border: none;
  color: white;
  width: 5rem;
  padding: 10px 15px;
  border-radius: 10px;
}
</style>
