<template>
  <h1>Counter with condition</h1>
  <h1>{{ count }}</h1>
  <button v-on:click="count = count + 1">+</button>
  <button v-on:click="count = count - 1">-</button>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(val, prev) {
      if (val > 5 && val > prev) {
        alert("Count is greater than 5");
      }
    },
  },
};
</script>
