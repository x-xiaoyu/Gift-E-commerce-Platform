<!-- 组合式API生命周期函数:组件从穿见到销毁各个阶段 -->
<!-- 发送请求 created mounted -->
<!-- 清理定时器 destroyed -->

<script setup>
// 生命周期函数的使用
// 1.引入函数
import { onMounted } from 'vue';

// 2. 执行函数 传入回调 依次执行
onMounted(()=>{
  console.log('组件挂载完毕mounted执行了1');
})
onMounted(()=>{
  console.log('组件挂载完毕mounted执行了2');
})
</script>


<template>
  <div>

  </div>
</template>