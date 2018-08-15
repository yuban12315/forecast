<template>
    <el-row>
        <el-col :span="18" :offset="3" :xs="{span:22,offset:1}" class="scroll">
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
                legend: {
                    data: ['最高气温']
                    , selectedMode: false,
                },
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
                        data: ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4',]
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
                        name: '最高气温',
                        type: 'line',
                        data: [11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13,],
                    }
                ]
            };
        }
        getOpt(){
            return this.opt
        }
    }


    const chart=new MyChart()
    const option = {
        legend: {
            data: ['最高气温']
            , selectedMode: false,
        },
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
                data: ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4',]
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
                name: '最高气温',
                type: 'line',
                data: [11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13,],
            }
        ]
    };
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
                const url = `https://api.seniverse.com/v3/weather/hourly.json?key=afmlz62jdx69kmph&location=${city}&language=zh-Hans&unit=c&start=0&hours=24`
                const res = this.$axios.post('/api/url', {url})
                this.weatherData = res.data.results[0]
                console.log(this.weatherData)
            }
        },
        mounted() {
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
        width: 1600px;
        height: 300px;
    }
</style>