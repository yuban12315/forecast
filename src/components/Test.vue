<template>
    <div>{{msg}}</div>
</template>

<script>

    import {string2arr,arr2string} from '../assets/util'

    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            //this.$localStorage.set('name','test msg')
            //this.msg=this.$localStorage.get('name')
            //this.msg=this.storage.get('name')
        },
        methods: {

        },
        created(){
            let data=string2arr(this.$localStorage.get('cityName'))

            this.msg=data
        }
    }
</script>

<style scoped>

</style>