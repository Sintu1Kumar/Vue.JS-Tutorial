<template>
  <h1>Pass Data to child component</h1>
  <Child name="Sintu Kumar" :user="user" :getdata="getdata" />
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "Parent",
  components: {
    Child,
  },
  data() {
    return {
      user: { name: "Sintu Kumar", email: "kumar@gmail.com" },
    };
  },
  methods: {
    getdata() {
      console.log("receive data");
      alert("Function Data");
    },
  },
};
</script>
