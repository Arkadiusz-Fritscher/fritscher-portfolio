<script>
export default {
  name: 'TheNavbar',
};
</script>

<template>
  <nav class="flex items-center justify-between bg-white pt-8 pb-6">
    <!-- Logo -->
    <div class="logo">
      <router-link to="/">Fritscher</router-link>
    </div>

    <!-- Mobile menu button -->
    <div class="sm:hidden">icon</div>

    <!-- Tablet and desktop menu -->
    <ul class="hidden space-x-10 sm:flex sm:items-center">
      <li>
        <router-link :to="{ path: '/', hash: '#work' }" class="link"
          >Work</router-link
        >
      </li>
      <li>
        <router-link :to="{ path: '/', hash: '#about' }" class="link"
          >About</router-link
        >
      </li>
      <li>
        <router-link :to="{ path: '/', hash: '#contact' }" class="link"
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.logo {
  font-size: clamp(1.25rem, 1.189rem + 0.259vw, 1.5rem);
  font-weight: 600;
}

.link {
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--text-caption);
}
</style>
