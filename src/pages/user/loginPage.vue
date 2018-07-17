<template>
  <div>
    <!--标题栏-->
    <title-bar title="登录页面"></title-bar>
    <!--登录的标蓝-->
    <div class="row" style="margin-top: 32px;">
      <!--空列-->
      <div class="col-xs-1"></div>
      <!--内容部分-->
      <div class="col-xs-10">
        <!--2.登录注册的标题-->
        <div class="row">
          <div class="col-xs-6 text-center" style="color: green;">登录</div>
          <div class="col-xs-6 text-center" onclick="location.href='03-注册页面.html'" >注册</div>
        </div>

        <!--3.水平分割线-->
        <hr style="border: 2px solid gainsboro;" />

        <!--4.表单输入项-->
        <div class="form-group">
          <input type="text" v-model="email" class="form-control" placeholder="请输入您的邮箱...">
        </div>
        <!--5.密码-->
        <div class="form-group">
          <input type="password" v-model="password" class="form-control" placeholder="请输入您的密码...">
        </div>


        <!--9.登陆-->
        <div class="form-group">
          <input type="button" @click="handleLogin()" class="form-control btn btn-success" value="登录"  >
        </div>

        <!--跳转去登录-->
        <div style="margin-top: 15px;">
          <a href="#" style="color: green;">忘记密码</a>&nbsp;|&nbsp;<a href="03-注册页面.html" style="color: green;">去注册</a>
        </div>

      </div>
      <!--空列-->
      <div class="col-xs-1"></div>
    </div>
  </div>
</template>

<script>
    import TitleBar from "@/pages/common/TitleBar"
    import axios from "axios"
    import {mapActions} from "vuex"
    export default {
        name: "loginPage",
        components:{
          TitleBar
        },
        data(){
          return{
            email:"",
            password:""
          }
        },
        methods:{
          ...mapActions(["setUser"]),
          handleLogin(){
            axios.get("/api/login",{params:{email:this.email,password:this.password}}).then(resp=>{
              console.log(resp.data.data)
              this.setUser(resp.data.data)
              this.$router.push("/user")
            })
          }
        }


    }
</script>


<style scoped>

</style>
