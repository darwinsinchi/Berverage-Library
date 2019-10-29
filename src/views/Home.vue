<template>
  <div>
  <v-app>
    <app-Header></app-Header>
  <div class="homepage">
    <div class="drinks">
       <router-link to="/AllDrinks"><img class="picture" src="https://static.hussle.com/community/images/750x385/c1488398188.png" alt="All Drinks" /></router-link>
      <h3 class="title">All Drinks</h3>
    </div>
      
      <div class="drinks">
      <router-link to="/About"><img class="picture" src="https://static.vinepair.com/wp-content/uploads/2019/01/noproof_mobil.jpg" alt="All Drinks" /></router-link>
       <h3 class="title">About US</h3>
    </div>
  </div>
    <app-Footer></app-Footer>
    </v-app>
  </div>
   
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
  components: {
    "app-Header": Header,
    "app-Footer": Footer
  },
};
</script>
<style scoped>
/* h1 {
  color: white;
  text-align: center;
  background-color: rgb(64, 206, 123);
  padding: 20px;
} */

.picture{
  width:350px;
  height: 250px;
  object-fit: contain
}

.homepage {
  display: flex;
  flex-direction: column;
   align-items: center;
   text-align: center

}
/* .drinks{
  margin-top: 5px
} */
/* 
.title{
  margin-bottom: 30px;

} */




</style>