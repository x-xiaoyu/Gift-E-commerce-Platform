<!-- 监听单个数据 -->
<!-- <script setup>
import {ref,watch} from 'vue'
const count = ref(0)
const setCount = () => {
  count.value++
}

// TODO:watch侦听单个数据源
// ref 对象不需要加.value
watch(count, (newVal,oldVal) =>{
  console.log('count变化了',newVal,oldVal)

})
</script>

<template>
  <div>
    <button @click="setCount">+{{count}}</button>
  </div>
</template>
 -->

<!-- 监听多个数据 -->
 <!-- <script setup>
import {ref,watch} from 'vue'

const count = ref(0)
const changeCount = () => {
  count.value++
}

// cp变pc
const name = ref('cp')
const changeName = () => {
  name.value = 'pc'
}

// TODO:watch侦听多个数据源
watch(
  [count, name],
  (
    [newCount,newName],
    [oldCount,oldName]
  ) =>{
    console.log('count或者name变化了',[newCount,newName],[oldCount, oldName])
  }
)
</script>

<template>
  <div>
    <button @click="changeCount">修改count--{{count}}</button>
    <button @click="changeName">修改name--{{name}}</button>
  </div>
</template>
 -->


 <!-- immidiate -->
<script setup>
import {ref,watch} from 'vue'
const count = ref(0)

const setCount = ()=>{
  count.value++
}
//  TODO:watch立即执行
// 三个参数 count，数据回调log，immidiate
watch(count,()=>{
  console.log('count变化了')
},{
  immediate:true
})
</script>

<template>
  <div>
    <button @click="setCount">+{{count}}</button>
  </div>
</template>