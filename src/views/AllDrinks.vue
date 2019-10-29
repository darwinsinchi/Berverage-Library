<template>
  <div>
    <app-Header></app-Header>
    <app-searchbar></app-searchbar>
    <app-everydrinks></app-everydrinks>
    <app-Footer></app-Footer>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from "../components/Header.vue"
import Search from "../components/Search.vue"
import EveryDrink from "../components/EveryDrink.vue"
import Footer from "../components/Footer.vue"

export default {
  components: {
    "app-Header": Header,
    "app-Footer": Footer,
    "app-searchbar":Search,
    "app-everydrinks": EveryDrink
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
     ...mapState(['alldrinks', "input"]),
    filteredProducts() {
      return this.alldrinks.filter(prod => prod.Name.toLowerCase().match(this.input.toLowerCase())||prod.SubTitle.toLowerCase().match(this.input.toLowerCase()))
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