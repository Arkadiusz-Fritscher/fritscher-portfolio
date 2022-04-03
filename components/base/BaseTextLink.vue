<script>
export default {
  name: 'BaseTextLink',
  props: {
    to: {
      type: Object,
      default: () => {
        return {};
      },
    },
    href: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <router-link v-if="!href" :to="to" class="text-link">
    <span>
      <slot>Link</slot>
    </span>

    <span>
      <IconArrowRight />
    </span>
  </router-link>

  <a v-else :href="href" class="text-link">
    <span>
      <slot>Link</slot>
    </span>

    <span>
      <IconArrowRight />
    </span>
  </a>
</template>

<style scoped>
.text-link {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  font-weight: 600;
  font-size: var(--text-base);
  position: relative;
}

.text-link::after,
.text-link::before {
  content: '';
  position: absolute;
  display: block;
  left: 0;
  bottom: -1px;
  height: 1px;
  width: 100%;
  background-color: var(--color-black);
  transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}

.text-link::before {
  transform: scaleX(0);
  transform-origin: left;
}

.text-link::after {
  transform-origin: right;
}

.text-link:hover::before {
  transform: scaleX(1);
  transition-delay: 0.25s;
}

.text-link:hover::after {
  transform: scaleX(0);
  transition-delay: 0s;
}
</style>
