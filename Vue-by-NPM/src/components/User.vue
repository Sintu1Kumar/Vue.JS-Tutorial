<template>
  <h1>Reuse Component</h1>
  <ul>
    <li v-for="item in users" :key="item.name">
      <Child2 :data="item" :getData="getData" />
    </li>
  </ul>
</template>

<script>
import Child2 from "./Child2.vue";

export default {
  name: "User",
  components: {
    Child2,
  },
  methods: {
    getData(name) {
      alert(name);
    },
  },
  data() {
    return {
      users: [
        { name: "sintu Kumar", email: "sintu123@gmail.com" },
        { name: "mohan Kumar", email: "mohan123@gmail.com" },
        { name: "sohan Kumar", email: "sohan123@gmail.com" },
      ],
    };
  },
};
</script>
