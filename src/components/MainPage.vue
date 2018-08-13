<template>

    <el-container>
        1
        <ImageBox></ImageBox>
    </el-container>
</template>
<script>
    import ImageBox from './ImageBox'
    export default{
        name:'ManageCity',
        components:{
          ImageBox
        },
        data(){
            return{
                input:''
            }
        }
    }
</script>