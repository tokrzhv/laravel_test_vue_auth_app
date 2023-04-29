<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
        <div class="container">
            <router-link to="/home" class="navbar-brand">
                Home
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto">
                    <!-- Authentication Links -->
                    <li v-if="!token" class="nav-item">
                        <router-link :to="{ name: 'user.login' }" class="nav-link">Login</router-link>
                    </li>
                    <li v-if="!token" class="nav-item">
                        <router-link :to="{ name: 'user.registration' }" class="nav-link">Sign Up</router-link>
                    </li>
                    <li v-if="token" class="nav-item">
                        <router-link :to="{ name: 'profile' }" class="nav-link">Profile</router-link>
                    </li>
                    <li v-if="token && user.role === 1" class="nav-item">
                        <router-link :to="{ name: 'admin' }" class="nav-link">Admin panel</router-link>
                    </li>
                    <li v-if="token" @click.prevent="logout" class="nav-item">
                        <input @click.prevent="logout" type="submit" class="btn btn-danger" value="Logout">
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import Swal from "sweetalert2";

export default {
    name: "Navbar",
    props: {
        token: String,
        user: {}
    },
    methods: {
        logout() {
            Swal.fire({
                title: 'Are you sure?',
                text: "",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, log out!'
            }).then((result) => {
                if (result.isConfirmed) {

                    axios.post('/logout')
                        .then(response => {
                            setTimeout(function () {
                                window.location.reload()
                            }, 500);
                            localStorage.removeItem('userRole')
                            localStorage.removeItem('x-xsrf-token')
                        })
                }
            })

        },
    }
}
</script>

<style scoped>

</style>
