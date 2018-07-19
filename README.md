# lottery_vue

### 1. 项目目录结构准备

我们可以自定义目录出来,例如

pages : 所有的页面组件放在这里

pages/common: 页面所有的公用组件

utils : 放置工具类

store : 放置vuex数据仓库



### 2. 安装JQuery和Bootstrap

> 安装JQuery

由于bootstrap依赖Jquery,所以需要先安装jquery,这里版本使用1.11.3

```
npm install jquery@1.11.3 --save
```

找到build/webpack.base.conf.js文件中

​	在文件头部添加引用

```
const webpack = require('webpack');
```

​	在文件所有配置对象的末尾增加如下配置

```
plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    })
  ]
```

> 安装Bootstrap

```
 npm install bootstrap@3.3.7 --save
```

引入bootstrap

在src/main.js文件的顶部加入bootstrap的主要文件引用

```
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
```

导入我们之前案例中编写的lottery.css



### 3.博彩首页

- 通用组件：TitleBar组件、Swiper轮播图组件、MenuBar组件的提取

- 组件之间的跳转：1.this.$router.push(path)——编程式跳转  2.router-link 申明式跳转

- #### axios发送异步请求axios，查询history数据####

  - 安装

  ```
  npm install axios
  ```

  - 使用

  ```javascript
  axios.get(url[, config])
  axios.delete(url[, config])
  axios.post(url[, data[, config]])
  axios.put(url[, data[, config]])
  //发生get请求
  axios.get('/user?ID=12345')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  // 可选地，上面的请求可以这样做
  axios.get('/user', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  发送post请求
  axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  ```

  - LotteryDetail组件


  - 路由的配置

  ```
  {
        path: '/detail/:code',
        name: 'LotteryDetail',
        component: LotteryDetail,
        props:true
      }
  ```



### 4.用户页面

#### Vuex的使用

——用于非父子组件之间的数据传递共享

https://vuex.vuejs.org/zh/

演示demo

```
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    all:['aa','bb','cc']
  },
  actions:{ //action中可执行异步操作
    action1(context,msg){
      console.log('action..'+msg);
      context.commit('mutations1',msg);
    }
  },
  mutations:{ //mutations中不能执行异步操作
    mutations1(state){
      state.all=['dd','ee']
    }
  }
});

注意：根Vue实例中需要引入store
在组件中,我们就可以这样来修改这里面的数据:
this.$store.dispatch("action1",'hahaha');
```



##### 定义Store

```
import Vue from 'vue';
import VueX from 'vuex';
import User from './user'
//使用插件
Vue.use(VueX);

export default new VueX.Store({
  modules:{
    User 
  }
});
```

##### 常用的辅助函数:

```
import {mapActions,mapGetters} from 'vuex'
在computed中使用
	...mapGetters(['对应getters中的属性'])
在methods中使用
	...mapActions(['对应action的名字'])
```

vuex总结

vuex主要用于管理数据，方便vue的渲染

- state：{} //主要是存放数据
- getters：{} //对外提供访问数据的方法
- actions：{}//对外提供的修改数据的方法
- mutations：{}//真正修改数据的地方，vue提供给我们是为了框架跟踪数据变化，从而去渲染。



###5.选号页面

#### 红球选号区域

我们首先来解决一下页面上球的显示问题,红球总共33个,如果我们直接写死的话,重复代码会很多,我们考虑来初始化这33个红球,示例代码如下

```
这里我们选用created这个生命周期钩子
created(){
          //初始化页面中的球数据
          for(let i = 1; i<=33; i++){
            let red = i;
            if(i < 10){
              red ="0"+i;
            }
            //每一个被初始化出来的红球都是没有被选中的状态
            this.balls.push({number:red.toString(),selected:false});
          }
 }
```

##### 某个红球被选中

1. 先判断当前球是否已经被选中
   1. 若被选中,则取消选中状态
      1. 将当前红球,从所有已选中的球中删除掉
   2. 若未被选中,则先判断当前选中的红球是否小于6个
      1. 若小于6个
         1. 修改当前求的状态
         2. 将当前球保存到所有选中的球中
      2. 若已经等于6个红球了
         1. 提示用户最多只能选择6个红球
2. 通知父组件,红球选中的数据发生了改变

**注意:我们这里只通知父组件选中球的信息,如["01","03","05","08","09","32"]**

```
	handleRedClick(ball){
             //1.先判断当前球是否已经被选中
             if(ball.selected){
               //如果当前球已经被选中,则取消选中
               ball.selected = false;
               //将当前的球从被选中的数组中删除掉
               let index = this.selectedRedBalls.indexOf(ball.number);
               //删除元素
               this.selectedRedBalls.splice(index,1);
             }else{
               //判断当前选中的球是否小于6个
               if(this.selectedRedBalls.length < 6){
                 //选中当前球
                 ball.selected = true;
                 this.selectedRedBalls.push(ball.number);
               }else{
                 alert('红球最多只能选择6个')
               }
             }
            //通知父组件数据发生变化了
             this.$emit('onRedSelected',this.selectedRedBalls);
           }
```

#### VueX存储购物车

这里我们定义购物车里面的内容为如下格式:

```
{red:"01,03,05,08,09,32",blue:"13",count:2}
```

示例代码如下

```
//从浏览器内置的存储去获取数据
let jsonStr = localStorage.getItem("carts");
//将json字符串转成json数组
let defaultCarts = JSON.parse(jsonStr);

//定义保存数据的地方
const state={
  carts:defaultCarts // {red:'01,02,03,04,05,06',blue:"16",count:1}
}
//对外提供访问数据的方法
const getters={
  cartSize:(state)=>state.carts.length,
  getCarts:(state)=>state.carts,
  totalMoney:(state)=>{

    let totalCount = 0;
    state.carts.forEach((item)=>{
      totalCount+=item.count;
    });
    return totalCount*2;

  }
}

//对外提供获取数据的方法
const actions={
  // {red:'01,02,03,04,05,06',blue:"16",count:1}
  // 传递过来的数据是 {redBalls:this.redBalls,blueBall:this.blueBall,count:1};
  addToCart(context,data){
    console.log("actions中addToCart被调用");
    console.log("action提交数据给mutations去修改")
    let redBalls = data.redBalls;

    let red = "";
    redBalls.forEach((item)=>{
      red +=","+item;
    });
    red = red.substr(1);

    //console.log(red);

    let cartItem = {red:red,blue:data.blueBall,count:data.count};

    context.commit('mAddToCart',cartItem);
  },
  //清空购物车
  clearCarts(context){
    context.commit('mClearCarts');
  },

  //删除某一条记录
  deleteItem(context,cartItem){
    //action调用mutations去真的删除
    context.commit('mDeleteItem',cartItem);
  }

}
//跟踪数据变化的,vue需要的, 真正修改数据
const mutations = {
  mAddToCart(state,cartItem){

    console.log("mutations中修改数据:"+cartItem);
    state.carts.push(cartItem);

    //将内存中的数据保存到浏览器本地
    localStorage.setItem("carts",JSON.stringify(state.carts))
  },

  //真正清空数组的地方
  mClearCarts(state){
    state.carts=[];

    localStorage.clear();
  },
  mDeleteItem(state,cartItem){
    let index = state.carts.indexOf(cartItem);

    //删除记录
    state.carts.splice(index,1);

    localStorage.setItem("carts",JSON.stringify(state.carts))
  }
}

//导出文件的所有内容
export default {
  state,getters,actions,mutations
}


```







### 6.购物车页面

购物车页面购物项的显示及手选 机选 清空功能的实现





###7.生产环境打包

项目中我们编写的vue文件并不能直接丢给服务器。

vue-cli为我们提供了一键打包的功能，并自动为我们进行了资源压缩，合并，小图进行base64，css编译等很多功能，只需要执行以下命令即可：

```bash
npm run build
```

将打包出来的dist目录下的内容，丢给服务器人员即可。