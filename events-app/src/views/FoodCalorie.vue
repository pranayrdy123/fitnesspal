<template>
    

<div id="app">
  <h1 class="title"><i class="fa fa-heartbeat"></i> Food Calorie Counter</h1>
  <div class="entry header">
    <div class="short">Food Name</div>
    <div class="short">Calories</div>
    <div class="short">Fat</div>
    <div class="short">Carbs</div>
    <div class="short">Protein</div>
  </div>
 <div>
   <h1>----------------------</h1>
 </div>
  <div class="totals">
    <div class="short">{{ food_name }}</div>
    <div class="short">{{ calories }}</div>
    <div class="short">{{ fat }}</div>
    <div class="short">{{ carbs }}</div>
    <div class="short">{{ protien }}</div>
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
      food_name: decoded.food_name,
      calories: decoded.calories,
      fat: decoded.fat,
      carbs: decoded.carbs,
      protien: decoded.protien, 
    }
  }
}

</script>

