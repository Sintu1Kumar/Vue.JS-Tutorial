<template>
  <div class="m-2">
    <router-link class="ms-4 text-decoration-none" to="/">Home</router-link>
    <router-link class="ms-4 text-decoration-none" to="/about"
      >About</router-link
    >
    <router-link class="ms-4 text-decoration-none" to="/contact"
      >Contact</router-link
    >
    <router-link class="ms-4 text-decoration-none" to="/services"
      >Services</router-link
    >
    <router-link class="ms-4 text-decoration-none" to="/profile/sintu"
      >Sintu Profile</router-link
    >
    <router-link class="ms-4 text-decoration-none" to="/profile/mohan"
      >Mohan Profile</router-link
    >
  </div>

  <router-view class="text-center mt-3"></router-view>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
