<template>
    <el-row>
        <el-col class="city-title">
            <el-row>
                <el-col :xs="{span:22,offset:1}" :sm="{span:18,offset:3}" :md="{span: 12, offset: 6}"
                        :lg="{span: 12, offset: 6}">
                    <el-input v-model="city" class="inp" placeholder="请输入城市名称" @keyup.enter.native="city4main(city)">
                        <el-button slot="prepend" icon="el-icon-arrow-left" @click.native="back"></el-button>
                        <el-button slot="append" icon="el-icon-search" @click.native="city4main(city)"></el-button>
                    </el-input>
                </el-col>
            </el-row>

        </el-col>
        <el-col :xs="{span:22,offset:1}" :sm="{span:18,offset:3}" :md="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}">
            <p class="c-text">热门城市</p>
            <div class="c-c">
                <el-row :gutter="20">
                    <el-col :span="6" style="margin-top: 5px" v-for="name in citys">
                        <el-button class="btn  name" @click.native="city4main(name)">{{name}}</el-button>
                    </el-col>
                </el-row>
            </div>

        </el-col>
    </el-row>

</template>

<script>
    import {add2storage} from "../assets/util";

    export default {
        name: "city-search",
        data() {
            return {
                city: '',
                citys: ["北京", "上海", "广州","深圳","西安","合肥", "成都", "重庆"]
            }
        },
        methods: {
            async city4main(city) {
                if(city=='') return
                const url = `https://api.seniverse.com/v3/weather/hourly.json?key=afmlz62jdx69kmph&location=${encodeURIComponent(city)}&language=zh-Hans&unit=c&start=0&hours=24`
                const res = await this.$axios.post('/testApi/url', {url})
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
            },
            back() {
                this.$router.back()
            },

        }
    }
</script>

<style scoped>

    .city-title {
        width: 100%;
        background-color: #45D7D4;
        text-align: center;
        padding-top: 10px;
        padding-bottom:10px;
    }

    .inp {
        padding: 2px;
        width: 100%;
    }

    .c-text {
        margin-top: 15px;
    }

    .c-c {
        width: 100%;
        text-align: center;
    }

    .name {
        width: 100%;
        margin-bottom: 10px;
    }
</style>