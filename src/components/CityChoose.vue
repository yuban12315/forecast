<template>
    <el-row>
        <el-col class="city-title">
            <el-col :xs="{span:22,offset:1}" :sm="{span:18,offset:3}" :md="{span: 12, offset: 6}"
                    :lg="{span: 12, offset: 6}">
                <el-row>
                    <el-col :span="2" class="title-left">
                        <div v-on:click="back()"><i class="el-icon-arrow-left"></i></div>
                    </el-col>
                    <el-col :span="22" class="title-right">城市选择</el-col>
                </el-row>

            </el-col>
        </el-col>
        <el-col :xs="{span:22,offset:22}" :sm="{span:18,offset:3}" :md="{span: 12, offset: 6}"
                :lg="{span: 12, offset: 6}" style="text-align: center">
            <div class="city-body">

                <el-row v-for="loc in location" :key="loc.id">
                    <div v-on:click="choose(loc.id)">
                        <el-col :span="24">
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
                    </div>
                </el-row>
            </div>
            <div class="city-add" @click="tos()">+</div>

        </el-col>

    </el-row>

</template>

<script>

    import {string2arr} from'../assets/util'
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
            choose(index) {
                console.log(this.location[index])
            },

            async getWeather(cnt, citys) {
                const city = `${citys}`
                const res = await this.$axios.post(`/testApi/choose`, {city})
                for (var ind = 0; ind < cnt; ind++) {
                    this.location.push({
                        city: '',
                        city_B: '',
                        feels: '',
                        others: '',
                        high2low: '',
                        id: ind
                    })
                    this.location[ind].city = res.data.city_s[ind]['name']
                    this.location[ind].city_B = res.data.city_s[ind]['path']
                    this.location[ind].feels = res.data.city_s[ind]['temperature']
                    this.location[ind].others = res.data.city_s[ind]['others']
                    this.location[ind].high2low = res.data.city_s[ind]['high2low']
                }
            }
        },

        async created() {
            /**
             * 未实现获取历史城市列表
             * 。。。
             */

            const citys = string2arr(this.$localStorage.get('cityName'))
            console.log(citys)
            await this.getWeather(citys.length, citys)
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
        height: 63px;
        background-color: #45D7D4;
    }

    .title-left {
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        line-height: 63px;
        color: #ffffff;
    }

    .title-right {
        line-height: 63px;
        color: #ffffff;
    }

    .city-body {
        margin-top: 20px;
        width: 100%;
        padding-bottom: 15px;
    }

    .city-box {
        cursor: pointer;
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
        /*left: 85%;*/
        left: 47.5%;
        position: fixed;
        bottom: 50px;
        background-color: #45D7D4;
        border-radius: 25px;
        text-align: center;
        line-height: 50px;
        color: #ffffff;
        font-size: 30px;
    }
</style>