<template>
  <h1>{{ profile.charAt(0).toUpperCase() + profile.substr(1).toLowerCase() }}'s Profile Page</h1>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "Profile",
  data() {
    return {
      profile: "",
    };
  },
  mounted() {
    const route = useRoute();
    console.log("profile/", route.params.name);
    this.profile = route.params.name;
  },
};
</script>
