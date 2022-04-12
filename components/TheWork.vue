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
          <picture>
            <source
              srcset="
                @/assets/thumbnails/desktop@05x.jpg  960w,
                @/assets/thumbnails/desktop@1x.jpg  1920w,
                @/assets/thumbnails/desktop@2x.jpg  3840w
              "
              media="(min-width: 30em)"
              sizes="(max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 3840px) 3840px"
            />
            <img
              src="@/assets/thumbnails/mobile@1x.jpg"
              :alt="project.title"
              class="thumbnail"
              loading="eager"
              decoding="sync"
              width="1920"
              height="1080"
              srcset="
                @/assets/thumbnails/mobile@05x.jpg  282w,
                @/assets/thumbnails/mobile@1x.jpg   564w,
                @/assets/thumbnails/mobile@2x.jpg  1128w
              "
              sizes="(max-width: 282px) 282px, (max-width: 564px) 564px, (max-width: 1128px) 1128px"
            />
          </picture>
          <figcaption>
            <h2 class="text-h3">{{ project.title }}</h2>
            <p class="text-caption text-lighter">
              {{ formatServices(project.services) }}
            </p>
          </figcaption>
        </figure>
      </router-link>
    </article>
  </section>
</template>

<style scoped>
.thumbnail {
  max-inline-size: 100%;
  block-size: auto;
  aspect-ratio: auto 3 / 4;
  object-fit: cover;
  object-position: top center;
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

@media screen(sm) {
  .work > article,
  .work article:nth-last-child(-n + 2) {
    flex: 1 1 46%;
  }

  .work > article:nth-child(3n + 1) {
    flex: 1 1 100%;
  }

  .thumbnail {
    aspect-ratio: auto 16 / 9;
  }
}
</style>
