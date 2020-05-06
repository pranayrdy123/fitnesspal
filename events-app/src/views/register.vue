<template>
  <div class="wholething">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'Login' }">
              Have an account?
            </router-link>
          </p>
          <!-- <ul v-if="errors" class="error-messages">
            <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
          </ul> -->
          <form @submit.prevent="register">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="first_name"
                placeholder="FirstName"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="last_name"
                placeholder="LastName"
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

 <script>
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
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      axios.post('http://localhost:5000/users/register',
        {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        }
      ).then((res) => {
        router.push({ name: 'Login' })
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}

</script>
<style>
.wholething{
  font-size: 300%;
     margin-top: 50px;
    margin-left: 150px;
    margin-Right: 150px;
    margin-right: 150px;
}

</style>