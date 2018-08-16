<template>
    <el-row>
        <el-col :span="24"><ImageBanner></ImageBanner></el-col>
        <el-col :span="24"><ThreeWeather></ThreeWeather></el-col>
        <el-col :span="24"><WeatherChart></WeatherChart></el-col>
        <el-col :span="24"><SunRise></SunRise></el-col>
    </el-row>
</template>
<script>
    import ImageBanner from './ImageBanner'
    import ThreeWeather from './ThreeWeather'
    import WeatherChart from './WeatherChart'
    import SunRise from './SunRise'

    export default {
        name: 'ManageCity',
        components: {
            ImageBanner,
            ThreeWeather,
            WeatherChart,
            SunRise
        },
        data() {
            return {
                input: ''
            }
        }
    }
</script>

<style scoped>
    .container {
        overflow-x: hidden;
        margin: 0;
        width: 100%;
        padding: 0;
    }
    el-main{
        overflow: hidden;
    }
</style>