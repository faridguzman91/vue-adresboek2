<template>
    <div class="container">
        <div class="card detail-view">
            <div class="card-header">
                <h2 class="pull-left">
                    <i aria-hidden="true" class="fa fa-address-card"></i>
                    contact gegevens
                </h2> 
                <router-link  class="pull-right btn-out" to="/">terug naar home</router-link>                 
            </div> 
            <div class="card-block">
                <h2>bekijk contact details </h2>
  
            <table class="table table-bordered">
                <tbody>
                    </tbody><thead>
                      <tr>
                          <th>contact informatie</th>
                          <th></th>
                      </tr>    
                    </thead>    
                    <tbody>
                    <tr v-for="user in userDetails" :key="user.id">
                        <td>naam: {{user.name}}</td>
                        <td>telefoon: {{user.phone}}</td>
                    </tr>
                    <tr v-for="user in userDetails" :key="user.id + 1">
                        <td>email: {{user.email}}</td>
                        <td>type: {{user.type}}</td>
                    </tr>
                </tbody>
                </table>

                <div class="row control-button">
                    <div class="col-md-12">
                        <router-link  class="btn btn-secondary btn-orange" to="/">bekijk alle contacten</router-link>
                    </div>    
                </div>

            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Details',
  data() {
        return {
          userId: this.$route.params.id,
          isloading: true,
        }
  },
  created() {
       this.$store.dispatch("getUserDetails", this.userId);
  },
  computed: {
        userDetails() {
         return this.$store.state.userDeatils;
       }
  }
}
</script>

// <!-- css limiteren -->
<style scoped>

</style>
