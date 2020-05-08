<template>

    <div class="basic">
      <form class="container" @submit.prevent="search">
    
      
        <div class="field has-addons">
          
  <div class="control">
   
    <input class="input" type="text" name="food_name" placeholder="Find a Food" v-model="food_name">
  </div>
  <div class="control">
    <button class="button is-info" type="submit">
      Search
    </button>
  </div>
</div>
</form>

        <h1 class="info is-l">
           Food Analysis
        </h1>
        <p>
Understand how the food you’re eating contributes to your daily calories, macronutrients, and micronutrients.
        </p>

        <figure class="image is-sm">
  <img src="https://www.101fitness.org/wp-content/uploads/2017/03/shutterstock_540997561.jpg">
</figure>
 
    </div>



    
</template>
<style scoped>
.basic{
    
    margin: 250px;
    margin-top: 0%;
}
</style>

<script>

import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'
export default {
  data () {
    return {
      food_name: ''
    }
  },
  methods: {
    search() {
      axios.post('http://localhost:5000/foods/search',
        {
          food_name: this.food_name
        }
      ).then((res) => {
        localStorage.setItem('usertoken', res.data)
        this.food_name = ''
        router.push({ name: 'FoodCalorie' })
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