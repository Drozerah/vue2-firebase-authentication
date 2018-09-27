<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <input type="text" v-model='email' placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button  v-on:click='signUp'>Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>

    import firebase from 'firebase'
    export default {
    name: 'signUp',
    data: function() {
      return {
          email:'',
          password:''
      }
    },
    methods: {
            signUp: function(){

                    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
                    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                        function (onResolve) {
                            // reset input fields
                            alert('Your account has been created !')

                        },
                        function (onReject) {
                            alert('Oops. ' + err.message) 
                        }
                    )

                }
            }         
    }
</script>

<style scoped>
  .signUp {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: auto;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>