<template>
    <el-container class="container">
        <el-main class="nopadding">
            <ImageBanner></ImageBanner>
            <ThreeWeather></ThreeWeather>
            <WeatherChart></WeatherChart>
            <SunRise></SunRise>
        </el-main>
    </el-container>
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
</style>