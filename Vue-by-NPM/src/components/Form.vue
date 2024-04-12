<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="border p-4 rounded-3 bg-light shadow">
      <form v-on:submit.prevent="getData()">
        <h1 class="text-center">Signin User</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="check" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      email: "",
      password: "",
      check: "",
    };
  },
  methods: {
    getData() {
      console.log(this.email);
      console.log(this.password);
      console.log(this.check);
    },
  },
};
</script>
