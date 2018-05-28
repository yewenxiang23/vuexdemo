<template>
  <div id="home">
    <p>{{test}}</p>
    <p>{{count}}</p>
    <p>{{count2}}</p>
    <ul v-for="(item, index) in todos" :key="index">
      <li>id {{item.id}}</li>
      <li>text {{item.text}}</li>
      <li>done {{item.done}}</li>
    </ul>
    <button @click="ADDTODO">增加todo</button>
    <button @click="INCREMENT({value:2})">+</button>
    <button @click="DECREMENT">-</button>
    <button @click="overtimeAdd({value:3})">两秒后增加</button>
    <button @click="laterAddCount2({value:3})">两秒后增加完继续等两秒增加另外一个</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import {type} from '@/mutation-types'
export default {
  name: "Home",
  data() {
    return {
      data: []
    };
  },
  created() {},
  updated(){
    console.log(this.todos)
  },
  computed: {
    test() {
      return 1;
    },
    ...mapState(["count","count2" , "todos"]), //映射 this.count 为 this.$store.state.count
    ...mapGetters(["doneTodos"]),  //把this.doneCount 映射为 this.$store.getters.doneTodos
  },
  methods: {
    ...mapMutations([  //将 this[INCREMENT]() 映射为this.$store.commit(INCREMENT)
      type.INCREMENT,
      type.DECREMENT,
      type.ADDTODO
    ]),
    ...mapActions([     //将 this.checkout() 映射为 this.$store.dispatch(checkout)
      'overtimeAdd',
      'laterAddCount2'
    ])
  }
};
</script>

<style scoped>
</style>