//保存数据的地方
const state={
  user:null
}
//对外提供获取数据的计算属性，对外暴露的getter方法
const getter={
  //判断用户是否登陆
  isLogin:state=>state.user!=null,
  //获取用户信息
  user:state=>state.user
}

const action={
  //保存用户信息
  setUser:(context,user)=>{
    context.commit("mSetUser",user)
  }
}

//真正持久去修改数据的
const mutation={
  mSetUser:(state,user)=>{
    state.user=user;
  }
}

export default {
  state,getter,action,mutation
}
