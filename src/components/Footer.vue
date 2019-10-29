 <template>
<!-- <div id="app">
  <v-app id="inspire"> -->
    <v-bottom-navigation
      v-model="bottomNav"
      fixed
    >
      
  
      <v-btn class="home">
          <span>Home</span> 
         <router-link to="/" ><img src="https://img.icons8.com/ultraviolet/40/000000/cocktail.png" alt=""></router-link>
       
      
      </v-btn>
  
    </v-bottom-navigation>
  <!-- </v-app>
</div> -->

<!-- <div>
    <h1>Home Button</h1>
</div> -->
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
 bottomNav: 'recent',
    
    };
  }
};
</script>
<style scoped>
h1 {
  color: white;
  text-align: center;
  background-color: green;
  padding: 20px;
  font-family: cursive;

}

.home{
    margin-top: 10px
}


</style>

