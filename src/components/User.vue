<template>
<tbody>
    <template v-if="users.length != 0">
        <tr v-for="user in users" :key="user.id">
            <td>{{user.name}}</td>
            <td>{{user.phone}}</td>
            <td>{{user.email}}</td>
            <td>

            <!-- actie knoppen-->

            <!-- router links -->
                <router-link  class="btn-orange" :to="`/details/${user.id}`">bekijk</router-link>
                <router-link class="btn-gray"  :to="`/edit/${user.id}`">bewerk</router-link>
                <a class="btn-gray" @click="removeUser(user.id)">verwijderen</a>
            </td>
        </tr>
    </template>
    <!-- als geen gebruikers gevonden worden -->
    <template v-else>
        <tr>
            <td colspan="4">
                geen gebruikers gevonden
            </td>
        </tr>
    </template>    
</tbody>
</template>

<script>

export default {
  name: 'User',
  props: ['users'],
  methods: {
      removeUser(id){
          this.$store.dispatch("removeUser", id);
      }
  }
}
</script>

// <!-- css limiteren -->
<style scoped>

</style>