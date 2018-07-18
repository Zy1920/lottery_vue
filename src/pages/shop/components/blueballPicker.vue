<template>
  <div>
    <div class="col-xs-ball" v-for="ball in balls" @click="handleBlueClick(ball)">
      <div class="ball-item ball-blue" :class="{'ball-blue-selected':ball.selected}">{{ball.number}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "blueballPicker",
        props:["randomBlue"],
        data(){
          return{
            balls:[],
            selectedBlueBall:null
          }
        },
      watch:{
        //let item = {redBalls:this.randomRedBalls,blueBall:this.randomBlueBall,count:1}
        randomBlue(newBlue,oldBlue){
          console.log(newBlue)

          // 将篮球的状态进行更新  "16"
          this.balls.forEach((item)=>{
            if (item.number===newBlue){
              item.selected=true;
              this.selectedBlueBall=item
            } else {
              item.selected=false;
            }
          })

          this.$emit("BlueBallChange",this.selectedBlueBall.number)
          }
        },
        methods:{
          handleBlueClick(ball){
            if (ball.selected) {
              ball.selected=false
              this.selectedBlueBall=null
              this.$emit("BlueBallChange",null)
            }else{
              ball.selected=true
              if (this.selectedBlueBall)
              this.selectedBlueBall.selected=false
              this.selectedBlueBall=ball
              this.$emit("BlueBallChange",ball.number)
            }
          }
        },
        mounted(){
          for(let i=0;i<16;i++){
            if (i<10){
              i="0"+i
            }
            this.balls.push({number:i.toString(),selected:false})
          }
        }
    }
</script>

<style scoped>

</style>
