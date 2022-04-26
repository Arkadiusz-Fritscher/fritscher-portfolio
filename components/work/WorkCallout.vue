<template>
  <div class="callout">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.callout {
  padding-block: var(--section-space-80);
  display: flex;
  justify-content: center;

  @apply text-callout font-semibold;
}

.callout > div {
  flex: 0 1 90%;
}

@media (min-width: 1180px) {
  .callout > div {
    flex: 0 1 80%;
  }
}
</style>
