<script>
export default {
  data() {
    return {
      skills: [
        {
          type: 'Developing',
          headline: 'Technologien die mit denen ich bis jezt gearbeitet habe',
          list: [
            'Javascript',
            'Vue 2 & Vue 3',
            'Nuxt.js',
            'Tailwind.css',
            'HTML',
            'CSS / SASS',
          ],
          info: 'Die meisten meiner Projekte erstelle ich mit Vue.js, bin aber auch für andere Frameworks offen.',
        },
        {
          type: 'Design',
          headline: 'Tools mit denen ich vertraut bin.',
          list: ['Figma', 'Photoshop', 'Illustrator'],
          info: 'Ich erstelle zwar Designs für meine Persöhnlichen Projekte, würde mich allerdings nicht als Designer bezeichnen. Den Design ist so viel mehr als nur hübsches aussehen.',
        },
      ],
    };
  },
};
</script>

<template>
  <section id="about">
    <BaseCallout
      >My goal is to work as a full-time Frontend developer on exciting projects
      and learn new things.
    </BaseCallout>

    <article class="about">
      <div class="about__text__container">
        <div class="about__wrapper" data-scroll="sticky">
          <h3 class="about__headline text-h1">
            Hier steht eine total aussagekräftige Überschrift
          </h3>

          <p class="about__body text-body text-lighter">
            Hi, ich bin der Arkadiusz Fritscher und komme aus der Nähe von
            Mainz. Neben meinem Hauptberuf als Anlagenmechaniker SHK und Vater
            von zwei kleinen Kindern lerne ich in meiner Freizeit Programmieren
            und setzte das gelernte in eigenen Projekten um. Mein Focus liegt
            dabei im Frontend.
          </p>

          <div class="about__cta">
            <button class="btn btn--full">contact me</button>
          </div>
        </div>
      </div>

      <div class="about__image__container">
        <img
          src="@/assets/img/florian-krumm-euZ2n8dGUcQ-unsplash.jpg"
          alt="Nicht Arkadiusz Fritscher"
          class="about__image"
        />
      </div>
    </article>

    <BaseSkills
      v-for="skill in skills"
      :key="skill.type"
      :headline="skill.headline"
      :type="skill.type"
      :info="skill.info"
      :list="skill.list"
    />
  </section>
</template>

<style scoped>
#about {
}

/* ABOUT */

.about > div {
  flex: 1 1 100%;
}

.about {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wrapper-gap-x) var(--wrapper-gap-y);
  margin-block-end: var(--section-space-80);
}

.about__headline {
  margin-block-end: var(--text-space-16);
  max-width: 34ch;
}

.about__body {
  margin-block-end: var(--text-space-8);
  max-inline-size: 55ch;
}

.about__cta {
  max-width: 40ch;
}

/* @media screen(tablet) { */
@media (min-width: 52.125em) {
  .about > div {
    flex: 1 1 calc(50% - var(--wrapper-gap-x));
  }

  .about {
    flex-direction: row-reverse;
  }

  [data-scroll='sticky'] {
    position: sticky;
    top: 5%;
    z-index: 1;
  }
}
</style>
