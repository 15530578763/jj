import homemain from '@/pages/one/homemain'
import peoplestore from '@/pages/one/peoplestore'
import peoplecheckproject from '@/pages/one/peoplecheckproject'
import com from '@/pages/com'
import canvasdemo from '@/pages/one/canvasdemo'
import erreo from '@/pages/erreo'

export default [
    {
        path: '/homemain',
        name: 'homemain',
        component: homemain,
        meta: {
            title: '',
        },
    },
    {
        path: '/peoplestore',
        name: 'peoplestore',
        component: peoplestore,
        meta: {
            title: '人才库',
        },
    },
    {
        path: '/peoplecheckproject',
        name: 'peoplecheckproject',
        component: peoplecheckproject,
        meta: {
            title: '盘点项目',
        },
    },
    {
        path: '/com',
        name: 'com',
        component: com,
        meta: {
            title: '组件',
        },
    },
    {
        path: '/canvasdemo',
        name: 'canvasdemo',
        component: canvasdemo,
        meta: {
            title: 'canvasdemo',
        },
    },
    {
        path: '/erreo',
        name: 'erreo',
        component: erreo,
        meta: {
            title: '404',
        },
    },



]