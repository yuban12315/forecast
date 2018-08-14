<template>
    <div>sdsdsdsdsd</div>
</template>

<script>

    const weatherDataList ={"location":{"id":"WX4FBXXFKE4F","name":"北京","country":"CN","path":"北京,北京,中国","timezone":"Asia/Shanghai","timezone_offset":"+08:00"},"hourly":[{"time":"2018-08-14T15:00:00+08:00","text":"阴","code":"9","temperature":"27","humidity":"98","wind_direction":"东北","wind_speed":"15.12"},{"time":"2018-08-14T16:00:00+08:00","text":"阴","code":"9","temperature":"28","humidity":"98","wind_direction":"东北","wind_speed":"15.12"},{"time":"2018-08-14T17:00:00+08:00","text":"小雨","code":"13","temperature":"28","humidity":"98","wind_direction":"东北","wind_speed":"15.48"},{"time":"2018-08-14T18:00:00+08:00","text":"小雨","code":"13","temperature":"27","humidity":"95","wind_direction":"东北","wind_speed":"14.40"},{"time":"2018-08-14T19:00:00+08:00","text":"小雨","code":"13","temperature":"27","humidity":"92","wind_direction":"东北","wind_speed":"13.68"},{"time":"2018-08-14T20:00:00+08:00","text":"小雨","code":"13","temperature":"27","humidity":"89","wind_direction":"东北","wind_speed":"12.60"},{"time":"2018-08-14T21:00:00+08:00","text":"小雨","code":"13","temperature":"26","humidity":"90","wind_direction":"东北","wind_speed":"11.88"},{"time":"2018-08-14T22:00:00+08:00","text":"小雨","code":"13","temperature":"25","humidity":"91","wind_direction":"东北","wind_speed":"11.16"},{"time":"2018-08-14T23:00:00+08:00","text":"小雨","code":"13","temperature":"24","humidity":"92","wind_direction":"东北","wind_speed":"10.44"},{"time":"2018-08-15T00:00:00+08:00","text":"小雨","code":"13","temperature":"24","humidity":"92","wind_direction":"东北","wind_speed":"9.72"},{"time":"2018-08-15T01:00:00+08:00","text":"小雨","code":"13","temperature":"24","humidity":"91","wind_direction":"东北","wind_speed":"10.44"},{"time":"2018-08-15T02:00:00+08:00","text":"小雨","code":"13","temperature":"24","humidity":"91","wind_direction":"东北","wind_speed":"11.52"},{"time":"2018-08-15T03:00:00+08:00","text":"小雨","code":"13","temperature":"24","humidity":"90","wind_direction":"东北","wind_speed":"11.88"},{"time":"2018-08-15T04:00:00+08:00","text":"小雨","code":"13","temperature":"24","humidity":"89","wind_direction":"东北","wind_speed":"12.24"},{"time":"2018-08-15T05:00:00+08:00","text":"小雨","code":"13","temperature":"24","humidity":"88","wind_direction":"东北","wind_speed":"12.60"},{"time":"2018-08-15T06:00:00+08:00","text":"小雨","code":"13","temperature":"26","humidity":"87","wind_direction":"东北","wind_speed":"13.68"},{"time":"2018-08-15T07:00:00+08:00","text":"小雨","code":"13","temperature":"27","humidity":"86","wind_direction":"东北","wind_speed":"15.12"},{"time":"2018-08-15T08:00:00+08:00","text":"小雨","code":"13","temperature":"29","humidity":"85","wind_direction":"东北","wind_speed":"16.20"},{"time":"2018-08-15T09:00:00+08:00","text":"小雨","code":"13","temperature":"29","humidity":"81","wind_direction":"东北","wind_speed":"16.20"},{"time":"2018-08-15T10:00:00+08:00","text":"小雨","code":"13","temperature":"30","humidity":"77","wind_direction":"东北","wind_speed":"16.20"},{"time":"2018-08-15T11:00:00+08:00","text":"多云","code":"4","temperature":"30","humidity":"73","wind_direction":"东","wind_speed":"16.20"},{"time":"2018-08-15T12:00:00+08:00","text":"小雨","code":"13","temperature":"30","humidity":"73","wind_direction":"东北","wind_speed":"15.84"},{"time":"2018-08-15T13:00:00+08:00","text":"小雨","code":"13","temperature":"31","humidity":"72","wind_direction":"东北","wind_speed":"15.84"},{"time":"2018-08-15T14:00:00+08:00","text":"小雨","code":"13","temperature":"31","humidity":"71","wind_direction":"东","wind_speed":"15.84"}]}
    export default {
        name: "WeatherChart",
        data(){
            return{
                weatherDataList
            }
        }
    }
</script>

<style scoped>

</style>