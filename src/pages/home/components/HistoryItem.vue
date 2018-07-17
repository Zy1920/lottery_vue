<template>
  <!--4.彩票历史记录-->
  <div class="row item" >
    <!--左边11个格子-->
    <div class="col-xs-11">
      <!--开奖日期-->
      <div class="row">
        <span style="font-size: 18px;">第{{history.code}}期</span>
        <span style="margin-left: 10px;">{{history.date}}</span>
      </div>
      <!--开奖号码-->
      <div class="row" style="margin-top: 10px;">
        <div class="ball-item ball-red" v-for="red in history.red.split(',')">{{red}}</div>

        <div class="ball-item ball-blue">{{history.blue}}</div>
      </div>
    </div>
    <!--右边1个格子-->
    <div class="col-xs-1 div-right">
      <span class="glyphicon glyphicon-chevron-right"></span>
    </div>
  </div>
</template>

<script>
    export default {
        props:["history"],
        name: "HistoryItem"
    }
</script>

<style scoped>
  .div-right{
    padding-left: 0px;
    padding-top: 30px;

  }

  .item{
    padding-left:15px;
  }

</style>
