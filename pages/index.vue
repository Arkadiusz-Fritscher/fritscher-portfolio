<template>
  <main>
    <TheWork />
    <TheAbout />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    this.initAnimations();
  },

  methods: {
    initAnimations() {
      const elements =
        document.querySelectorAll('[data-animate="element"]') || [];

      if (elements.length > 0)
        elements.forEach((element) => {
          this.fadeIn(element);
        });
    },

    fadeIn(element) {
      const gsap = this.$gsap;
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power2.out',
        },
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'center top',
          toggleActions: 'play pause resume reset',
          // scrub: true,
          // pin: true,
          // markers: true,
        },
      });

      tl.from(element, {
        y: '10vh',
      });
    },
  },
};
</script>
