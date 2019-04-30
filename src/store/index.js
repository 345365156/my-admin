import Vue from 'vue'
import Vuex from 'vuex'

// store 模块

Vue.use(Vuex)

// bak
let defaultOption = {
  state: {
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters: {
    saleProducts: (state) => {
      let discountProduct = state.products.map(product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return discountProduct
    }
  },
  mutations: {
    minusPrice(state, payload) {
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions: {
    minusPriceAsync(context, payload) {
      setTimeout(() => {
        context.commit('minusPrice', payload)
      }, 2000)
    }
  }
};

const store = new Vuex.Store({
  modules:{
    a: defaultOption
  }
});

export default store

// store.state.a -> moduleA 的状态
// store.state.b -> moduleB 的状态
