<template>
  <footer>
    <TheContact />
    <ul class="text-caption">
      <li>
        <a href="mailto:fritscher.dev@gmail.com" class="link font-bold"
          >Arkadiusz Fritscher</a
        >
      </li>
      <li>
        <router-link to="/" class="link">email</router-link>
      </li>
      <li>
        <router-link to="/" class="link">twitter</router-link>
      </li>
      <li>
        <router-link to="/" class="link">codepen</router-link>
      </li>
      <li>
        <router-link to="/" class="link">github</router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  margin-top: var(--text-space-16);
  margin-bottom: var(--text-space-8);
  border-top: 1px solid currentColor;
  display: flex;
  flex-direction: column;
}

li {
  padding-block: var(--text-space-4);
  height: min-content;
}

.link {
  text-transform: uppercase;
}

@media (min-width: 415px) {
  ul {
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }

  li {
    padding-block-end: 0px;
  }

  li:not(:first-of-type) {
    flex: 1 1 100%;
    text-align: end;
  }

  li:nth-child(1),
  li:nth-child(2) {
    flex: 1 1 calc(50% - var(--text-space-8));
  }
}

@media (min-width: 600px) {
  ul {
    align-items: baseline;
  }

  li {
    flex: 1 1 0%;
    max-width: fit-content;
  }

  li:nth-child(2) {
    margin-inline-start: auto;
  }

  li:not(:first-child) > a {
    margin-inline: 0.5em;
  }

  li:last-of-type > a {
    padding-inline-end: 0;
  }
}
</style>
