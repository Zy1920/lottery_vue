let jsonStr=localStorage.getItem("cart")
let defalutCart=JSON.parse(jsonStr)
if (defalutCart==null){
  defalutCart=[]
}

const state={
  cart:defalutCart
}

const getters={
  getCart:(state)=>state.cart,
  cartSize:(state)=>state.cart.length,
  totalMoney:(state)=>{
    let totalCount=0
    state.cart.forEach((item)=>{
      totalCount+=item.count
    })
    return totalCount*2
  }
}

const actions={
  addToCart(context,data){
    console.log("actions中addToCart被调用");
    console.log("action提交数据给mutations去修改")
    let redBalls = data.redBalls;
    let red = "";
    redBalls.forEach((item)=>{
      red +=","+item;
    });
    red = red.substr(1);
    let cartItem = {red:red,blue:data.blueBall,count:data.count};
    context.commit('mAddToCart',cartItem);
  },
  clearCart(context){
    context.commit("mClearCart");
  },
  deleteItem(context,item){
    context.commit("mDeleteItem",item);
  }
}

const mutations={
    mAddToCart(state,cartItem){
      console.log("mutations中修改数据:"+cartItem);
      state.cart.push(cartItem);
      localStorage.setItem("cart",JSON.stringify(state.cart))
    },
    mClearCart(state){
      state.cart=[]
      localStorage.clear()
    },
    mDeleteItem(state,item){
      let index=state.cart.indexOf(item)
      state.cart.splice(index,1)
      localStorage.setItem("cart",JSON.stringify(state.cart))
    }
}

export default {
  state,getters,actions,mutations
}
