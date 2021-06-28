import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import home from '@/pages/home'

import one from './one'

// 404错误页面
import erreo from '@/pages/erreo'

Vue.use(Router)
const originalPush = Router.prototype.push
    Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: login,
            meta: {
                title: '登录'
            }
        }, {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                title: '登录'
            }
        }, {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                title: '首页'
            },
            children: [
                ...one,
            ]
        },
        
        {
            path: '/erreo',
            name: 'erreo',
            component: erreo,
            meta: {
                title: 'erreo',
            },
        },
        {
            path: '*',
            name: 'erreo',
            component: erreo,
            meta: {
                title: 'erreo',
            },
        },
        
    ]
})