<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },

  computed: {
    imageUrl() {
      const path = require(`@/assets/projects/${this.$route.params.slug}/${this.url}`);
      return path || '';
    },
  },
};
</script>

<template>
  <div class="work__image" :class="{ 'work__image--right': right }">
    <div class="image__container">
      <img :src="imageUrl" :alt="alt" />
    </div>
  </div>
</template>

<style scoped>
.work__image {
  width: 100%;
  display: flex;
  padding-block: calc(var(--section-space-80) / 2);
}

.work__image--right {
  justify-content: flex-end;
}

.image__container {
  flex: 1 1 100%;
  aspect-ratio: 16 / 9;
  background-color: hsl(0, 0%, 94%);
}

.image__container img {
  max-inline-size: 100%;
  aspect-ratio: auto 16/9;
  object-fit: cover;
}

@media (min-width: 1000px) {
  .image__container {
    flex: 0 1 80%;
  }
}
</style>
