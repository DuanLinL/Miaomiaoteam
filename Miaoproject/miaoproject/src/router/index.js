//该文件专门用于创建整个应用的路由器
import { createRouter, createWebHashHistory } from 'vue-router'
import about_1 from '../components/about_1.vue'

const routes = [
    {  
      name:'about1',
      path: '/about_1',
      component: about_1,
    //   children: [{ path: '', component: }],
    }
    
  ]
  
  export default createRouter({
  history: createWebHashHistory(),
  routes,
  })