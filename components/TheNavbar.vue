<script>
export default {
  name: 'TheNavbar',
};
</script>

<template>
  <nav class="mb-xl flex items-center justify-between py-sm">
    <!-- Logo -->
    <div class="text-caption font-semibold">
      <router-link to="/">Arkadiusz Fritscher</router-link>
    </div>

    <!-- Mobile menu button -->
    <div class="sm:hidden">icon</div>

    <!-- Tablet and desktop menu -->
    <ul class="hidden text-caption font-semibold sm:flex">
      <li>
        <router-link :to="{ path: '/', hash: '#work' }" class="nav__link"
          >Work</router-link
        >
      </li>
      <li>
        <router-link :to="{ path: '/', hash: '#about' }" class="nav__link"
          >About</router-link
        >
      </li>
      <li>
        <router-link :to="{ path: '/', hash: '#contact' }" class="nav__link"
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav__link {
  padding-inline: 0.5rem;
  text-transform: uppercase;
}
</style>
