<template>
    <section>
        
        <b-field grouped group-multiline>
          
        </b-field>
        <p class="content"><b>Selected:</b> {{ exercise_name }}</p>
        <b-field label="Find a name">
            <b-autocomplete
                v-model="exercise_name"
                placeholder="e.g. Anne"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="data"
                field="user.first_name"
                @select="decoded => selected = decoded">
            </b-autocomplete>
        </b-field>
    </section>


   
</template>



<script>
 

    import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
    
 import jwtDecode from 'jwt-decode'
export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      exercise_name: decoded.exercise_name,
    
      
    }

  },

   

   

}
</script>

