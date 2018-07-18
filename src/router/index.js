import Vue from 'vue'
import Router from 'vue-router'
import homePage from "@/pages/home/homePage"
import detailPage from "@/pages/home/detailPage"
import userPage from "@/pages/user/userPage"
import loginPage from "@/pages/user/loginPage"
import cartPage from "@/pages/shop/cartPage"
import selectPage from "@/pages/shop/selectPage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path:"/detail",
      name: 'detailPage',
      component: detailPage
    },
    {
      path:"/user",
      name: 'userPage',
      component: userPage
    },
    {
      path:"/login",
      name: 'loginPage',
      component: loginPage
    },
    {
      path:"/cart",
      name: 'cartPage',
      component: cartPage
    },
    {
      path:"/select",
      name: 'selectPage',
      component: selectPage
    }

  ]
})
