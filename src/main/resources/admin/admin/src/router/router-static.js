import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import ceshishuju from '@/views/modules/ceshishuju/list'
    import xitonggonggao from '@/views/modules/xitonggonggao/list'
    import xinlingzhuanlan from '@/views/modules/xinlingzhuanlan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yaliceshi from '@/views/modules/yaliceshi/list'
    import chat from '@/views/modules/chat/list'
    import discussxinlizixunshi from '@/views/modules/discussxinlizixunshi/list'
    import xinlizixunshi from '@/views/modules/xinlizixunshi/list'
    import zixunshiyuyue from '@/views/modules/zixunshiyuyue/list'
    import config from '@/views/modules/config/list'
    import xiaozhitiao from '@/views/modules/xiaozhitiao/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/ceshishuju',
        name: '测试数据',
        component: ceshishuju
      }
          ,{
	path: '/xitonggonggao',
        name: '系统公告',
        component: xitonggonggao
      }
          ,{
	path: '/xinlingzhuanlan',
        name: '心灵专栏',
        component: xinlingzhuanlan
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/yaliceshi',
        name: '压力测试',
        component: yaliceshi
      }
          ,{
	path: '/chat',
        name: '聊天',
        component: chat
      }
          ,{
	path: '/discussxinlizixunshi',
        name: '心理咨询师评论',
        component: discussxinlizixunshi
      }
          ,{
	path: '/xinlizixunshi',
        name: '心理咨询师',
        component: xinlizixunshi
      }
          ,{
	path: '/zixunshiyuyue',
        name: '咨询师预约',
        component: zixunshiyuyue
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/xiaozhitiao',
        name: '小纸条',
        component: xiaozhitiao
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
