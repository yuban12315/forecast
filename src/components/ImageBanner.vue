<template>
    <div class="background"  v-bind:style="{backgroundImage:`url(${this.image})`}">
            <el-row>
            <el-col :xs="{span:22,offset:1}" :sm="{span:18,offset:3}" :md="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}">
                <div class="banner">
                    <div class="temperature">{{weatherData.now.temperature}}°C</div>
                    <div class="city">{{weatherData.location.name}}</div>
                    <div class="weather-text">{{weatherData.now.text}}</div>
                    <div class="visibility">能见度：{{weatherData.now.visibility}}</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    /*导入图片*/
    import bg_cloudy from '../assets/ImageBanner/bg_cloudy.jpg'
    import bg_sunny from '../assets/ImageBanner/bg_sunny.jpg'
    import bg_smog from '../assets/ImageBanner/bg_smog.jpg'
    import bg_foggy from '../assets/ImageBanner/bg_foggy.jpg'
    import bg_snow from '../assets/ImageBanner/bg_snow.jpg'
    import bg_sandy from '../assets/ImageBanner/bg_sandy.jpg'
    import bg_rainy from '../assets/ImageBanner/bg_ice_rain.jpg'

    //import api from './../assets/api'

    export default {
        name: "ImageBanner",
        data() {
            return {
                weathers: {
                    sunny: 0,
                    cloudy: 1,
                    sandy: 2,
                    foggy: 3,
                    snow: 4,
                    smog: 5,
                    rainy:6
                },
                weather: 0,
                image: '',
                images: [
                    bg_sunny, bg_cloudy, bg_sandy, bg_foggy, bg_snow, bg_smog,bg_rainy
                ],
                weatherData: {location:{},now:{}}
            }
        },
        methods: {
            setWeather(data) {

                try {
                    /*weather_string*/
                    const wt_str=data.now.text
                    //[ '多云', '小雨', '晴', '阴', 'error', '大雨', '雷阵雨', '中雨', '晴间多云', '阵雨', '暴雨' ]
                    switch (wt_str) {
                        case "晴":
                        case "晴间多云":
                            this.weather=this.weathers.sunny
                            break;
                        case "多云":
                        case "阴":
                            this.weather=this.weathers.cloudy
                            break;
                        case "小雨":
                        case "中雨":
                        case "大雨":
                        case "阵雨":
                        case "暴雨":
                        case "雷阵雨":
                            this.weather=this.weathers.rainy
                            break;
                        default:
                            this.weather=this.weathers.sunny
                    }
                }catch (e) {
                    //console.log(e)
                }
                this.image=this.images[this.weather]

            },
            async getWeather(city) {
                const url=`now.json?&location=${encodeURIComponent(city)}&language=zh-Hans&unit=c`
                const res=await this.$axios.post(`/testApi/url`,{url})
                //console.log(res.data.results[0])
                this.weatherData=res.data.results[0]
                this.setWeather(this.weatherData)
            },
            async getAQI(city){

            }
        },
        async created() {
            const city=this.$localStorage.get('chosen')
            await this.getWeather(city)

        }
    }
</script>

<style scoped>
    .background {
        width: 100%;
        height: 300px;
        color: white;
        font-family:  "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        font-weight: 300;
        user-select: none;
        user-focus:none;

        /*background: repeat;*/
        /*background-size:400px 300px;*/
    }

    .banner{
        margin-top: 2%;
        font-size: 20px;
    }
    .temperature{
        display: block;
        font-size: 100px;
    }
    .city{
        margin-top: 0.5%;
    }
    .weather-text{
        margin-top: 0.5%;
    }
    .visibility{
        margin-top: 0.5%;
    }

</style>