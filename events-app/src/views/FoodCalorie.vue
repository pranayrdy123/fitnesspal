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
  <!-- <div class="entry" v-for="entry in entries" transition="fade">
    <input type="text" name="description-{{ entry.id }}" v-model="entry.description" class="long" v-on:keyup.enter="saveEntry">
    <input type="number" name="calories-{{ entry.id }}" v-model="entry.calories" class="short" v-on:keyup.enter="saveEntry">
    <input type="number" name="fat-{{ entry.id }}" v-model="entry.fat" class="short" v-on:keyup.enter="saveEntry">
    <input type="number" name="carbs-{{ entry.id }}" v-model="entry.carbs" class="short" v-on:keyup.enter="saveEntry">
    <input type="number" name="protein-{{ entry.id }}" v-model="entry.protein" class="short" v-on:keyup.enter="saveEntry">
    <button class="material-delete" v-on:click="removeEntry($index)">
      <i class="fa fa-plus"></i>
    </button>
  </div> -->
  <div class="totals">
    <div class="short">{{ food_name }}</div>
    <div class="short">{{ Calories }}</div>
    <div class="short">{{ fat }}</div>
    <div class="short">{{ carbs }}</div>
    <div class="short">{{ protein }}</div>
  </div>
  
</div>

</template>

