 <template>
  <div>
      <div class="mainsearchbox">
      <!-- <v-card
  >
    <v-toolbar
      dense
      floating
    >
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card> -->

    <input type="text" class="searchbox"  @input="sendInput"  v-model="search" placeholder="Search..."  />
   
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      search: ''
      //
    };
  },
  methods: {
    sendInput(){
      this.$store.commit("SET_INPUT", this.search)
    }
  },
    computed: {
    filteredItems: function() {
      return this.posts.filter(post => {
        return (
          post.Picture1.toLowerCase().match(this.search.toLowerCase()) ||
          post.Name.toLowerCase().match(this.search.toLowerCase())
        );
      });
    }
  }
};
</script>
<style scoped>
.searchbox {
  background-color:#88BBD6;
  color: black;
  width: 500px;
  height: 30px;
  margin-top: 30px;
  align-items: center;
  text-align:center;
  align-content: center
  

}

.mainsearchbox{
    align-items: center;
  text-align:center;
  align-content: center
}
</style>