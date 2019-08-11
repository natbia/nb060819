import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Form from '@/components/Form'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})