<template>
  <div class="home">
    <el-container>
  <el-aside width="200px">
    <div class="logo">黑马头条</div>
  </el-aside>
  <el-container>
    <el-header>
      <img src="../styles/7.png" alt="">
      <span>马哥去213</span>
      <a href="javascript:void(0)" @click="logout">退出</a>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  created(){
    // let token =localStorage.getItem('token')
    let user = localStorage.getItem('user')
  },
  methods:{
 async logout(){
  try{ 
    await this.$confirm('此操作将退出账号, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.$router.push('/login')
        this.$message.success('退出登录') 
        }
        catch(error){
          this.$message.info('已取消删除')         
          }       
        }
  

}
}
</script>

<style scoped lang="less">
.home{
  height: 100%;
  .el-container{
  height: 100%;
}
}

.el-header{
    background-color: #B3C0D1;
    // text-align: right;
    padding-right: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    span{
      margin: 10px;
    }
    a{
      color: red;
      text-decoration: none;
    }
    
  }
  
  .el-aside {
    background-color: #D3DCE6;
    .logo{
      width: 100%;
      background-color: #333;
      height: 60px;
      color: #ffffff;
      text-align: center;
      line-height: 60px;
      font-size: 30px;
    }
  }
  
  .el-main {
    background-color: #E9EEF3;
    
  }
</style>