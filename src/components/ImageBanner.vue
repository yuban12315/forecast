<template>
    <div class="background" v-bind:style="{backgroundImage:`url(${this.image})`}">
        <el-row>
            <el-col :xs="{span:18,offset:3}" :sm="{span:18,offset:3}" :md="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}">



            </el-col>
        </el-row>
    </div>
</template>

<script>
    /*导入图片*/
    import bg_cloudy from '../assets/ImageBanner/bg_cloudy.jpg'
    import bg_sunny from '../assets/ImageBanner/bg_sunny_night.jpg'
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
                weatherData: {}
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
                        default:
                            this.weather=this.weathers.sunny
                    }
                }catch (e) {
                    //console.log(e)
                }
                this.image=this.images[this.weather]

            },
            async getWeather() {
                this.weatherData = {
                    "location": {
                        "id": "WX4FBXXFKE4F",
                        "name": "北京",
                        "country": "CN",
                        "path": "北京,北京,中国",
                        "timezone": "Asia/Shanghai",
                        "timezone_offset": "+08:00"
                    },
                    "now": {
                        "text": "小雨",
                        "code": "4",
                        "temperature": "28",
                        "feels_like": "28",
                        "pressure": "1003",
                        "humidity": "76",
                        "visibility": "6.2",
                        "wind_direction": "东南",
                        "wind_direction_degree": "121",
                        "wind_speed": "4.32",
                        "wind_scale": "1",
                        "clouds": "50",
                        "dew_point": ""
                    },
                    "last_update": "2018-08-13T22:25:00+08:00"
                }
                this.setWeather(this.weatherData)
            }
        },
        async created() {
            await this.getWeather()

        }
    }
</script>

<style scoped>
    .background {
        width: 100%;
        height: 300px;
        color: white;
        font-family: miui;
    }

</style>