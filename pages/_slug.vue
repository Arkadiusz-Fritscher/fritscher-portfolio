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
};
</script>

<template>
  <div id="project">
    <pre>
      {{ project }}
    </pre>
  </div>
</template>

<style scoped></style>
