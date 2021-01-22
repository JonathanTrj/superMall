import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const ShopCart = () => import("../views/shopCart/ShopCart")
const Profile = () => import("../views/profile/Profile")

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopCart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
