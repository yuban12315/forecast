<template>
	<el-row>
		<el-col>
			<el-input v-model="input" placeholder="请输入内容"></el-input>
		</el-col>
	</el-row>
</template>
<script>

	export default{
		name:'ManageCity',
        data(){
            return{
                input:''
            }
        }
	}
</script>