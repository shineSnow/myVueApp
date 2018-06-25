import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    addIncrement (state, payload) {
      state.count += payload.n
    },
    deIncrement (state, payload) {
      state.count -= payload.de
    }
  },
  getters: {
    filterCount (state) {
      return state.count >= 115
        ? 115
        : state.count
    }
  },
  actions: {
    addAction ({commit, dispatch}) {
      setTimeout(() => {
        commit('addIncrement', {n: 5})
        dispatch('testAction', {test: '我被触发了'})
      }, 1000)
    },
<<<<<<< HEAD
    testAction (tex, obj) {
      console.log(tex, obj)
=======
    actions: {
        addAction({commit, dispatch}) {
            setTimeout(() =>{
                commit('addIncrement',{n:15})
                dispatch('testAction', {test:'我被触发了'})
            },1000)
        },
        testAction(tex,obj) {
            console.log(tex,obj)
        }
>>>>>>> acab7a4acf2b9672012ad4fa2b14e6bccdd423f3
    }
  }
})

export default store
