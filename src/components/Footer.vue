<template>
    <el-row>
        <el-col>
            <div class="footer">
                <img src="https://static.sencdn.com/brand/logo/logo-red.svg?20180201" style="width:50px; height:50px;"
                     alt="心知天气" class="logo white">气象数据来自 心知天气
            </div>
        </el-col>
        <el-col class="bottom  my-card">
            <i class="el-icon-menu" v-on:click="toCity"></i>
            <i class="el-icon-phone" :class="audio" v-on:click="getAudio()" id="aud"></i>
        </el-col>
        <audio id="vid" class="bottom" autoplay loop>
        </audio>
    </el-row>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return{
                audio:''
            }
        },
        methods: {
            toCity() {
                this.$router.push({path: '/city'})
            },

            async getAudio() {
                var vid = document.getElementById('vid')
                if(!vid.paused){
                    this.audio = 'el-icon-phone'
                    vid.pause()
                    return
                }

                /**
                 * 语音播报城市
                 * @type {string}
                 */
                var city = 'beijing'
                const res = await this.$axios.post(`/testApi/audio`, {city})
                vid.src = res.data
                vid.load()
                vid.play()
                this.audio = 'el-icon-phone-outline'
            }
        }
    }
</script>

<style scoped>
    .footer {
        text-align: center;
        padding: 50px;
        font-size: 20px;
        margin-bottom: 20px;
        background-color: rgba(167, 147, 168, 0.21);
    }

    i {
        font-size: 32px;
        padding: 5px;
        transition: 100ms ease-in;
        cursor: pointer;
    }

    .my-card {
        margin-top: 10px;
        background-color: white;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1)
    }

    .bottom {
        position: fixed;
        bottom: 0;
    }

    img {
        margin-right: 10px;
    }

    #aud{
        float: right;
    }
</style>