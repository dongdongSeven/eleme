/**
 * Created by Administrator on 2017/8/6 0006.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartAdd:{}
  },
  mutations:{
    cartAdd (state,el) {
      state.cartAdd = el
    }
  }
})

export default store
