<template>
  <form class="container" @submit.prevent="login">
      
      <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" name="email" type="email" placeholder="Email" v-model="email" >
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" name="password" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button type="submit" class="button is-success">
            Login
            </button>
        </p>
        </div>
  </form>
</template>

<script>
// import { Login } from "../models/Users";
// export default {
//     data(){
//         return {
//             email: '',
//             password: '',
//             error: ''
//         }
//     },
//     methods: {
//         login(){
//             try {
//                 Login(this.email, this.password);
//                 this.$router.push('/food');
//             } catch (error) {
//                 this.error = error;
//             }
//         }
//     }
// }

import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios.post('http://localhost:5000/users/login',
        {
          email: this.email,
          password: this.password
        }
      ).then((res) => {
        localStorage.setItem('usertoken', res.data)
        this.email = ''
        this.password = ''
        router.push({ name: 'Food' })
      }).catch((err) => {
        console.log(err)
      })
      this.emitMethod()
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>

<style>
</style>