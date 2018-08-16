<template>
    <div id="three-body">
        <table>
            <tbody>
            <tr v-for="item in items">
                <td class="left">{{item.id}}</td>
                <td class="center">{{item.text_day}}</td>
                <td class="right">{{item.low_high}}</td>
            </tr>

            </tbody>
        </table>
    </div>


</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                items: [
                    {
                        id: "今天",
                        text_day: "",
                        low_high: ""
                    },
                    {
                        id: "明天",
                        text_day: "",
                        low_high: ""
                    }, {
                        id: "后天",
                        text_day: "",
                        low_high: ""
                    }
                ]
            }
        },
        methods: {
            async getWeather(city) {
                const url = `https://api.seniverse.com/v3/weather/daily.json?key=afmlz62jdx69kmph&location=${city}&language=zh-Hans&unit=c&start=0&days=3`
                const res = await this.$axios.post('/api/url', {url})
                console.log(res.data.results[0])

                for (var i = 0; i < 3; i++) {
                    var wea1 = res.data.results[0]['daily'][i]['text_day']
                    var wea2 = res.data.results[0]['daily'][i]['text_night']
                    if (wea1 == wea2) {
                        this.items[i].text_day = wea1
                    }
                    else {
                        this.items[i].text_day = wea1 + "转" + wea2
                    }
                    this.items[i].low_high = res.data.results[0]['daily'][i]['low']
                        + " / "
                        + res.data.results[0]['daily'][i]['high'] + "℃"
                }
            }
        },
        async created() {
            /**
             * 未实现获取当前Main的city
             * 。。。
             */
            await this.getWeather('nanchong')

        }
    }
</script>
<style scoped>
    img {
        width: 200px;
        height: 150px;

    }

    #img {
        text-align: center;
    }

    #three-body {
        width: 100%;
        height: 160px;
        border-bottom: 10px solid #eeeeee;
    }

    table {
        width: 84%;
        margin-left: 8%;
        margin-bottom: 0;
        border-collapse: collapse;
        border-spacing: 0;
    }

    tr {
        padding: 0;
        height: 50px;
        font-size: 1em;
        border-bottom: solid 1px gainsboro;
    }

    td {
        padding: 0;
        margin: 0;
        height: 50px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }

    .left {
        width: 33%;
        text-align: left;
    }

    .center {
        width: 33%;
    }

    .right {
        width: 33%;
        text-align: right;
    }
</style>