<template>
  <div>
    <div class="col-xs-ball  ball-div" v-for="ball in balls" @click="handleRedClick(ball)">
      <div class="ball-item ball-red" :class="{'ball-red-selected':ball.selected}" >{{ball.number}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "redballPicker",
        props:["randomRed"],
        data(){
        return {
          balls:[], //{number:i,selected:false}
          selectedRedBalls:[] // ["01","03"]
         }
        },
        watch:{
          //let item = {redBalls:this.randomRedBalls,blueBall:this.randomBlueBall,count:1}
          randomRed(newRed,oldRed){
            console.log(newRed)
            this.selectedRedBalls=[];
            this.selectedRedBalls=newRed;
            this.balls.forEach((item)=>{
              let index=this.selectedRedBalls.indexOf(item.number)
              if (index!=-1) {
                item.selected=true
              }else {
                item.selected=false
              }
            })
            this.$emit('ReadBallsChange',this.selectedRedBalls);
          }
        },
        methods:{
          handleRedClick(ball){
            if (ball.selected){
              ball.selected=false;
              let index=this.selectedRedBalls.indexOf(ball.number)
              this.selectedRedBalls.splice(index,1)
            } else {
              if (this.selectedRedBalls.length<6){
                  ball.selected=true
                  this.selectedRedBalls.push(ball.number)
              }else {
                alert("最多只能选择6个球")
              }
            }
            this.$emit('ReadBallsChange',this.selectedRedBalls);
          }
        },

        mounted(){
          for(let i=1;i <= 33;i++){
            if(i<10){
              i = "0"+i;
            }
          this.balls.push({number:i.toString(),selected:false});
          }
      }
    }
</script>

<style scoped>
  .ball-div{
    float: left;
  }
</style>
