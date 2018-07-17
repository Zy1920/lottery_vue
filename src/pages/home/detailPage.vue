<template>
  <div>
    <TitleBar :title="title" :needback="true"></TitleBar>
    <Carousel></Carousel>
    <!--显示彩票信息-->
    <!--3.开奖日期-->
    <div style="margin-top: 8px;">
      <div style="float: left;">第{{history.code}}期</div>
      <div style="float: right;">{{history.date}}</div>
    </div>

    <!--清除浮动的div-->
    <div class="clearfix"></div>


    <!--4.中奖号码-->
    <div class="row text-center" style="margin-top: 10px;" v-if="history.red!=null">
      <div class="ball-item ball-red" v-for="red in history.red.split(',')">{{red}}</div>


      <div class="ball-item ball-blue">{{history.blue}}</div>
    </div>

    <!--5.奖池金额-->
    <div style="margin-top: 14px;">
      <table class="table table-bordered">
        <thead>
        <tr style="background-color: gainsboro;">
          <td class="text-center">本期销量</td>
          <td class="text-center">奖池奖金</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="text-center" style="color: red;">{{history.sales}}</td>
          <td class="text-center" style="color: red;">{{history.poolmoney}}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!--6.中奖信息-->
    <div>
      <table class="table table-bordered">
        <thead>
        <tr style="background-color: gainsboro;">
          <td class="text-center">奖项</td>
          <td class="text-center">中奖注数</td>
          <td class="text-center">奖金</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="prizegrade in history.prizegrades">
          <td class="text-center">{{prizegrade.type}}</td>
          <td class="text-center">{{prizegrade.typenum}}</td>
          <td class="text-center">{{prizegrade.typemoney}}</td>
        </tr>
        </tbody>

      </table>
    </div>

    <MenuBar></MenuBar>
    </div>
</template>

<script>
  import TitleBar from "@/pages/common/TitleBar"
  import Carousel from "@/pages/common/Carousel"
  import MenuBar from "@/pages/common/MenuBar"
  import axios from "axios"
    export default {
        name: "detailPage",
        components:{
          TitleBar,
          Carousel,
          MenuBar
        },
        data(){
          return{
            title:"博彩详情页",
            code:this.$route.query.code,
            history:[]
          }
        },
        mounted(){
          axios.get("/api/detail?code="+this.code).then(resp=>{
            console.log(resp.data)
            this.history=resp.data.data
          })
        }

    }
</script>

<style scoped>

</style>
