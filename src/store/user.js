//保存数据的地方
const state={
  user:null
}
//对外提供获取数据的计算属性，对外暴露的getter方法
const getters={
  //判断用户是否登陆
  isLogin:state=>state.user!=null,
  //获取用户信息
  user:state=>state.user
}

//真正持久去修改数据的
const mutations={
  mSetUser:(state,user)=>{
    state.user=user;
  }
}

const actions={
  //保存用户信息
  setUser:(context,user)=>{
    context.commit("mSetUser",user)
  }
}



export default {
  state,getters,actions,mutations
}
