<template>
  <div>
    <el-form :rules="rules" :model="form" ref="form" label-width="80px">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="form.username" ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
 data() {
      return {
        form:{
          username:'10086',
          password:'123'
        },
        rules:{
          username:[
            {required:true,message:'请输入用户名',trigger:['blur','change']},
            {pattern:/^1\d{3,5}$/,message:'用户名格式错误',trigger:['blur','change']}
          ],
          password:[
            {required:true,message:'请输入密码',trigger:'blur'},
            {min:3,max:5,message:'长度在3到5个字符',trigger:'blur'}
          ]
        }
      }
    },
    methods: {
     async login(){
      try {
         await this.$refs.form.validate()
      
       let res = await this.$axios.post('/login',this.form)
       console.log('登录信息',res.data);
       const {statusCode,message,data}=res.data
       if(statusCode==200){
          this.$message.success(message);
          localStorage.setItem('token',data.token)
          localStorage.setItem('user',JSON.stringify(data.user))
          this.$router.push('/home')
       }
       else{
         this.$message.success(message);
       }
      }
      catch(error){
        this.$message.error('校验失败')
      }
      }
    }
}
</script>

<style scoped lang="less">
.el-form{
  width: 500px;
  border: 1px solid #ccc;
  margin: 100px auto;
  .el-form-item{
    margin: 50px;
  }
}
</style>