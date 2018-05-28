import Vuex from 'vuex'
import Vue from 'vue'
import {type} from './mutation-types'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state:{
    count:0,
    count2:0,
    todos:[
      {id:1,text:'...',done:false},
      {id:1,text:'...',done:true},
      {id:2,text:'...',done:true},
      {id:4,text:'...',done:false},
    ]
  },
  mutations:{   //通过 mutations修改 state
    [type.INCREMENT](state,payload){
      console.log(payload)
      state.count += payload.value
    },
    [type.ADDCOUNT2](state, payload){
      state.count2 += payload.value
    },
    [type.DECREMENT](state){state.count--},
    [type.ADDTODO](state,payload){
      console.log(payload)
      return  state.todos = [...state.todos, payload]
    },
    [type.CHECKOUT_REQUEST](state){
      //do something...
    },
    [type.CHECKOUT_SUCCESS](state){
      //do something...
    },
    [type.CHECHOUT_FAILURE](state){
      //do something...
    }
  },
  getters:{
    doneTodos: state => {
      return state.todos
    }
  },
  //购物车结账的异步发送mutations示例
  actions:{
    overtimeAdd ({commit},payload){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          commit(type.INCREMENT,payload)
          resolve()
        },2000)
      })
    },
    laterAddCount2 ({commit, dispatch, state}, payload){
      return dispatch('overtimeAdd',{value:3}).then(()=>{
        commit(type.ADDCOUNT2, {value:3})
      })
    }
  }
})