<template>

    <div class="basic">
        <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Fist Name</td>
            <td>{{first_name}}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{{last_name}}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{email}}</td>
          </tr>
        </tbody>
      </table>
        <div class="field has-addons">
  <div class="control">
    <input class="input" type="text" placeholder="Find a Food">
  </div>
  <div class="control">
    <a class="button is-info">
      Search
    </a>
  </div>
</div>
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
import jwtDecode from 'jwt-decode'
export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    }
  }
}
</script>