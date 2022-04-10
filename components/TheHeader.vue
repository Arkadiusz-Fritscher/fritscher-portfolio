<script>
export default {
  name: 'TheHeader',
};
</script>

<template>
  <header class="flex justify-center">
    <h1 class="hero__text text-hero font-semibold sm:text-center">
      Self Taught Frontend Developer based in Mainz
    </h1>
  </header>
</template>

<style scoped>
.hero__text {
  margin-top: calc(226.176px + 1.553vw); /* fallback */
  margin-top: clamp(14.5rem, 14.136rem + 1.553vw, 16rem);

  margin-bottom: calc(38.784px + 2.46vw); /* fallback */
  margin-bottom: clamp(3rem, 2.424rem + 2.46vw, 5.375rem);

  max-width: 22ch;
}
</style>
