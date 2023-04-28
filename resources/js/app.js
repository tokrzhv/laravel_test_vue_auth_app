require('./bootstrap');

import Vue from 'vue';
import Vuelidate from "vuelidate";

import router from './router';
import App from "./App.vue";

Vue.use(Vuelidate);

new Vue({
    el: '#app',
    components:{
        App
    },
    template: "<App/>",
    router
});
