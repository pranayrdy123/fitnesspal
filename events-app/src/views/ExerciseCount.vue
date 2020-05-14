
<template>
    

   



<div id="app">
  
  <h1 class="title"><i class="fa fa-heartbeat"></i> Number of Calories burst doing the exercise per hour. </h1>
  <div class="entry header">
    <div class="short">Exercise Name</div>
    <div class="short">Calories Burnt</div>
   
  </div>
 <div>
   <h1>----------------------</h1>
 </div>
  <div class="totals">
    <div class="short">{{ exercise_name }}</div>
    <div class="short">{{ calories_burnt }}</div>
   
  </div>
  
</div>

</template>

<script>
  import jwtDecode from 'jwt-decode'
export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      exercise_name: decoded.exercise_name,
      calories_burnt: decoded.calories_burnt,
      
    }
  }
}

</script>

