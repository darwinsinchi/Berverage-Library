<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Home from "./views/Home"
import About from "./views/About"
import AllDrinks from "./views/AllDrinks"
import Category from "./views/Category"
import Individual from "./views/Individual"
export default {
  name: 'App',
  components: {
    "app-Home": Home
  },
  data: () => ({
    //
  }),
};
</script>
