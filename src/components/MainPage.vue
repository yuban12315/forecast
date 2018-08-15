<template>
    <el-container class="container">
        <el-main class="nopadding">
            <ImageBanner></ImageBanner>
            <ThreeWeather></ThreeWeather>
            <WeatherChart></WeatherChart>
        </el-main>
    </el-container>
</template>
<script>
    import ImageBanner from './ImageBanner'
    import ThreeWeather from './ThreeWeather'
    import WeatherChart from './WeatherChart'

    export default {
        name: 'ManageCity',
        components: {
            ImageBanner,
            ThreeWeather,
            WeatherChart
        },
        data() {
            return {
                input: ''
            }
        }
    }
</script>

<style scoped>
    .container{
        overflow-x: hidden;
    }
</style>