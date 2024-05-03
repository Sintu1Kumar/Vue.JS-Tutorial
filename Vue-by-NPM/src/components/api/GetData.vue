<template>
  <h1 class="text-center">Get Api Data in vue js</h1>
  <!-- <p v-for="item in list" :key="item">
    {{ item.id }}. {{ item.first_name }} {{ item.last_name }}, {{ item.email }}
  </p> -->

  <ul id="item" v-for="item in list" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.first_name + " " + item.last_name }}</li>
    <li>{{ item.email }}</li>
    <li><img height="100px" :src="item.avatar" :alt="item.id" /></li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "GetData",
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.log("Api data", result.data.data);
    this.list = result.data.data;
  },
};
</script>

<style>
#item {
  display: flex;
}
#item li {
  display: inline-block;
  width: 15%;
  margin: auto 5px;
  border: 1px solid;
  text-align: center;
  padding: 5px;
}
</style>
