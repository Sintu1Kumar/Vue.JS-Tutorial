<template>
  <h1>Form Modifiers</h1>
  <input type="text" v-model="data" />
  <h3>data id : {{ typeof data }}</h3>
</template>

<script>
export default {
  name: "Fmodifier",
  data() {
    return {
      data: "",
    };
  },
  methods: {},
};
</script>
