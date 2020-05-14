 <template>

        
    
     <div class="field-me has-addons">

       
       
       <form class="container" @submit.prevent="search">
  <div class="control">

    
    
    <p>Search an exercise from our database by name</p>
    <input class="input" type="text" placeholder="Find an Exercise" v-model="exercise_name">
  </div>
  <div class="control">
    <button class="button is-info">
      Search
    </button>
  </div>
     <div>
     </div>

<div>
  <!-- <div class="select is-rounded">
  <select>
    <option>or select from here</option>
    <option>Swimming</option>
    <option>yoga</option>
    <option>running</option>
    <option>squats</option>
    <option>Swimming</option>
  </select>
</div> -->
<div>
<figure class="image is-sm">
  <img src="https://images-na.ssl-images-amazon.com/images/I/81KjDc1kVAL._AC_SL1500_.jpg">
</figure>
</div>
</div>
</form>
</div>
</template>
<style scoped>
.field-me{
  align-content: center;
}
</style>
<script>


import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'
export default {
  data () {
    return {
      exercise_name: ''
    }
  },
  methods: {
    search() {
      axios.post('http://localhost:5000/exercises/search',
        {
          exercise_name: this.exercise_name
        }
      ).then((res) => {
        localStorage.setItem('usertoken', res.data)
        this.exercise_name = ''
        router.push({ name: 'NewExercise' })
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
