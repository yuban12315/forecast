<template>
    <el-row class="my-card">
        <el-col :xs="{span:22,offset:1}" :sm="{span:18,offset:3}" :md="{span: 12, offset: 6}"
                :lg="{span: 12, offset: 6}" class="sun-body">
            <el-row>
                <el-col class="sun-top" :span="24">
                    <div class="sun" id="sun">
                        <canvas id="canvas">A Drawing of something</canvas>
                    </div>
                </el-col>
                <!--:xs="{span:22,offset:1}" :sm="{span:18,offset:3}" :md="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" -->
                <el-col class="sun-bottom">
                    <el-row :gutter="5">
                        <el-col :span="6">
                            <div class="sun-msg">
                                <div id="fx">{{wind_direction}}</div>
                                <div id="fj">{{wind_scale}}</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="sun-msg">
                                <div>相对湿度</div>
                                <div id="sd">{{humidity}}</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="sun-msg">
                                <div>体感温度</div>
                                <div id="wd">{{feels_like}}</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="sun-msg-last">
                                <div>气压</div>
                                <div id="qy">{{pressure}}</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    // 风力等级
    // var wind_direction
    // var wind_scale
    // 相对湿度
    // var humidity
    // 体感温度
    // var feels_like
    // 气压
    // var pressure

    // var day_begin = '日出 06:00'
    // var day_end = '日落 18:00'

    class Draw {
        constructor() {
            this.time = 0
        }

        canvas() {
            let t = this.time
            var sun = document.getElementById("sun")
            var canvas = document.getElementById('canvas');

            var w = sun.clientWidth
            var h = 100
            canvas.width = w;
            canvas.height = h;

            var context = canvas.getContext('2d');

            /**
             * 轨迹
             */
            context.strokeStyle = '#ff7411';
            context.lineWidth = 1;
            context.moveTo(0, h);
            context.quadraticCurveTo(w / 2, -h / 2, w, h)
            context.stroke();

            /**
             * 端点
             */
            context.beginPath();
            context.arc(0 + 3, h - 2, 2, 0, 2 * Math.PI);
            context.fillStyle = '#ff1311'
            context.fill()
            context.stroke()

            context.beginPath();
            context.arc(w - 3, h - 2, 2, 0, 2 * Math.PI);
            context.fillStyle = '#ff1311'
            context.fill()
            context.stroke()

            /**
             * 画太阳
             */
            var sun_x
            var sun_y
            sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
            sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h

            context.beginPath();
            context.arc(sun_x, sun_y, 15, 0, 2 * Math.PI);
            context.strokeStyle = '#ffffff';
            context.fillStyle = '#fff40c'
            context.fill()
            context.lineWidth = 2;
            context.stroke()
            //分割线
            context.beginPath();
            context.strokeStyle = '#ffcc89';
            context.lineWidth = 1;
            context.moveTo(sun_x, sun_y + 17);
            context.lineTo(sun_x, h - 10)
            context.stroke()

            /**
             * 时间
             */
            context.beginPath();
            context.fillStyle = '#ff7411';
            context.lineWidth = 1;
            context.font = '10px'
            context.fillText(this.day_begin, 20, h - 3);

            context.beginPath();
            context.fillStyle = '#ff7411';
            context.lineWidth = 1;
            context.font = '10px'
            context.fillText(this.day_end, w - 70, h - 3);

            /**
             * 画虚线
             */
            while (t < 1) {
                t += 0.05;
                sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
                sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h
                context.beginPath();
                context.strokeStyle = '#ffffff';
                context.lineWidth = 3;
                context.moveTo(sun_x, sun_y);
                t += 0.05
                sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
                sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h
                context.lineTo(sun_x, sun_y)
                context.stroke()
            }
        }

        setTime(t) {
            this.time = t
        }

        setBeginEnd(b, e) {
            this.day_begin = b
            this.day_end = e
        }
    }

    const draw = new Draw()

    export default {
        name: "SunRise",
        data() {
            return {
                wind_direction: '',
                wind_scale: '',
                humidity: '',
                feels_like: '',
                pressure: '',
                day_begin: '日出 06:00',
                day_end: '日落 18:00',
                draw
            }
        },
        methods: {
            canvas(t) {
                var sun = document.getElementById("sun")
                var canvas = document.getElementById('canvas');

                var w = sun.clientWidth
                var h = 100
                canvas.width = w;
                canvas.height = h;

                var context = canvas.getContext('2d');

                /**
                 * 轨迹
                 */
                context.strokeStyle = '#ff7411';
                context.lineWidth = 1;
                context.moveTo(0, h);
                context.quadraticCurveTo(w / 2, -h / 2, w, h)
                context.stroke();

                /**
                 * 端点
                 */
                context.beginPath();
                context.arc(0 + 3, h - 2, 2, 0, 2 * Math.PI);
                context.fillStyle = '#ff1311'
                context.fill()
                context.stroke()

                context.beginPath();
                context.arc(w - 3, h - 2, 2, 0, 2 * Math.PI);
                context.fillStyle = '#ff1311'
                context.fill()
                context.stroke()

                /**
                 * 画太阳
                 */
                var sun_x
                var sun_y
                sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
                sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h

                context.beginPath();
                context.arc(sun_x, sun_y, 15, 0, 2 * Math.PI);
                context.strokeStyle = '#ffffff';
                context.fillStyle = '#fff40c'
                context.fill()
                context.lineWidth = 2;
                context.stroke()
                //分割线
                context.beginPath();
                context.strokeStyle = '#ffcc89';
                context.lineWidth = 1;
                context.moveTo(sun_x, sun_y + 17);
                context.lineTo(sun_x, h - 10)
                context.stroke()

                /**
                 * 时间
                 */
                context.beginPath();
                context.fillStyle = '#ff7411';
                context.lineWidth = 1;
                context.font = '10px'
                context.fillText(this.day_begin, 20, h - 3);

                context.beginPath();
                context.fillStyle = '#ff7411';
                context.lineWidth = 1;
                context.font = '10px'
                context.fillText(this.day_end, w - 70, h - 3);

                /**
                 * 画虚线
                 */
                while (t < 1) {
                    t += 0.05;
                    sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
                    sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h
                    context.beginPath();
                    context.strokeStyle = '#ffffff';
                    context.lineWidth = 3;
                    context.moveTo(sun_x, sun_y);
                    t += 0.05
                    sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
                    sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h
                    context.lineTo(sun_x, sun_y)
                    context.stroke()
                }
            },

            async getWeather(city) {
                const url = `https://api.seniverse.com/v3/weather/now.json?key=afmlz62jdx69kmph&location=${encodeURIComponent(city)}&language=zh-Hans&unit=c`
                const res = await this.$axios.post(`/api/url`, {url})

                this.wind_direction = res.data.results[0]['now']['wind_direction'] + "风"
                this.wind_scale = res.data.results[0]['now']['wind_scale'] + "级"
                this.humidity = res.data.results[0]['now']['humidity'] + "%"
                this.feels_like = res.data.results[0]['now']['feels_like'] + "℃"
                this.pressure = res.data.results[0]['now']['pressure'] + "mb"
            },

            showTop() {
                /**
                 * 设置日出日落时间
                 */
                draw.setBeginEnd(this.day_begin, this.day_end)

                var hour = new Date().getHours();
                if (hour >= 6 && hour <= 18) {
                    var t = (hour - 6) / 12
                    draw.setTime(t)
                    //this.canvas(t)
                    draw.canvas()
                } else {
                    draw.setTime(1)
                    draw.canvas()
                }
            }
        },
        async mounted() {
            this.showTop()
            const city=this.$localStorage.get('chosen')
            await this.getWeather(city)
        }
    }

    // window.onresize = function () {
    //     window.location.reload()
    // }

    window.onresize = () => {
        const str = location.href
        if (str.charCodeAt(str.length - 1) === 47) {
            draw.canvas()
        }
    }

</script>

<style scoped>
    div {
        color: #656565;
    }

    .sun-body {
        height: 200px;
        /*border-bottom: 10px solid #eeeeee;*/
        overflow-y: hidden;
        overflow-x: hidden;
    }

    .sun-top {
        width: 100%;
        height: 120px;
        padding-top: 15px;
        padding-left: 5%;
    }

    .sun-bottom {
        width: 100%;
        height: 80px;
        padding-top: 15px;
    }

    .sun-msg {
        text-align: center;
        border-right: 1px solid #e6e6e6;
    }

    .sun-msg-last {
        text-align: center;
    }

    .sun {
        width: 90%;
        height: 100px;
    }

    .my-card {
        margin-top: 40px;
        /*margin-bottom:60px;*/
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1)
    }
</style>