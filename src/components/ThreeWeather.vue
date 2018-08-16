<template>
    <div id="three-body">
        <table class="table table-condensed">
            <tbody>
            <tr v-for="item in items">
                <td class="left">{{item.id}}</td>
                <td class="center">{{item.text_day}}</td>
                <td class="right">{{item.low_high}}</td>
            </tr>

            </tbody>
        </table>
        <p>15天趋势预报</p>
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
                        text_day:"",
                        low_high:""
                    },
                    {
                        id: "明天",
                        text_day:"",
                        low_high:""
                    },{
                        id: "后天",
                        text_day:"",
                        low_high:""
                    }
                ]
            }
        },
        methods:{
            async getWeather(city) {
                const url = `https://api.seniverse.com/v3/weather/daily.json?key=afmlz62jdx69kmph&location=${city}&language=zh-Hans&unit=c&start=0&days=3`
                const res = await this.$axios.post('/api/url', {url})
                console.log(res.data.results[0])

                for (var i = 0; i < 3; i++) {

                    this.items[i].text_day = res.data.results[0]['daily'][i]['text_day']
                    this.items[i].low_high = res.data.results[0]['daily'][i]['low']
                        + " / "
                        + res.data.results[0]['daily'][i]['high']+"℃"
                }
            }
        },
        async created() {
            await this.getWeather('nanchong')

        }
    }
</script>
<style scoped>
    img{
        width: 200px;
        height: 200px;

    }
    #img{
        text-align: center;
    }
    #three-body {
        width: 100%;
        height: 200px;
        border-bottom: 10px solid #eeeeee;
    }

    table {
        width: 94%;
        margin-left: 3%;
        margin-bottom: 0;
    }

    tr {
        height: 46px;
        font-size: 1.3em;
    }

    td {
        padding: 0;
        margin: 0;
        height: 46px;
        text-align: center;
        vertical-align: bottom;
    }

    p {
        margin: 0;
        padding-top: 15px;
        width: 100%;
        border-top: 1px solid gainsboro;
        text-align: center;
        font-size: 1em;
        vertical-align: bottom;
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