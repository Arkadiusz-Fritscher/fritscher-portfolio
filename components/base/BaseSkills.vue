<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    info: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <article class="skills">
    <div class="headline__container">
      <div data-scroll="sticky">
        <span class="type text-caption capitalize">{{ type }}</span>
        <h3 class="headline text-h1">
          {{ headline }}
        </h3>
      </div>
    </div>
    <div class="skills__container">
      <ul>
        <li v-for="(entry, i) in list" :key="i" class="text-h2 font-medium">
          {{ entry }}
        </li>
      </ul>
      <p class="text-lighter">{{ info }}</p>
    </div>
  </article>
</template>

<style scoped>
.skills {
  display: flex;
  flex-wrap: wrap;
  margin-block-end: var(--section-space-80);
}

.type {
  margin-block-end: var(--text-space-8);
}

.headline {
  margin-block-end: var(--text-space-16);
  max-width: 14ch;
}

li {
  padding-block: clamp(1rem, 0.636rem + 1.553vw, 2.5rem);
  border-block-start: 1px solid var(--color-black);
  display: flex;
  align-items: center;
}

li::before {
  content: '';
  display: inline-block;
  margin-right: var(--text-space-8);
  width: calc(var(--text-caption) / 2.5);
  height: calc(var(--text-caption) / 2.5);
  border-radius: 50%;
  background-color: currentColor;
}

li:last-of-type {
  border-block-end: 1px solid var(--color-black);
  margin-block-end: var(--text-space-8);
}

@media (min-width: 580px) {
  .skills {
    column-gap: var(--wrapper-gap-x);
  }

  .headline__container {
    flex: 1 1 calc(50% - var(--wrapper-gap-x) / 2);
  }

  .skills__container {
    flex: 1 1 calc(50% - var(--wrapper-gap-x) / 2);
  }

  [data-scroll='sticky'] {
    position: sticky;
    top: 10vh;
    padding-bottom: 10vh;
    z-index: 1;
  }
}
</style>
