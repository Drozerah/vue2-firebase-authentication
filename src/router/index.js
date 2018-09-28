import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*', // catch every paths that does not exist then   
      redirect: '/login', // redirect to the login path  
    },
    {
      path: '/', // catch the root path then   
      redirect: '/login', // redirect to the login path  
    },
    {
      path: '/login', // set the URL where the user to log in
      name: 'Login', // use this name as a shortcut in links
      component: Login // load the Hello component
    },
    {
      path: '/sign-up', // set the URL where the user to sign up
      name: 'SignUp', // use this name as a shortcut in links
      component: SignUp // load the SignUp component
    },
    {
      path: '/hello', // set the URL the user will visit if logged in
      name: 'Hello', // use this name as a shortcut in links
      component: Hello, // load the Hello component
      meta: {
        requiresAuth: true // meta field
      }
    }
  ]
})

export default router
