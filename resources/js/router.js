import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            redirect: '/',
            name: 'app'
        },
        {
            path: '/user/login',
            component: () => import('./views/auth/Login.vue'),
            name: 'user.login'
        },
        {
            path: '/user/registration',
            component: () => import('./views/auth/Registration.vue'),
            name: 'user.registration'
        },
        {
            path: '/admin',
            component: () => import('./views/admin/IndexAdmin.vue'),
            name: 'admin',
        },
        {
            path: '/profile',
            component: () => import('./views/profile/IndexProfile.vue'),
            name: 'profile'
        },
        {
            path: '/profile/:id',
            component: () => import('./views/profile/EditProfile.vue'),
            name: 'profile.edit',
        },
    ]
})

router.beforeEach((to, from, next) => {

    const userRole = localStorage.getItem('userRole')
    if (userRole === '0') {
        if (to.path === '/profile' || to.name === 'profile.edit' || to.path === '/') {
            return next()
        } else {
            return next({
                path: '/'
            })
        }
    }
    next()
})
export default router
