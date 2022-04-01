<script>
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
};
</script>

<template>
  <div id="project">
    <pre>
      {{ project }}
    </pre>
    <nuxt-content :document="project"> </nuxt-content>
  </div>
</template>

<style scoped></style>
