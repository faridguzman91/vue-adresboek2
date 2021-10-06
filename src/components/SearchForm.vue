<template>
    <div  class="col-lg-12 search-form">
        <h2>adresboek {{search}}</h2>
        <div  class="input-group">
            <input  class="form-control" v-model="search" placeholder="filtreren op naam" type="text" />
            <span  class="input-group-btn">
                <button @click="getSearchTerm"   class="btn btn-secondary" type="button">
                   zoeken
                </button>
            </span>
        </div>
    </div> 
</template>

<script>

//zoektermen

export default {
  name: 'SearchForm',
    data () {
        return {
          search: ""
        }
    },

    //zoekterm getter
    methods: {
        getSearchTerm() {
            this.$emit('searched', this.search)
            this.search = "";
        }
    },

    //computed zoektermen
    computed: {
        searchTerm() {
            return this.$emit('searched', this.search)
        }   
    }
}
</script>

// <!-- css limiteren aan deze component -->
<style scoped>

</style>