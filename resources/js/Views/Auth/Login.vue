<template>
    <div class="card border-success text-center m-auto mt-4 w-50">
        <div class="card-header">
            Log in
        </div>
        <div class="card-body">
            <div class="form-outline mb-4">
                <input
                    type="email"
                    v-model="email"
                    id="email"
                    class="form-control text-center"
                    :class="{'border-warning': $v.email.$invalid}"
                    placeholder="Enter email"/>
                <div v-if="$v.$error">
                    <span v-if="!$v.email.required" class="form-label text-warning">Email is required</span>
                    <span v-if="!$v.email.email" class="form-label text-warning">Email is invalid</span>
                </div>
            </div>
            <div class="form-outline">
                <input
                    type="password"
                    v-model="password"
                    id="password"
                    class="form-control text-center"
                    :class="{'border-warning': $v.password.$invalid}"
                    placeholder="Enter password"/>
                <div v-if="$v.$error">
                    <span v-if="!$v.password.required" class="form-label text-warning">Password is required</span>
                </div>
            </div>

            <div class="mt-3">
                <input @click.prevent="login" type="submit"
                       class="btn btn-success btn-block mb-3" value="Log in">
            </div>
        </div>
    </div>
</template>

<script>
import {required, email} from "vuelidate/lib/validators";
import Swal from 'sweetalert2'

export default {
    name: "Login",

    data() {
        return {
            email: '',
            password: '',
        }
    },
    validations: {
        email: {required, email},
        password: {required}
    },
    methods: {
        login() {
            this.$v.$touch();
            if (this.$v.$error)
                return

            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/login', {
                        email: this.email,
                        password: this.password
                    })
                        .then(response => {
                            localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN'])
                            location.replace('/profile');
                        })
                        .catch(error => {
                        return this.showAlert()
                })
            })
        },
        showAlert() {
            Swal.fire(
                'User not found',
                'Email or password is wrong',
                'info'
            )
        },
    }
}
</script>

<style scoped>

</style>
