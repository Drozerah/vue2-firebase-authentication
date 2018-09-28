// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
const firebaseData = require("../config/fire-base-config.js");

Vue.config.productionTip = false

// init firebase
firebase.initializeApp(firebaseData.config);

// handle page reloads
let app
firebase.auth().onAuthStateChanged(function(user) {

    if (!app) {

        /* eslint-disable no-new */
        // init app
        app = new Vue({
            el: '#app',
            router,
            components: { App },
            template: '<App/>'
        })
    }
});
