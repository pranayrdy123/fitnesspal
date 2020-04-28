<template>
     <form  action="/bmiCalculator" method="post">
     <!-- <form class="container" @submit.prevent="bmicalculator"> -->
    <input type="number" name="weight" placeholder="Your Weight, kg">&nbsp;
    <input type="number" name="height" step="0.01" placeholder="Your Height, m">&nbsp;
    <button type="submit">Calculate BMI</button>
  </form>
</template>