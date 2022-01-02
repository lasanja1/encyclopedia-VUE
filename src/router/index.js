import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import ErrorPage from '../views/ErrorPage.vue'
import CharacterDetails from '../views/CharacterDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting, for lazy rout loading
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  
  },
  {
    path: '/search/character/:id',
    name: 'CharacterDetails',
    component: CharacterDetails,
    // so we can accept any route parameters as props
    props: true
  },
  //redirect
  {
    path: '/all-characters',
    redirect: '/'
  },
  // catch all 404 not found
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: ErrorPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return {left: 0, top: 0}
  },
})

export default router
