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
      .only(['title', 'slug', 'description', 'order', 'services', 'thumbnail'])
      .sortBy('order', 'desc')
      .fetch()
      .catch(() => {
        this.error({
          statusCode: 404,
          message: 'This page could not be found.',
        });
      });
  },

  mounted() {
    this.workIntersectionHandler();
  },

  methods: {
    formatServices(services) {
      return services.join(', ');
    },

    customCursor(mode) {
      const workCards = document.querySelectorAll('.project > a');
      if (workCards.length > 0) {
        workCards.forEach((card) => {
          if (mode === 'add') {
            card.addEventListener('mouseenter', this.onMouseEnter, true);
            card.addEventListener('mouseleave', this.onMouseLeave, true);
          } else {
            card.removeEventListener('mouseenter', this.onMouseEnter, true);
            card.removeEventListener('mouseleave', this.onMouseLeave, true);
          }
        });
      }
    },

    onMouseEnter(e) {
      e.target.addEventListener('mousemove', this.onMouseMove);
      this.$refs.workCursor.classList.add('show-cursor');
    },

    onMouseLeave(e) {
      this.$refs.workCursor.classList.remove('show-cursor');
      e.target.removeEventListener('mousemove', this.onMouseMove);
    },

    onMouseMove(e) {
      const x = e.layerX;
      const y = e.layerY;

      this.$refs.workCursor.style.left = `${x}px`;
      this.$refs.workCursor.style.top = `${y}px`;
    },

    workIntersectionHandler(target = document.querySelector('#work')) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('Intersecting');
              this.customCursor('add');
            } else {
              this.customCursor();
              this.$refs.workCursor.classList.remove('show-cursor');
            }
          });
        },
        {
          rootMargin: '0px',
          threshold: 0,
        }
      );

      observer.observe(target);
    },
  },
};
</script>

<template>
  <section id="work" class="work">
    <div ref="workCursor" class="work-cursor">
      <span class="text-center font-semibold uppercase"
        >watch full project</span
      >
    </div>
    <article v-for="project in projects" :key="project.slug" class="project">
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
.work-cursor {
  display: none;
}

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

.project > a {
  display: block;
}

@media (min-width: 800px) {
  .work > article {
    flex: 1 1 46%;
  }
  .work > article:first-of-type {
    flex: 1 1 100%;
  }

  .thumbnail {
    aspect-ratio: 4 / 3;
  }

  .work > article:first-of-type .thumbnail {
    aspect-ratio: 16 / 9;
  }
}

@media (pointer: fine) {
  .work-cursor {
    display: none;
    position: absolute;
    width: min-content;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: var(--color-black);
    font-size: var(--text-body);
    padding: var(--text-body);
    color: var(--color-white);
    pointer-events: none;
    transform: translate(-50%, -50%);
    line-height: 1;
    transition: all 0s ease-in-out;
  }

  .show-cursor {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: crosshair;
  }
}
</style>
