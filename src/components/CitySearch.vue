<template>
    <div class="city">
        <div class="city-title">
            <el-input v-model="city" class="inp" placeholder="请输入内容" prefix-icon="el-icon-arrow-left"
                      @keyup.enter.native="city4main(city)"></el-input>
        </div>
        <p class="c-text">热门城市</p>
        <div class="c-c">
            <el-row :gutter="20">
                <el-col :span="5" style="margin-top: 5px">
                    <el-button @click="back()">返回</el-button>
                </el-col>
                <el-col :span="5" style="margin-top: 5px">
                    <el-button @click="city4main('beijing')">北京</el-button>
                </el-col>
                <el-col :span="5" style="margin-top: 5px">
                    <el-button @click="city4main('shanghai')">上海</el-button>
                </el-col>
                <el-col :span="5" style="margin-top: 5px">
                    <el-button @click="city4main('guangzhou')">广州</el-button>
                </el-col>
                <el-col :span="5" style="margin-top: 5px">
                    <el-button @click="city4main('shenzhen')">深圳</el-button>
                </el-col>
                <el-col :span="5" style="margin-top: 5px">
                    <el-button @click="city4main('chongqing')">重庆</el-button>
                </el-col>
                <el-col :span="5" style="margin-top: 5px">
                    <el-button @click="city4main('huhehaote')">呼和浩特</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "city-search",
        data() {
            return {
                city: ''
            }
        },
        methods: {
            city4main(city) {
                //city
                //console.log(city)
                this.$router.push({path: '/'})
            },
            back(){
                this.$router.back()
            }
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
</style>