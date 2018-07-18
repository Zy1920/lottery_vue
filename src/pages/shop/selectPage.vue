<template>
  <!--放置这个组件的模版-->
  <div>
    <!--title bar-->
    <title-bar :title="title" :needback="needback"></title-bar>
    <!--本期的奖池信息-->
    <lottery-info></lottery-info>

    <div style="color:darkgray">请选择6个红球,1个蓝球</div>

    <!--拆出红球组件-->
    <redball-picker :randomRed="randomRedBalls" @ReadBallsChange="handleRedballChange"></redball-picker>

    <!--清除浮动-->
    <div class="clearfix"></div>

    <!--蓝球组件-->
    <blueball-picker :randomBlue="randomBlueBall" @BlueBallChange="handleBlueballChange"></blueball-picker>
    <!--按钮-->
    <!--清除浮动-->
    <div class="clearfix"></div>

    <!--添加的按钮-->
    <div style="margin-top: 10px;">
      <input type="button" @click="handleAdd" value="添加" class="btn btn-default pull-right" />
    </div>

    <!--清除浮动-->
    <div class="clearfix"></div>

    <!--机选幸运号的按钮-->
    <div style="margin-top: 10px;">
      <input  type="button"  value="机选幸运号" id="btn_random"  class="btn btn-default pull-right" @click="random"/>
      <select v-model="num" class="form-control pull-right" style="width: 60px;display: inline-block;">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>

    <!--主要是解决页面显示不完整-->
    <div style="margin-bottom: 58px;height: 58px;"></div>

    <!--5.底部菜单栏-->
    <div class="menu">
      <div class="col-xs-6 menu-item" @click="goToCart" >
        <span class="glyphicon glyphicon-shopping-cart"></span>
        <span class="badge">{{cartSize}}</span>
        <p>购物车</p>
      </div>
      <div class="col-xs-6 menu-item">
        <span class="glyphicon glyphicon-save"></span>
        <p>立即投注</p>
      </div>

    </div>

  </div>
</template>

<script>
    import TitleBar from "../common/TitleBar";
    import LotteryInfo from "./components/lotteryInfo";
    import redballPicker from "./components/redballPicker";
    import blueballPicker from "./components/blueballPicker";
    import {mapActions,mapGetters} from "vuex";
    import BallUtils from '@/utils/BallUtils'


    export default {
        name: "selectPage",
        components: {
          blueballPicker,
          redballPicker,
          LotteryInfo,
          TitleBar
        },
        data(){
          return{
            title:"选号页面",
            needback:true,
            num:1,
            blueball:null,
            redballs:null,
            randomRedBalls:null,
            randomBlueBall:null,
          }
        },
        methods:{
          ...mapActions(["addToCart"]),
          handleBlueballChange(blueball){
            this.blueball=blueball
            console.log(blueball)
          },
          handleRedballChange(redballs){
            this.redballs=redballs
            console.log(redballs)
          },
          handleAdd(){
            console.log(this.redballs+" "+this.blueball)
            let item = {redBalls:this.redballs,blueBall:this.blueball,count:1};
            this.addToCart(item)
          },
          goToCart(){
            this.$router.push("/cart")
          },
          random(){
            console.log(this.num)
            for (let i=0;i<this.num;i++){
              this.randomRedBalls=BallUtils.randomRed();
              this.randomBlueBall=BallUtils.randomBlue();
              let item = {redBalls:this.randomRedBalls,blueBall:this.randomBlueBall,count:1};
              this.addToCart(item);
              console.log(item)
            }
          }


        },
        computed:{
          ...mapGetters(['cartSize'])
        }

    }
</script>

<style scoped>
  /*组件的样式*/
  .badge{
    background-color: red;
    position: absolute;
    top: -10px;
  }
</style>
