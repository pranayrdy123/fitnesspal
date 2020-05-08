  <template>
  
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
      </template>

    <style scoped>
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
          