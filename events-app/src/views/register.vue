<template>
  <div class="wholething">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">
              Have an account?
            </router-link>
          </p>
          <ul v-if="errors" class="error-messages">
            <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="username"
                placeholder="Username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="button is-link">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

// <script>
// import { mapState } from "vuex";
// import { REGISTER } from "@/store/actions.type";

// export default {
//   name: "Register",
//   data() {
//     return {
//       username: "",
//       email: "",
//       password: ""
//     };
//   },
//   computed: {
//     ...mapState({
//       errors: state => state.auth.errors
//     })
//   },
//   methods: {
//     onSubmit() {
//       this.$store
//         .dispatch(register, {
//           email: this.email,
//           password: this.password,
//           username: this.username
//         })
//         .then(() => this.$router.push({ name: "home" }));
//     }
//   }
// };
// </script>
<style>
.wholething{
  font-size: 300%;
     margin-top: 50px;
    margin-left: 150px;
    margin-Right: 150px;
    margin-right: 150px;
}

</style>