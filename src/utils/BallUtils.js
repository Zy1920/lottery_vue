//包含最小值和最大值
function random(min,max){
  let range = max - min;
  let rand = Math.random()*range;

  return min + Math.round(rand);
}
//随机产生一个红球
function rdmOneRed(){
  let red = random(1,33);
  if(red<10){
    red = '0'+red;
  }
  return red.toString();
}
//随机产生一个蓝球
function rdmOneBlue(){
  let blue = random(1,16);
  if(blue<10){
    blue = '0'+blue;
  }
  return blue.toString();
}
//随机产生一组红球
let BallUtils = {
  randomRed(){
    let size = 6;
    let arr = [];

    //只要数组的容量小于6,循环就需要进行下去
    while(arr.length<6){
      //随机产生一个红球 06
      let red = rdmOneRed();
      //判断是否包含红球
      let index = arr.indexOf(red);
      if(index == -1){
        arr.push(red);
      }
    }
    //对结果进行排序
    arr.sort(function(o1,o2){
      return o1 - o2;
    })

    return arr;
  },
  randomBlue(){
    let blue = rdmOneBlue();
    return blue;
  }
}

export default BallUtils;
