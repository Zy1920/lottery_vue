<template>
  <div>
    <TitleBar :title="title"></TitleBar>

    <!--用户信息栏-->
    <div class="row">
      <div class="col-xs-4">
        <img src="img/icon.jpg" alt="" class="img-circle img-thumbnail" style="width:80px;height:80px" />
      </div>
      <div class="col-xs-8" style="padding-top: 22px;padding-left: 5px;">
        <p style="font-size: 16px;">{{user.username}}</p>
        <p style="font-size: 14px;">手机号:{{user.mobile}}</p>
      </div>
    </div>

    <!--水平分割线-->
    <hr />

    <!--今日幸运中奖号码-->
    <div class="row">
      <div class="col-xs-12" style="color: red;margin-bottom: 9px;">
        您今日幸运中奖号码为:
      </div>

      <div class="col-xs-12 text-center" style="height:49px;">
        <div class="ball-item ball-red">01</div>
        <div class="ball-item ball-red">03</div>
        <div class="ball-item ball-red">08</div>
        <div class="ball-item ball-red">12</div>
        <div class="ball-item ball-red">23</div>
        <div class="ball-item ball-red">29</div>
        <div class="ball-item ball-blue">15</div>
      </div>

      <div class="col-xs-offset-7 col-xs-2">
        <button class="btn btn-default">购买立中大奖</button>
      </div>
    </div>

    <!--水平分割线-->
    <hr />

    <!--累计中奖次数-->
    <div class="row">
      <div class="col-xs-6">
        累计中奖次数:<span style="color:red;font-size: 14px;">1024</span>
      </div>
      <div class="col-xs-6">
        累计中奖金额:<span style="color:red">512万</span>
      </div>
    </div>
    <!--水平分割线-->
    <hr />

    <!--账户余额-->
    <div class="row">
      <div class="col-xs-12">
        账户余额:<span style="color:red;font-size: 14px;">{{user.money}}元</span>
      </div>
    </div>
    <!--水平分割线-->
    <hr />

    <!--我的订单-->
    <div class="row">
      <div class="col-xs-12">
        我的订单
      </div>
    </div>
    <!--水平分割线-->
    <hr />

    <!--基本信息-->
    <div class="row">
      <div class="col-xs-12">
        基本信息
      </div>
    </div>
    <!--水平分割线-->
    <hr />

    <!--设置信息-->
    <div class="row">
      <div class="col-xs-12">
        设置
      </div>
    </div>
    <!--水平分割线-->
    <hr />

    <!--底部菜单栏-->
    <menu-bar index="3"></menu-bar>
  </div>
</template>

<script>
    import TitleBar from "@/pages/common/TitleBar"
    import MenuBar from "@/pages/common/MenuBar"
    import {mapGetters} from 'vuex'
    export default {
        name: "userPage",
        components:{
          TitleBar,
          MenuBar
        },
        data(){
          return{
            title:"用户信息",
            name:this.$store.state.username
          }
        },
      computed:{
        ...mapGetters(["user"])
      }
    }
</script>

<style scoped>

</style>
