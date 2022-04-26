<script>
export default {
  name: 'WorkHeader',
  props: {
    coverImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    services: {
      type: Array,
      default: () => [],
    },
    stack: {
      type: Array,
      default: () => [],
    },

    links: {
      type: Object,
      default: () => {},
    },
    date: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <header>
    <div class="hero__container"></div>
    <div class="data__container">
      <div class="data__back">
        <button
          class="link flex items-center gap-x-2 text-caption"
          @click="$router.go(-1)"
        >
          <IconArrowRight class="inline-block rotate-180" /><span
            class="leading-none"
            >Back</span
          >
        </button>
      </div>
      <div class="data__text">
        <h1 class="data__title text-h1">{{ title }}</h1>
        <p class="data__description text-body text-lighter">
          {{ description }}
        </p>
      </div>
      <div class="data__info">
        <div class="data__info__lists flex flex-1 flex-wrap text-caption">
          <ul v-if="stack.length > 0">
            <li class="data__info__list__title">Stack</li>
            <li
              v-for="entry in stack"
              :key="entry"
              class="data__info__list__entries"
            >
              {{ entry }}
            </li>
          </ul>

          <ul v-if="services.length > 0">
            <li class="data__info__list__title">Services</li>
            <li
              v-for="service in services"
              :key="service"
              class="data__info__list__entries"
            >
              {{ service }}
            </li>
          </ul>

          <ul>
            <li class="data__info__list__title">Date</li>
            <li class="data__info__list__entries">
              {{ date }}
            </li>
          </ul>
        </div>
        <div class="data__info__links">
          <a
            v-for="(url, name) in links"
            :key="name"
            :href="url"
            class="btn w-full max-w-sm tablet:max-w-xs"
            >{{ name }}</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-block-end: calc(var(--section-space-80) / 2);
}

.hero__container {
  width: 100%;
  height: 44vh;
  background-color: antiquewhite;
  margin-block-end: var(--text-space-16);
}

.data__description {
  max-inline-size: 55ch;
}

.data__text {
  margin-block-end: calc(var(--text-space-32) * 2);
}

.data__title {
  margin-block-start: var(--text-space-32);
  margin-block-end: var(--text-space-16);
}

.data__info {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wrapper-gap-x) var(--wrapper-gap-y);
}

.data__info > * {
  flex: 1 1 100%;
}

.data__info__lists {
  gap: var(--text-space-16) var(--text-space-8);
  justify-content: space-between;
}

.data__info__list__entries {
  font-weight: 400;
  color: var(--color-body);
}
.data__info__lists li:not(:last-child) {
  margin-block-end: calc(var(--text-space-8) / 2);
}

.data__info__links {
  display: flex;
  align-items: flex-end;
  column-gap: var(--text-space-24);
}

@media (min-width: 486px) {
  .data__info__lists {
    justify-content: flex-start;
    column-gap: var(--text-space-32);
  }
}

@media (min-width: 800px) {
  .data__info > * {
    flex: 1 1 calc(50% - var(--wrapper-gap-x));
  }
}

@media (min-width: 1200px) {
  .data__info__lists {
    gap: calc(var(--text-space-32) * 2);
  }
}
</style>
