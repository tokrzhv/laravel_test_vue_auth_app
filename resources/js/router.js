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
            component: () => import('./Views/Auth/Login.vue'),
            name: 'user.login'
        },
        {
            path: '/user/registration',
            component: () => import('./Views/Auth/Registration.vue'),
            name: 'user.registration'
        },
        {
            path: '/profile',
            component: () => import('./Views/Profile/IndexProfile.vue'),
            name: 'profile'
        },
        {
            path: '/profile/:id',
            component: () => import('./Views/Profile/EditProfile.vue'),
            name: 'profile.edit',
        },
    ]
})
export default router
