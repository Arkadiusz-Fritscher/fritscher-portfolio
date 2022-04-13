<script>
export default {};
</script>

<template>
  <section id="about">
    <article class="callout">
      <h2 class="text-callout">
        My goal is to work as a full-time Frontend developer on exciting
        projects and learn new things.
      </h2>
    </article>
    <article class="about flex flex-wrap">
      <div class="about__headline">
        <h3 class="text-h1">Was lange nur ein Traum war</h3>
      </div>
      <div class="about__image">
        <img src="@/assets/img/florian-krumm-euZ2n8dGUcQ-unsplash.jpg" alt="" />
      </div>
      <div class="about__text">
        <p class="text-body text-lighter">
          Hi, ich bin der Arkadiusz Fritscher und komme aus der Nähe von Mainz.
          Neben meinem Hauptberuf als Anlagenmechaniker SHK und Vater von zwei
          kleinen Kindern lerne ich in meiner Freizeit Programmieren und setzte
          das gelernte in eigenen Projekten um. Mein Focus liegt dabei im
          Frontend und besonders im UI.
        </p>
      </div>

      <div class="about__cta">
        <button>contact me</button>
      </div>
    </article>
  </section>
</template>

<style scoped>
#about {
  margin-block-start: clamp(9rem, 6.209rem + 11.909vw, 20.5rem);
  margin-block-end: clamp(9rem, 6.209rem + 11.909vw, 20.5rem);
}

.callout {
  display: flex;
  justify-content: center;
  padding-inline: clamp(0.5rem, -1.229rem + 7.379vw, 7.625rem);
  margin-block-end: clamp(6rem, 3.209rem + 11.909vw, 17.5rem);
}

.about {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

@media screen(tablet) {
  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto) 1fr;
    gap: 24px 57px;
    grid-template-areas:
      'image title'
      'image text'
      'image cta';
  }

  .about__title {
    grid-area: title;
  }
  .about__text {
    grid-area: text;
  }
  .about__image {
    grid-area: image;
  }
  .about__cta {
    grid-area: cta;
  }
}
</style>
