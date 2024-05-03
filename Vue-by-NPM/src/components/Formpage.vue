<template>
  <h1>Simple Form</h1>
  <form action="">
    <label for="email">Email : </label>
    <input type="text" placeholder="Enter Email" v-model="form.email" />
    <br /><br />

    <label for="password">Password : </label>
    <input
      type="password"
      placeholder="Enter Password"
      v-model="form.password"
    />
    <br /><br />

    <select v-model="form.country">
      <option value="India">India</option>
      <option value="Pok">Pok</option>
      <option value="Japan">Japan</option>
    </select>
    <br /><br />

    <h2>Technology</h2>
    <label for="Html">Html</label>
    <input type="checkbox" value="Html" v-model="form.technology" /><br />
    <label for="Css">Css</label>
    <input type="checkbox" value="Css" v-model="form.technology" /><br />
    <label for="Java">Java</label>
    <input type="checkbox" value="Java" v-model="form.technology" />

    <h2>Gender</h2>
    <label for="male">Male</label>
    <input
      type="radio"
      name="gender"
      id="male"
      value="male"
      v-model="form.gender"
    />
    <label for="female">Female</label>
    <input
      type="radio"
      name="gender"
      id="female"
      value="female"
      v-model="form.gender"
    />
    <label for="other">Others</label>
    <input
      type="radio"
      name="gender"
      id="other"
      value="other"
      v-model="form.gender"
    />
    <br /><br />

    <button v-on:click="login" type="button">Login</button>
  </form>

  {{ form }}
</template>

<script>
export default {
  name: "Formpage",
  data() {
    return {
      form: {
        email: "",
        password: "",
        country: "",
        technology: [],
        gender: "",
      },
      error: [],
    };
  },
  methods: {
    login() {
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
        }
      }
      if (this.error.length === 0) {
        alert("Data Submitted Successfully");
      }
      console.warn(this.form, this.error);
    },
  },
};
</script>
