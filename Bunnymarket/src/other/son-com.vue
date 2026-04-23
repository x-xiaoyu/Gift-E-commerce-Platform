<script setup>
// 2.接收数据 defineProps编译器宏函数
const props = defineProps({
    message:String,
    count:Number
})
console.log(props)
</script>

<template>
    <div class="son">
        <h3>子组件Son</h3>

    </div>
    <div>
        父组件传入的数据 -- {{ message }} - {{ count }}
    </div>
</template>


<style scoped>
</style>