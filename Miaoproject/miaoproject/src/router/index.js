//该文件专门用于创建整个应用的路由器
import { createRouter, createWebHashHistory } from 'vue-router'
import about_1 from '../components/about_1.vue'
import shop from '../components/miao_shop.vue'

const routes = [
    {  
      name:'about1',
      path: '/about_1',
      component: about_1,
    //   children: [{ path: '', component: }],
    }
    ,
    {  
      name:'shop',
      path: '/miao_shop',
      component: shop,
    //   children: [{ path: '', component: }],
    }
  ]
  
  export default createRouter({
  history: createWebHashHistory(),
  routes,
  })