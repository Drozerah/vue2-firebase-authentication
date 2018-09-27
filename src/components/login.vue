<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"><br />
        <input type="password" v-model="password" placeholder="password"><br />
        <button @click='SignIn'>Connection</button>      
        <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
    </div>

</template>

<script>
    import firebase from 'firebase'   
    export default {
        name: 'login',
        data: function () {
            return {
               email: '',
               password: '' 
            }
        },
        methods: {
            login: function () {
                this.$router.replace('hello')
            },
            SignIn: function (){
                // pass in 'this' to firebase.auth()
                const self = this          
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    function (onResolve) {
                        alert('Well done ! You are now connected')
                    },
                    function (error) {
                        alert('Oops. ' + error.message)
                        // reset placeholders
                        self.email = ''
                        self.password = ''
                    }
                )
            }
        }
    }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: auto;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>