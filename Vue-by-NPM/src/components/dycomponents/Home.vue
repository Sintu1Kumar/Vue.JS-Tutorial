<template>
  <h1>Home Page</h1>
  <button @click="tab = 'Javapage'">Load Java</button>
  <button @click="tab = 'Phppage'">Load Php</button>
  <button @click="tab = 'Csspage'">Load Css</button>
  <component :is="tab" />
</template>

<script>
import Phppage from "./Php.vue";
import Javapage from "./Java.vue";
import Csspage from "./Css.vue";

export default {
  name: "Home",
  components: {
    Phppage,
    Javapage,
    Csspage,
  },
  data() {
    return {
      tab: "",
    };
  },
};
</script>
