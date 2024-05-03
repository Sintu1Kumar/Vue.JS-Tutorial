<template>
  <header>
    <slot name="header"></slot>
  </header>
</template>

<script>
export default {
  name: "Slotchild",
  props: {
    data: String,
  },
};
</script>
