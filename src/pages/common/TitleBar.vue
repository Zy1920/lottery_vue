<template>
    <div class="row">
        <div class="col-xs-12 title">
          <div class="div-back" v-if="needback" @click="handleBack">&lt;返回</div>
          {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleBar",
        props:["title","needback"],
        methods:{
          handleBack(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
    .div-back{
      position: absolute;
    }
</style>
