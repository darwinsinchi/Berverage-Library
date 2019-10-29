import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    drinks: [],
    drinks2: [],
    input: ""
  },
  actions: {
    loaddrinks({ commit }, idDrink) {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then(data => {
          console.log(data.data)
          let drinks = data.data.drinks
          commit('SET_DRINKS', drinks)
        })
        .catch(error => {
          console.log(error)
        })
    },
    alldrinks({ commit }) {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then(data => {
          console.log(data.data)
          let drinks2 = data.data.drinks
          commit('SET_ALLDRINKS', drinks2)
        })
        .catch(error => {
          console.log(error)
        })
    },

  },

  mutations: {
    SET_DRINKS(state, drinks) {

      //need to change data for the below
      state.drinks = drinks

    },
    SET_ALLDRINKS(state, drinks2) {
      console.log(drinks2);
      //need to change data for the below
      state.drinks2 = drinks2
      console.log(state.drinks2)
    },
    SET_INPUT(state, data) {
      state.input = data
    },
  },
})
