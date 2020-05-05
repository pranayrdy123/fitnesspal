import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
//import bmiCalculator from '../views/bmiCalculator.html';

// const express= require(express);
// const app=express();
// app.listen(3000, () => Console.log('im listening'));


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/Food',
      name: 'Food',
      component: () => import('../views/Food.vue')
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/Exercise',
      name: 'Exercise',
      component: () => import('../views/Exercise.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/Calculator',
      name: 'Calculator',
      component: () => import('../components/Calculator.vue')
    },
    //{ path: '/bmiCalculator', name: 'bmiCalculator', component: bmiCalculator },
    
    
    { path: '/login', name: 'Login', component: Login },
    
  ]  
  
});