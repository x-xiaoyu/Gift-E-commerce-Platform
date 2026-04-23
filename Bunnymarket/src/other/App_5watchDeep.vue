<script setup>
import {ref,watch} from 'vue'
const state = ref({count:0})
const changeStateByCount = () =>{
  // 直接修改count
  state.value.count++
}
// TODO:watch深度侦听
watch(state,()=>{
  // 因为监听的是浅层 所以直接修改value.count是不行的 这个时候按是不会显示打印的
  console.log('count变化了');
},{
  // 当补充第三个参数deep 就可以打印了
  deep:true
})
</script>

<template>
<div>
  <button @click="changeStateByCount">
    通过count修改
  </button>
</div>
</template>

<!-- deep性能损耗 尽量不开启deep 因为他会监听所有 -->
<!-- 当只想监听某个数据的时候const state = ref({count:0},{age:38})
   watch里直接写两个回调函数 
   ()=>state.value.age //监听什么
   ()=>{
    console.log('age变化了')
   }//回调什么
  -->