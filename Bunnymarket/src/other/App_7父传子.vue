<!-- 组合式API父子通信 -->

<script setup>
// setup语法糖下局部组件无需注册直接可以使用 vue2还得注册一下
import {ref} from 'vue'
import SonCom from './son-com.vue'
const count = ref(100)
setTimeout(()=>{
  count.value = 200
},3000)
</script>


<template>
  <div class = "father">
    <h2>父组件app</h2>
    <!-- 1.绑定属性 渲染  :count 是响应式数据 一定要加：-->
    <SonCom :count = "count" message = "father message"/>
  </div>
</template>

<style scoped>
</style>