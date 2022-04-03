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
    formatDate(date) {
      const formattedDate = new Date(date).toLocaleDateString('de-DE', {
        month: 'long',
        year: 'numeric',
      });

      return formattedDate;
    },
  },
};
</script>

<template>
  <section id="work">
    <!-- Project Cart -->
    <div v-for="project in projects" :key="project.slug" class="project mb-xl">
      <div class="project__date text-caption">
        {{ formatDate(project.updatedAt) }}
      </div>
      <div class="project__title text-h1 font-semibold">
        {{ project.title }}
      </div>
      <div class="project__services text-caption">
        <ul class="flex gap-x-2">
          <li v-for="(service, i) in project.services" :key="i">
            {{ service }}
          </li>
        </ul>
      </div>
      <div
        class="project__thumbnail aspect-[3/4] bg-black desktop:aspect-[4/3]"
      >
        <router-link
          :to="{ name: 'slug', params: { slug: project.slug } }"
          class="block h-full w-full"
        >
          <img
            :src="require(`@/assets/thumbnails/${project.thumbnail}.jpg`)"
            class="block h-full w-full object-cover object-center"
            :alt="project.title"
          />
        </router-link>
      </div>
      <div class="project__description">{{ project.description }}</div>
      <div class="project__link">
        <BaseTextLink :to="{ name: 'slug', params: { slug: project.slug } }">
          View Project details
        </BaseTextLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
#work {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
}

.project {
  flex: 1 1 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto auto auto 1fr;
  grid-auto-rows: 1fr;
  gap: 0.5rem 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'date'
    'title'
    'services'
    'thumbnail'
    'description'
    'link';
}

.project__date {
  grid-area: date;
  align-self: end;
}

.project__title {
  grid-area: title;
}

.project__services {
  grid-area: services;
}

.project__thumbnail {
  grid-area: thumbnail;
}

.project__description {
  grid-area: description;
}

.project__link {
  grid-area: link;
}

@media screen(tablet) {
  .project {
    flex: 1 1 calc(50% - 1rem);
  }
}

@media screen(desktop) {
  .project {
    flex: 1 1 100%;
    display: grid;
    grid-template-columns: 60% 1fr;
    grid-template-rows: 1fr auto auto auto 1fr;
    align-items: end;
    grid-auto-rows: 1fr;
    gap: 1rem 2rem;
    grid-auto-flow: row;
    grid-template-areas:
      'thumbnail date'
      'thumbnail title'
      'thumbnail services'
      'thumbnail description'
      'thumbnail link';
  }
}
</style>
