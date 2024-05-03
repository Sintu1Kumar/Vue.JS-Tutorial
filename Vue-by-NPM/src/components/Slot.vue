<template>
  <h1>Slots in vue js</h1>
  <Slotchild>
    <template v-slot:header>
      <h3>Sintu Kumar</h3>
      <a
        href="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
        >Click me</a
      ><br />
      <br />
      <img
        src="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
        alt="img"
      />
    </template>
  </Slotchild>
  <!-- <Slotchild><a href="#">Click me</a></Slotchild
  ><br />
  <Slotchild
    ><img
      src="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
      alt="img"
  /></Slotchild> -->
</template>

<script>
import Slotchild from "./Slotchild.vue";
export default {
  name: "Slot",
  components: {
    Slotchild,
  },
};
</script>
