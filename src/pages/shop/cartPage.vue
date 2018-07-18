<template>
  <div>
    <!--标题-->
    <title-bar :title="title" :needback="needback"></title-bar>
    <!--轮播图-->
    <carousel></carousel>
    <lottery-info></lottery-info>
    <!--三个按钮组-->
    <!--清除浮动的div-->
    <div class="clearfix"></div>

    <!--按钮组-->
    <div class="row" style="margin-bottom: 10px;">
      <div class="col-xs-4">
        <button type="button" class="btn btn-default" @click="handleClick">+手动选号</button>
      </div>
      <div class="col-xs-4">
        <button type="button" class="btn btn-default" @click="handleRandom">+机选一注</button>
      </div>
      <div class="col-xs-4">
        <button type="button" class="btn btn-default" @click="handleClear">清空列表</button>
      </div>
    </div>

    <!--所有购物项-->
    <cart-item v-for="cartItem in getCart" :item="cartItem"></cart-item>

    <!--主要是解决页面显示不完整-->
    <div style="margin-bottom: 58px;"></div>

    <!--5.底部菜单栏-->
    <div class="menu">
      <div class="col-xs-12 menu-item" style="height: 50px;line-height: 50px;">
        <p>立即付款 {{totalMoney}}元</p>
      </div>
    </div>


  </div>
</template>

<script>



  import CartItem from "./components/cartItem";
  import TitleBar from "../common/TitleBar";
  import Carousel from "../common/Carousel";
  import LotteryInfo from "./components/lotteryInfo";
  import {mapGetters,mapActions} from "vuex";
  import BallUtils from "../../utils/BallUtils";


    export default {
        name: "cartPage",
        components:{
          LotteryInfo,
          Carousel,
          TitleBar,
          CartItem,
        },
        data(){
          return{
            title:"购物车页面",
            needback:true
          }
        },
        methods:{
          ...mapActions(["clearCart","addToCart"]),
          handleClick(){
            this.$router.go(-1)
          },
          handleRandom(){
            let redBalls=BallUtils.randomRed();
            let blueBalls=BallUtils.randomBlue();
            //let item = {redBalls:this.redballs,blueBall:this.blueball,count:1};
            let data={redBalls:redBalls,blueBall:blueBalls,count:1};
            this.addToCart(data)

          },
          handleClear(){
            this.clearCart()
          }
        },
        computed:{
          ...mapGetters(["getCart","totalMoney"])
        }



    }
</script>

<style scoped>

</style>
