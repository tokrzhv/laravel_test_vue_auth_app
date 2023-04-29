<template>
    <div class="row">
        <header>
            <Navbar :token="token" :user="user"></Navbar>
        </header>

        <router-view/>
        <Content :token="token"></Content>

        <footer class="bg-dark text-center text-lg-start text-white">
            <!-- Copyright -->
            <div class="text-center p-4">
                © 2023 Copyright:
                <a class="text-white" href="https://github.com/tokrzhv">tokrzhv</a>
            </div>
            <!-- Copyright -->
        </footer>

    </div>

</template>

<script>
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";

export default {
    name: "App",
    components: {
        Content,
        Navbar
    },
    data() {
        return {
            token: null,
            user: '',
        }
    },
    mounted() {
        this.getToken()
        this.getUser()
    },
    updated() {
        this.getToken()
    },
    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        },
        getUser() {
            axios.get('/api/profile/')
                .then(result => {
                    this.user = result.data.data
                })
        },
    }
}
</script>

<style>
body {
    background-image: url(/images/xXx.jpg);
    background-position: center;
    overflow-x: hidden;
    margin-bottom: 150px;
}

footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 0;
}
</style>
