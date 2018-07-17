<template>
    <div class="row">
        <div class="col-xs-12 title">
          <div class="div-back" v-if="needback">&lt;返回</div>
          {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleBar",
        props:["title","needback"]
    }
</script>

<style scoped>
    .div-back{
      position: absolute;
    }
</style>
