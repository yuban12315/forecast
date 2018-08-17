<template>
    <div class="city">
        <div class="city-title">
            <el-input v-model="city" class="inp" placeholder="请输入内容" prefix-icon="el-icon-arrow-left"
                      @keyup.enter.native="city4main(city)"></el-input>
        </div>
        <p class="c-text">热门城市</p>
        <div class="c-c">
            <el-row :gutter="20">
                <el-col :span="5" style="margin-top: 5px" v-for="name in citys">
                    <el-button class="btn  name" @click.native="city4main(name)">{{name}}</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {add2storage} from "../assets/util";

    export default {
        name: "city-search",
        data() {
            return {
                city: '',
                citys: ["北京", "上海", "广州", "成都", "重庆"]
            }
        },
        methods: {
            async city4main(city) {
                const url = `https://api.seniverse.com/v3/weather/hourly.json?key=afmlz62jdx69kmph&location=${encodeURIComponent(city)}&language=zh-Hans&unit=c&start=0&hours=24`
                const res = await this.$axios.post('/api/url', {url})
                if (res.data.hasOwnProperty('results')) {
                    const str = add2storage(this.$localStorage.get('cityName'), city)
                    this.$localStorage.set('cityName', str)
                    this.$localStorage.set('chosen', city)
                    //console.log(this.$localStorage.get('chosen'))
                    this.$router.push({path: '/'})
                } else {
                    this.$message({
                        showClose: true,
                        message: '城市名称有误',
                        type: 'error'
                    });
                }
                //console.log(this.$localStorage)

                // for (const name in this.citys) {
                //     if (this.citys[name] === city) {
                //         city = name
                //         break;
                //     }
                // }
                // if (city[0] >= 'z' || city[0] <= 'a') {
                //     this.$message({
                //         showClose: true,
                //         message: '城市名称有误',
                //         type: 'error'
                //     });
                //     return
                // }
                /**
                 * 未实现选择城市传到Main
                 * 。。。
                 */
                //this.$router.push({path: '/'})
            },
            back() {
                this.$router.back()
            },

        }
    }
</script>

<style scoped>
    .city {
        width: 100%;
    }

    .city-title {
        width: 100%;
        height: 50px;
        background-color: #7ebfff;
        text-align: center;
        line-height: 50px;
    }

    .inp {
        width: 95%;
    }

    .c-text {
        margin-left: 15px;
        margin-top: 15px;
    }

    .c-c {
        width: 100%;
        margin-left: 20px;
        padding-right: 20px;
    }
    .name{
        width: 100%;
    }
</style>