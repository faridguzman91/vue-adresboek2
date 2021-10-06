<template>
            <div class="col-lg-12 letter-control">
               <ul>
                  <li>
                      <a @click="onFilter('All')">All</a>
                  </li> 
                  <li v-for="(term, i) in filterTerm" :key="i">
                      <a @click="onFilter(term)">{{term.toUpperCase()}}</a>
                  </li>
               </ul>   
            </div>
</template>

<script>

//filteren op alphabet

export default {
    name: 'FilterTerm',
    data () {
        return {
            filterTerm: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        }
    },

    //emit waarde
    methods: {
        onFilter(value) {
            this.$emit('filter', value)
        }
    }
}
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>