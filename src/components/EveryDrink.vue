<template>
  <div>
   
    <h2>All Drinks</h2>
    <div class="drinks1">
    <div class="drinks2" v-for="(drink,i) in filtereddrinks" :key="i">
        <router-link v-bind:to="'/Individual/'+ drink.idDrink">
      <img class="picture" v-bind:src="drink.strDrinkThumb" alt="Main Picture" /></router-link>
          <span class="description">{{drink.strDrink}}</span>
        </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  components: {

  },
  created(){

  },
//   methods:{
//       loaddrinks(){
//           this.$store.dispatch("loaddrinks")
//       }
//   },
//  ...mapState(['drinks', "input"]),
    computed:{
     ...mapState(['drinks2', "input"]),
    filtereddrinks() {
      return this.drinks2.filter(prod => prod.strDrink.toLowerCase().match(this.input.toLowerCase()))
    }
    },
    // created () {
    //     this.$store.dispatch("loaddrinks")
    // }

};

</script>
<style scoped>

.drinks1 {
 display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
}

.drinks2{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 310px;
  border-style: groove;
  border-width: 5px;
  border-color:  #CDCDCD;
  margin-top: 20px;
  border-radius: 20px;
  align-items: center
}


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

h2{
    text-align: center
}
.drinks{
  margin-top: 5px
} 





</style>