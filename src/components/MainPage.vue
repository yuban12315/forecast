<template>

    <el-container>
        <ImageBanner></ImageBanner>
    </el-container>
</template>
<script>
    import ImageBanner from './ImageBanner'
    export default{
        name:'ManageCity',
        components:{
            ImageBanner
        },
        data(){
            return{
                input:''
            }
        }
    }
</script>