<template>
  <div>
    <app-Header></app-Header>
    <!-- <h2>{{getItem.strDrink}}</h2> -->
    <!-- <div class="singleItem"  v-if="getItem"> -->
         <div class="drinkflex1" v-for="drink in singlecocktail" v-bind:key="drink">
            <h1>{{drink.strDrink}}</h1>
     <img class="picture" v-bind:src="drink.strDrinkThumb" alt="Main Picture" />
        <div class="sections">
            <h2>Type of Glass</h2>
            <h3>{{drink.strGlass}}</h3>
        </div>
         <div class="sections">
            <h2>Instructions</h2>
            <h3>{{drink.strInstructions}}</h3>
        </div>
         <div class="sections2">
            <h2>Ingredients</h2>
            <h3>{{drink.strIngredient1}}-{{drink.strMeasure1}}</h3>
             <h3>{{drink.strIngredient2}}-{{drink.strMeasure2}}</h3>
            <h3>{{drink.strIngredient3}}-{{drink.strMeasure3}}</h3>
               <h3>{{drink.strIngredient4}}-{{drink.strMeasure4}}</h3>
        </div>
        
        <!-- <h3>Drink Category: {{getItem.strCategory}}</h3>
        <h3>Glass Type: {{getItem.strGlass}} </h3>
        <h3>How to Prepare: {{getItem.strInstructions}}</h3>
        <h3>Ingredients: {{getItem.Measure1}} {{getItem.strIngredient1}}, {{getItem.Measure2}} {{getItem.strIngredient2}}, {{getItem.Measure3}}  {{getItem.strIngredient3}} </h3> -->
    </div>
    <app-Footer></app-Footer>
  </div>
</template>

<script>
import Header from "../components/Header"
import {mapState} from 'vuex'

import Footer from "../components/Footer"

// import {mapState} from 'vuex'

export default {
   props:["idDrink"],
  components: {
    "app-Header": Header,
    "app-Footer": Footer
  },
  methods:
  {
      loaddrinks(idDrink)
      {this.$store.dispatch("loaddrinks", idDrink)}
  },
  computed:{

      singlecocktail(){return this.$store.state.drinks},
    //    ...mapState(['drinks']),
    //   getItem () {
   
    //   for (var i = 0; i < this.drinks.length; i++) {
    //     if (this.drinks[i].idDrinks === this.idDrink) {
          
          
    //      return this.drinks[i]
    //     }
    //   }
      
      
//       getItem () {
       
//       for (var i = 0; i < this.$store.state.drinks.length; i++) {
//         if (this.$store.state.drinks[i].idDrink === this.$route.params.idDrink) {
// // you can also use the following for the second part of the comparison this.idDrink
          
//          return this.$store.state.drinks[i]
//         }
//       }
        
//     },

  },
  created (){
      this.loaddrinks(this.idDrink)
  }
};
</script>
<style scoped>

.picture{
  width:350px;
  height: 250px;
  object-fit: contain;
  margin-top: 15px
}

.homepage {
  display: flex;
  flex-direction: column;
   align-items: center;
   text-align: center

}

.drinkflex1{
   
    
    text-align: center
}

h1, .sections{
    margin-top: 20px
}

.sections2{
    margin-top: 20px;
    margin-bottom: 130px
}




</style>