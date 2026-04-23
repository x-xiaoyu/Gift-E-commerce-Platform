<script setup>
// ref 与 reactive 案例：计算器
// // 1. 导入函数
// import {reactive } from 'vue'

// // 2.执行函数 传入一个对象类型的参数 变量接收 reactive：对象类型 ref：简单类型或对象类型
// const state = reactive ({
//   count:0
// })

// // 新增函数
// const setCount = () =>{
//   state.count++
// }

// 1. 导入ref函数
import {ref} from 'vue'
// 2.执行函数 传入参数[简单类型/对象类型]变量接收
const count = ref(0)
console.log(count)
const setCount = () => {
  // 脚本区域修改ref产生的响应式对象数据 必须通过.value属性
  count.value++
}
</script>

<template>
  <div>
    <!-- <button @click="setCount">{{state.count}}</button> -->
    <button @click="setCount">{{count}}</button>
  </div>
</template>