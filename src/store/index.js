import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '张三' ,
    num: 1

  },
  getters: {
  },
  mutations: {
    stateUser (state, payload) {
      state.user = payload.isName
    },
    stateNum(state,payload) {
        state.num = payload
    }
  },
  actions: {
    stateNum(ctx,payload) {
      ctx.state.num = 4444
      setTimeout(() => {
        ctx.commit('stateNum',payload)
      }, 1000);
    }
  },
  modules: {
  }
})
