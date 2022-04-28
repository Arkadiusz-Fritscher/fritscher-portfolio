<script>
export default {};
</script>

<template>
  <section id="contact">
    <div class="flex flex-col items-center" data-animate="element">
      <div class="contact__text text-center">
        Have a Job opportunity? <br />
        Let's chat!
      </div>
      <button class="btn w-full sm:max-w-[340px]">Contact me</button>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-bottom: var(--section-space-80);
}

.section > div {
  margin-inline: var(--text-space-8);
}

.contact__text {
  margin-block-end: var(--text-space-32);
  font-size: clamp(2.5rem, 1.529rem + 4.142vw, 6.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-weight: 700;
}
</style>
