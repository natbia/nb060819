import Vue from 'vue'
import Router from 'vue-router'

import Form from '@/components/Form'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
