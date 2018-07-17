<template>
    <div >
      <TitleBar :title="title" ></TitleBar>
      <Carousel></Carousel>
      <HistoryList :data="HistoryList"></HistoryList>
      <MenuBar></MenuBar>
    </div>
</template>

<script>
  import TitleBar from "@/pages/common/TitleBar"
  import Carousel from "@/pages/common/Carousel"
  import HistoryList from "@/pages/home/components/HistoryList"
  import MenuBar from "@/pages/common/MenuBar"
  import axios from "axios"

    export default {
        name: "homePage",
        components:{
          TitleBar,
          Carousel,
          HistoryList,
          MenuBar
        },
        data(){
          return{
            title:"博彩首页",
            HistoryList:[],
            index:"3"
          }
        },
        mounted(){
          console.log("发送请求。。。")
          axios.get("/api/index").then(resp=>{
            console.log(resp.data)
            this.HistoryList=resp.data.data
          })
        }



    }
</script>

<style scoped>

</style>
