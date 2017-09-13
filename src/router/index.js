import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import MorePage from '@/pages/more'
import JtkPage from '@/pages/morepages/jtkpage'
import BhkPage from '@/pages/morepages/bhkpage'
import XrzkPage from '@/pages/morepages/xrzkpage'
import FxkPage from '@/pages/morepages/fxkpage'
import AllPage from '@/pages/morepages/allpage'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: IndexPage
        },
        {
            path: '/more',
            component: MorePage,
            redirect: '/more/all',
            children: [{
                    path: 'all',
                    component: AllPage
                },
                {
                    path: 'jtk',
                    component: JtkPage
                },
                {
                    path: 'bhk',
                    component: BhkPage
                },
                {
                    path: 'xrzk',
                    component: XrzkPage
                },
                {
                    path: 'fxk',
                    component: FxkPage
                }
            ]
        }
    ]
})