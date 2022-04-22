<template>
  <div class="callout">
    <p class="text-callout">
      <slot>callout</slot>
    </p>
  </div>
</template>

<style scoped>
.callout {
  display: flex;
  justify-content: center;
  padding-inline: clamp(0.5rem, -1.229rem + 7.379vw, 7.625rem);
  margin-block-start: var(--section-space-104);
  margin-block-end: var(--section-space-96);
}
</style>
