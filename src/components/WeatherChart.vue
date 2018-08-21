<template>
    <el-row>
        <el-col :xs="{span:22,offset:1}" :sm="{span:18,offset:3}" :md="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" class="scroll">
            <div class="chart">
                <div id="myChart" :style="{width: '1500px', height: '300px'}"></div>
            </div>
        </el-col>
    </el-row>

</template>

<script>
    class MyChart {
        constructor(){
            this.opt= {
                grid: {
                    x: 20, y: 20, x2: 20, y2: 50
                },
                calculable: false,
                xAxis: [
                    {
                        show: true,
                        splitLine: {
                            show: false
                        },
                        type: 'category',
                        boundaryGap: false,
                        data: ['0:00', '1:00', '2:00','3:00', '4:00', '5:00', '6:00',
                            '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '2', '3', '4',]
                    }
                ],
                yAxis: [
                    {
                        min: 5,
                        show: false,
                        scale: true,
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series: [
                    {
                        itemStyle: {
                            normal: {
                                label: {show: true, formatter: '{c}°C'},
                                borderWidth: 6
                            }
                        },
                        name: '气温',
                        type: 'line',
                        data: [11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13,],
                    }
                ]
            };
        }
        getOpt(){
            return this.opt
        }
        setData(data){
            const weatherList=data.hourly
            let date
            const timeList=[]
            const temperatureList=[]
            let min=999
            let temp=0
            for (let weather of weatherList){
                date = new Date(weather.time)
                const hour = date.getHours()
                let str = ''
                if (hour < 10) {
                    str += '0'
                }
                str += hour.toString()
                str += ':00'
                temp = Number.parseInt(weather.temperature)
                if (temp < min){
                    min = temp
                }
                timeList[timeList.length]=str
                temperatureList[temperatureList.length]=temp
            }
            timeList[0]='now'
            this.opt.xAxis[0].data=timeList
            this.opt.series[0].data=temperatureList
            this.opt.yAxis[0].min = min-5
        }
    }


    const chart=new MyChart()
    export default {
        name: "WeatherChart",
        data() {
            return {
                weatherData: {}
            }
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'), 'macarons')
                // 绘制图表
                myChart.setOption(chart.getOpt());
            },
            async getWeather(city) {
                const url = `hourly.json?&location=${encodeURIComponent(city)}&language=zh-Hans&unit=c&start=0&hours=24`
                const res = await this.$axios.post('/testApi/url', {url})
                this.weatherData = res.data.results[0]
                //console.log(this.weatherData)
            }
        },
        async mounted() {
            await this.getWeather('沈阳')
            chart.setData(this.weatherData)
            this.drawLine()
        }

    }
</script>

<style scoped>
    .scroll {
        overflow: hidden;
    }

    .chart {
        width: 100%;
        height: 300px;
        overflow-x: scroll;
        overflow-y: hidden;
    }

    #myChart {
        width: 1500px;
        height: 300px;
    }
</style>