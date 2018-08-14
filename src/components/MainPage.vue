<template>
    <el-container>
       <el-main class="nopadding">
           <ImageBanner></ImageBanner>
           <WeatherChart></WeatherChart>
       </el-main>
    </el-container>
</template>
<script>
    import ImageBanner from './ImageBanner'
    import WeatherChart from './WeatherChart'
    export default{
        name:'ManageCity',
        components:{
            ImageBanner,
            WeatherChart
        },
        data(){
            return{
                input:''
            }
        }
    }
</script>

<style scoped>
</style>