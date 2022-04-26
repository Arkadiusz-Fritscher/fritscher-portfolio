<template>
  <div class="image__text" :class="{ right: right }">
    <div class="relative">
      <div data-show="sticky" :class="{ sticky: sticky }">
        <h3 class="max-w-[43ch] text-h3">{{ headline }}</h3>
        <p class="max-w-[53ch] text-body text-lighter">
          <slot></slot>
        </p>
        <div v-if="linkUrl">
          <a :href="linkUrl" class="btn max-w-[30ch]">
            {{ linkText }}
          </a>
        </div>
      </div>
    </div>

    <div class="image">
      <div>img</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
      // required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    linkUrl: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.text-h3 {
  margin-block-end: var(--text-space-8);
}

.image {
  background-color: bisque;
  max-block-size: 100%;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.image__text {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: var(--wrapper-gap-y) var(--wrapper-gap-x);
  margin-block-end: calc(var(--section-space-80) / 1.2);
}

.image__text > * {
  flex: 1 1 100%;
}

.right {
  flex-direction: row-reverse;
}

[data-show='sticky'] {
  position: sticky;
}

.sticky {
  top: 30%;
  /* margin-block-end: 10%; */
}

@media (min-width: 800px) {
  .image__text > * {
    flex: 1 1 44%;
  }
}
</style>
