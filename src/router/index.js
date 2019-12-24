import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // 登录
    {
        path: '/',
        name: 'signIn',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/signIn.vue')
    },
    // 内容
    {
        path: '/content',
        name: 'content',
        component: () => import('../views/content/contentIndex.vue'),
        children: [
            // 首页
            {
                path: 'home',
                component: () => import('../views/content/home.vue')
            },
            // 我的作品
            {
                path: 'myWork',
                component: () => import('../views/content/myWork/index.vue'),
                children: [
                    // 我的作品-图片展示形式
                    {
                        path: 'myWorkImg',
                        component: () =>
                            import('../views/content/myWork/myWorkImg.vue')
                    }
                ]
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
