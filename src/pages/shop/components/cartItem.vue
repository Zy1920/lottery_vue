<template>
  <!--购物项内容-->
  <div class="row" style="padding-top: 10px;padding-bottom: 10px;border: 1px solid #E5E5E5;">
    <div class="col-xs-1" style="padding-left: 10px;padding-top: 18px;" >
      <!--删除的图标-->
      <span class="glyphicon glyphicon-remove-circle" @click="deleteOne(item)"></span>
    </div>
    <div class="col-xs-10" style="padding-right: 0px;">
      <div>
        <div class="ball-item ball-red" v-for="red in item.red.split(',')" >{{red}}</div>
        <div class="ball-item ball-blue">{{item.blue}}</div>
      </div>
      <div style="margin-top: 5px;">单式{{item.count}}注 {{item.count*2}}元</div>
    </div>
    <div class="col-xs-1" style="padding-left: 10px;padding-top: 18px;" >
      <!--小箭头-->
      <span class="glyphicon glyphicon-chevron-right"></span>
    </div>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        props:["item"],
        name: "cartItem",
        methods:{
          ...mapActions(["deleteItem"]),
          deleteOne(item){
            this.deleteItem(item)
          }
        }
    }
</script>

<style scoped>
  .ball-item{
    margin-right: 5px;
  }
</style>
