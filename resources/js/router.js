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
export default router
