import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // 登录
    {
        path: '/signIn',
        name: 'signIn',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/signIn.vue')
    },
    // 内容
    {
        path: '/',
        name: 'content',
        component: () => import('../views/content/contentIndex.vue'),
        children: [
            // 工作台
            {
                path: 'workbench',
                component: () => import('../views/content/workbench.vue')
            },
            // 营销内容
            {
                path: 'marketing-content',
                component: () =>
                    import('../views/content/marketing-content/index.vue'),
                children: [
                    // 营销内容-营销资料
                    {
                        path: 'marketing-data',
                        component: () =>
                            import(
                                '../views/content/marketing-content/marketing-data.vue'
                            )
                    }
                ]
            },
            // 微信线索
            {
                path: '/wechat-lead',
                component: () =>
                    import('../views/content/wechat-lead/index.vue'),
                children: [
                    // 全部线索
                    {
                        path: 'all-lead',
                        component: () =>
                            import('../views/content/wechat-lead/all-lead.vue')
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
