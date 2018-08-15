<template>
    <div id="three-body">
        <table class="table table-condensed">
            <tbody>
            <tr v-for="item in items">
                <td class="left">{{item.id}}</td>
                <td class="center">{{item.wea}}</td>
                <td class="right">{{item.tem}}</td>
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
                item: {'id': '', 'wea': '', 'tem': ''},
                items: [
                    {id: "今天", wea: "多云转晴|优", tem: "28|19℃"},
                    {id: "明天", wea: "晴|优", tem: "27|17℃"},
                    {id: "后天", wea: "多云转雷阵雨|优", tem: "28|20℃"}
                ]
            }
        }
    }
</script>
<style scoped>
    #three-body {
        width: 100%;
        height: 200px;
        border-bottom: 10px solid #eeeeee;
    }

    table {
        width: 90%;
        margin-left: 5%;
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
        width: 20%;
    }

    .center {
        width: 50%;
    }

    .right {
        width: 30%;
    }
</style>