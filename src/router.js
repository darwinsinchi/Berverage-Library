import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "./views/About.vue"
import AllDrinks from "./views/AllDrinks.vue"
import Category from "./views/Category.vue"
import Individual from "./views/Individual.vue"
import Cocktail from "./views/Cocktail.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/About",
      name: "About",
      component: About
    }
    ,
    {
      path: "/AllDrinks",
      name: "AllDrinks",
      component: AllDrinks
    }
    ,
    {
      path: "/Category",
      name: "Category",
      component: Category
    }
    ,
    {
      path: "/Individual/:idDrink",
      props: true,
      name: "Individual",
      component: Individual
    },
    {
      path: "/Cocktail",
      props: true,
      name: "Cocktail",
      component: Cocktail
    }
  ]
})
