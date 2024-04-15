<template>
  <div id="child">
    <h1>{{ data.name }}</h1>
    <h1>{{ data.email }}</h1>
    <button v-on:click="getData(data.name)">Alert</button>
  </div>
</template>

<script>
export default {
  name: "Child2",
  props: {
    data: Object,
    getData: Function,
  },
};
</script>

<style>
#child {
  background-color: aquamarine;
  padding: 10px;
  border: 2px solid;
  margin-bottom: 15px;
}
</style>
