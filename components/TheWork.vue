<script>
export default {
  name: 'TheProjects',
  data() {
    return {
      projects: [],
    };
  },

  async fetch() {
    this.projects = await this.$content()
      .only([
        'title',
        'slug',
        'description',
        'order',
        'updatedAt',
        'services',
        'thumbnail',
      ])
      .sortBy('order', '')
      .fetch()
      .catch(() => {
        this.error({
          statusCode: 404,
          message: 'This page could not be found.',
        });
      });
  },

  methods: {
    formatServices(services) {
      return services.join(', ');
    },
  },
};
</script>

<template>
  <section id="work" class="work">
    <article v-for="project in projects" :key="project.slug">
      <router-link :to="{ name: 'slug', params: { slug: project.slug } }">
        <figure>
          <picture>picture</picture>
          <figcaption>
            <h2 class="text-h3">{{ project.title }}</h2>
            <p class="text-caption text-lighter">
              {{ formatServices(project.services) }}
            </p>
          </figcaption>
        </figure></router-link
      >
    </article>
  </section>
</template>

<style scoped>
picture {
  margin-bottom: clamp(0.5rem, 0.379rem + 0.518vw, 1rem);
  width: 100%;
  display: block;
  aspect-ratio: 3 / 4;
  background-color: #e6e6e6;
}

.work {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(2.5rem, 2.242rem + 1.1vw, 3.563rem)
    clamp(1.5rem, 0.999rem + 2.136vw, 3.563rem);
}

.work > article {
  flex: 1 1 100%;
}

@media screen(tablet) {
  .work > article,
  .work article:nth-last-child(-n + 2) {
    flex: 1 1 46%;
  }

  .work > article:nth-child(3n + 1) {
    flex: 1 1 100%;
  }

  picture {
    aspect-ratio: 16 / 9;
  }
}
</style>
