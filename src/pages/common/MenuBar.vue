<template>
  <!--5.底部菜单栏-->
  <div class="div-height">
    <div class="menu" >
      <div class="col-xs-4 menu-item" >
        <span class="glyphicon glyphicon-home" :class="{'menu-item-activied':index=='1'}" @click="handleClick('1')"></span>
        <p>首页</p>
      </div>
      <div class="col-xs-4 menu-item"  >
        <span class="glyphicon glyphicon-shopping-cart" :class="{'menu-item-activied':index=='2'}" @click="handleClick('2')"></span>
        <p>选号</p>
      </div>
      <div class="col-xs-4 menu-item">
        <span class="glyphicon glyphicon-user" :class="{'menu-item-activied':index=='3'}" @click="handleClick('3')"></span>
        <p>我</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MenuBar",
        props:{
          index:{
            type:String,
            default:"1"
          }
        },
        methods:{
          handleClick(index){
            console.log(index)
            switch (index){
              case "1":
                //跳转去首页
                this.$router.push("/")
                break
              case "2":
                //跳转去选号页面
                break
              case "3":
                //跳转去个人页面
                this.$router.push("/user")
                break
            }
          }

        }


    }
</script>

<style scoped>
  .div-height{
    height: 50px;
  }

</style>
