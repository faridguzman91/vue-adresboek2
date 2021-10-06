<template>
    <div class="container">
        <div class="card edit-view">
            <div class="card-header">
                <h2 class="pull-left">
                    <i aria-hidden="true" class="fa fa-address-card"></i>
                    nieuwe contacten toevoegen
                </h2> 
                <router-link  class="pull-right btn-out" to="/">terug naar home</router-link>                 
             </div> 
            <div class="card-block">
                <h2>nieuw contact gegevens toevoegen</h2>
                <form @submit.prevent="onSubmit()" novalidate>
                <div class="row">
                    <div class="col-md-6">

                        <div class="form-group" :class="{ 'has-error': errors.has('name') }">
                            <label for="first_name">naam<sup>*</sup>:</label>
                            <input  v-validate="'required'" v-model="name" class="form-control" id="first_name" name="name" type="text" tabindex="1" />

                                <div v-show="errors.has('name')" class="help-block">
                                    {{ errors.first('name') }}
                                </div>

                        </div>
                        <div class="form-group" :class="{ 'has-error': errors.has('email') }">
                            <label for="email">email<sup>*</sup>:</label>
                            <input v-validate="'required'" v-model="email" class="form-control" id="email" name="email" type="text" tabindex="3" />
                                <div v-show="errors.has('email')" class="help-block">
                                    {{ errors.first('email') }}
                                </div> 
                        </div>                                                
                    </div>
                    <div class="col-md-6">
                        <div class="form-group" :class="{ 'has-error': errors.has('title') }">
                            <label for="title">type<sup>*</sup>:</label>
                            <input v-validate="'required'" v-model="type" class="form-control" id="type" name="type" type="text" tabindex="2" />
                            <div v-show="errors.has('type')" class="help-block">
                                    {{ errors.first('type') }}
                            </div>  
                        </div>
                        <div class="form-group"  :class="{ 'has-error': errors.has('phone') }">
                            <label for="phone">telefoon<sup>*</sup>:</label>
                            <input v-validate="'required'" v-model="phone" class="form-control" id="phone" name="phone" type="text"  tabindex="4" />
                            <div v-show="errors.has('phone')" class="help-block">
                                    {{ errors.first('phone') }}
                            </div>
                        </div>                                                
                    </div>
                </div>
                



                <div class="row control-button">
                    <div class="col-md-12">
                        <button class="btn btn-secondary btn-orange" type="submit" :disabled='!isComplete'>Save</button>
                        <router-link  class="btn btn-secondary btn-gray" to="/">annuleren</router-link>
                    </div>    
                </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Details',
  data() {
        return {
           name:"",
           phone: "",
           email: "",
           type: ""
        }
  },
  methods: {
     onSubmit() {
         //event.preventDefault();
         let newUser = {
                id: this.$store.state.users.length + 1,
                name: this.name,
                phone: this.phone,
                email: this.email,
                title: this.type
         }

         //valideren en opslaan
         if(!this.validate()) {
            this.$store.dispatch("submitUser", newUser);
            this.$router.push('/');
         } else {
            alert('niet verzonden')
         }
     },

     //return fouten
    validate() {
      this.$validator.validateAll()
      return this.errors.any()
    }
  },

  //als alles complete is, return stored waarde
  computed: {
    isComplete () {
        return this.name && this.email && this.phone && this.type;
    }
  }
}
</script>

// <!-- css limiteren -->
<style scoped>
.has-error input {
    border: 1px solid red;
}
.has-error .help-block {
    color:red;
}
button.btn-orange {
    margin-right: 10px;
}
</style>