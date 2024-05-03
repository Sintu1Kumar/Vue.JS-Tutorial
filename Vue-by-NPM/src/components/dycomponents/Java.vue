<template>
  <h1>Java Page</h1>
  <button @click="tab = 'CorejavaPage'">Core Java</button>
  <button @click="tab = 'AdvjavaPage'">Advance Java</button>
  <component :is="tab" />
</template>

<script>
import AdvjavaPage from "./java/Advjava.vue";
import CorejavaPage from "./java/Corejava.vue";

export default {
  name: "Java",
  components: {
    AdvjavaPage,
    CorejavaPage,
  },
  data() {
    return {
      tab: "",
    };
  },
};
</script>
