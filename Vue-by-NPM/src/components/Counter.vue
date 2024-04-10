<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    counterHundler() {
      this.count += 1;
    },
  },
};
</script>

<template>
  <div id="main">
    <div id="submain">
      <h1>Welcome to Counter App</h1>
      <h2>Count:- {{ count }}</h2>
      <button v-on:click="counterHundler()">Counter</button>
    </div>
  </div>
</template>

<style>
#main {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
#submain {
  height: 20rem;
  width: 30rem;
  text-align: center;
  align-content: center;
  border: 2px dotted red;
  background-color: aqua;
  border-radius: 15px;
}
h1 {
  text-align: center;
  color: blue;
}
button {
  padding: 5px;
  border-radius: 5px;
  background-color: blueviolet;
  color: white;
}
</style>
