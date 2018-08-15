<template>
    <div class="city">
        <div class="city-title">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "city-search"
    }
</script>

<style scoped>
    .city{
        width: 100%;
    }
    .city-title{
        width: 100%;
        height: 50px;
        background-color: #7ebfff;
        text-align: center;
        line-height: 50px;
    }
</style>