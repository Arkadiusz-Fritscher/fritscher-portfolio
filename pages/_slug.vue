<script>
import formatDate from '@/utils/formatDate.js';
export default {
  name: 'ProjectPage',
  layout: 'project',

  async asyncData({ params, $content, error }) {
    const { slug } = params;

    if (slug) {
      const project = await $content(`${slug}`)
        .fetch()
        .catch(() => {
          error({ statusCode: 404, message: 'This page could not be found.' });
        });

      if (project) {
        return { project };
      }
    }
  },

  data() {
    return {
      project: null,
    };
  },

  head() {
    return {
      title: this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.project.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.project.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.project.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.project.description,
        },
      ],
    };
  },

  computed: {
    formattedDate() {
      return formatDate(
        this.project.date ? this.project.date : this.project.createdAt
      );
    },
  },

  mounted() {
    console.log(this.project);
  },
};
</script>

<template>
  <div id="project">
    <WorkHeader
      :description="project.description"
      :title="project.title"
      :services="project.services"
      :stack="project.stack"
      :links="project.links"
      :date="formattedDate"
    />
    <!-- <pre>{{ project }}</pre> -->
    <article class="content">
      <nuxt-content :document="project" tag="article"> </nuxt-content>
    </article>
  </div>
</template>

<style scoped></style>
