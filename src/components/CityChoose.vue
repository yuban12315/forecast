<template>
    <div class="city">
        <div class="city-title">
            <el-row>
                <el-col :span="2" class="title-left">
                    <div @click="back()"><</div>
                </el-col>
                <el-col :span="22" class="title-right">城市选择</el-col>
            </el-row>
        </div>
        <div class="city-body">
            <el-row v-for="loc in location">
                <el-col>
                    <el-card class="city-box">
                        <el-row class="ct">
                            <el-col :span="14">
                                <div class="ct1">
                                    <div class="ct1-t text-col-1">{{loc.city}}</div>
                                    <div class="ct1-b text-col-2">{{loc.city_B}}</div>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="ct2">
                                    <!--<img src="../assets/CityChoose/16.png"/>-->
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="ct3 text-col-1">
                                    {{loc.feels}}<sup class="csup">℃</sup>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="cb">
                            <el-col :span="18" class="cb-l text-col-1">{{loc.others}}</el-col>
                            <el-col :span="6" class="cb-r text-col-1">{{loc.high2low}}</el-col>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class="city-add" @click="tos()">+</div>
    </div>
</template>

<script>
    export default {
        name: "city-choose",
        data() {
            return {
                location: []
            }
        },
        methods: {
            tos() {
                this.$router.push({path: '/city_s'})
            },
            back() {
                this.$router.back()
            },

            async getWeather1(ind, city) {
                const url = `https://api.seniverse.com/v3/weather/now.json?key=afmlz62jdx69kmph&location=${city}&language=zh-Hans&unit=c`
                const res = await this.$axios.post(`/api/url`, {url})

                this.location[ind].city = res.data.results[0]['location']['name']
                this.location[ind].city_B = res.data.results[0]['location']['path']
                this.location[ind].feels = res.data.results[0]['now']['temperature']
                this.location[ind].others = res.data.results[0]['now']['text'] + " | 湿度" +
                    res.data.results[0]['now']['humidity'] + "% | " +
                    res.data.results[0]['now']['wind_direction'] + "风" +
                    res.data.results[0]['now']['wind_scale'] + "级"
            },

            async getWeather2(ind, city) {
                const url = `https://api.seniverse.com/v3/weather/daily.json?key=afmlz62jdx69kmph&location=${city}&language=zh-Hans&unit=c&start=0&days=1`

                const res = await this.$axios.post(`/api/url`, {url})
                this.location[ind].high2low = res.data.results[0]['daily'][0]['high'] + " / " +
                    res.data.results[0]['daily'][0]['low'] + "℃"
            }
        },

        async created() {
            var citys = ['beijing', 'shenyang']
            for (var i = 0; i < citys.length; i++) {
                this.location.push({
                    city: '',
                    city_B: '',
                    feels: '',
                    others: '',
                    high2low: ''
                })
                await this.getWeather1(i, citys[i])
                await this.getWeather2(i, citys[i])
            }
        }
    }
</script>

<style scoped>
    .text-col-1 {
        color: #616161;
    }

    .text-col-2 {
        color: #7c7c7c;
    }

    .city {
        width: 100%;
    }

    .city-title {
        width: 100%;
        height: 50px;
        background-color: #7ebfff;
    }

    .title-left {
        text-align: center;
        line-height: 50px;
        color: #ffffff;
    }

    .title-right {
        line-height: 50px;
        color: #ffffff;
    }

    .city-body {
        width: 100%;
        padding-bottom: 15px;
    }

    .city-box {
        width: 95%;
        height: 150px;
        margin-left: 2%;
        margin-top: 5px;
    }

    .ct {
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #eeeeee;
    }

    .ct1 {
        width: 100%;
        height: 80px;
    }

    .ct1-t {
        width: 100%;
        height: 50%;
        font-size: 20px;
        padding-left: 20px;
        line-height: 40px;
    }

    .ct1-b {
        width: 100%;
        height: 50%;
        padding-left: 20px;
        font-size: 15px;
    }

    .ct2 {
        width: 100%;
        height: 80px;
        text-align: right;
    }

    .ct2 img {
        width: 30px;
        height: 30px;
    }

    .ct3 {
        width: 100%;
        height: 80px;
        text-align: center;
        font-size: 40px;
    }

    .csup {
        font-size: 15px;
    }

    .cb {
        width: 100%;
        height: 80px;
        line-height: 50px;
        padding-left: 20px;
        font-size: 15px;
    }

    .cb-r {
        text-align: center;
    }

    .city-add {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 90%;
        /*left: 85%;*/
        right: 5%;
        background-color: #7ebfff;
        border-radius: 25px;
        text-align: center;
        line-height: 50px;
        color: #ffffff;
        font-size: 30px;
    }
</style>