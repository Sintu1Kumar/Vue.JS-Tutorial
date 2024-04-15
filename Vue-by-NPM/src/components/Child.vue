<template>
  <h1>{{ name }}</h1>
  <h2>Name is :- {{ user.name }}! and Email ID is :- {{ user.email }}</h2>
  <button v-on:click="getdata()">Function Called</button>
</template>

<script>
export default {
  name: "Child",
  props: {
    name: String,
    user: Object,
    getdata: Function,
  },
};
</script>
