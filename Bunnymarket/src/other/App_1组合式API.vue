<!-- 开关:容许在scripts书写组合式API -->
<!-- <script>
  export default{
    setup(){
      console.log('setup', this)
      const message = 'this is message'
      const logMessage = () => {
        console.log(message)
      }
      // 当在setup定义完数据之后 需要在return转换成对象 才可以在模版template里调用
      return {
        message,
        logMessage
      }
    },
    beforeCreate () {
      console.log('beforeCreate')
    }
  }
</script> -->
<!-- 语法糖 就是把复杂的代码 经过封装 用更简洁的代码写出来 组合式API -->
<script setup>
  const message = 'this is message'
  const logMessage = () => {
    console.log(message)
  }
</script>


<template>
    <!-- vue3不再要求唯一根元素 -->
    <div>
      {{ message }}
      <!-- 绑定点击事件 -->
      <button @click="logMessage"> log </button>
    </div>

</template>

<style scoped></style>
