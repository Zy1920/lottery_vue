<template>
  <div>
    <HistoryItem v-for="history in data" :key="history.code" :history="history" @click.native="goToDetail('/detail?code='+history.code)"></HistoryItem>
  </div>
</template>

<script>
    import HistoryItem from "./HistoryItem"
    export default {
        name: "HistoryList",
        props:["data"],
        components:{
          HistoryItem
        },
        methods:{
          goToDetail(path){
            console.log(path)
            this.$router.push(path)
          }
        }

    }
</script>

<style scoped>

</style>
