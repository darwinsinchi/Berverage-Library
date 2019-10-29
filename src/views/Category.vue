<template>
  <div>
    <app-Header></app-Header>
    <h3>Drinks by Category</h3>
    <app-Footer></app-Footer>
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