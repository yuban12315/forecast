<template>
    <div id="myChart" :style="{width: '1500px', height: '300px'}"></div>
</template>

<script>

    const option = {
        legend: {
            data: ['最高气温']
            ,selectedMode:false,
        },
        calculable: false,
        grid: {
            x: 20, y: 0, x2: 20, y2: 0
        },
        xAxis: [
            {
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4','1', '2', '3', '4','1', '2', '3', '4','1', '2', '3', '4','1', '2', '3', '4','1', '2', '3', '4',]
            }
        ],
        yAxis: [
            {
                min:5,
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
                        borderWidth:6
                    }
                },
                name: '最高气温',
                type: 'line',
                data: [11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13, 11, 11, 15, 13,],
            }
        ]
    };


    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'), 'macarons')
                // 绘制图表
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>

</style>