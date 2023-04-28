<template>
    <div class="card border-success text-center m-auto mt-4 w-50">
        <div class="card-header">
            Register
        </div>
        <div class="card-body">
            <div class="form-outline mb-4">
                <input
                    type="text"
                    v-model="name"
                    id="name"
                    class="form-control text-center"
                    :class="{'border-warning': $v.name.$invalid}"
                    placeholder="Enter name"/>
                <div v-if="$v.$error">
                    <span v-if="!$v.name.required" class="form-label text-warning">Please enter a name.</span>
                    <span v-if="!$v.name.minLength"
                          class="form-label text-warning">Name must have at least 3 letters.</span></div>
            </div>
            <div class="form-outline mb-4">
                <input
                    type="email"
                    v-model="$v.email.$model"
                    id="email"
                    class="form-control text-center"
                    :class="{'border-warning': $v.email.$invalid}"
                    placeholder="Enter email"/>
                <div v-if="$v.$error">
                    <span v-if="!$v.email.required" class="form-label text-warning">Please enter a email.</span>
                    <span v-if="!$v.email.email" class="form-label text-warning">Email is invalid.</span>
                    <span v-if="!$v.email.unique" class="form-label text-warning">This email is already taken.</span>
                </div>
            </div>
            <div class="form-outline mb-4">
                <input
                    type="password"
                    v-model="password"
                    id="password"
                    class="form-control text-center"
                    :class="{'border-warning': $v.password.$invalid}"
                    placeholder="Enter password"/>
                <div v-if="$v.$error">
                    <span v-if="!$v.password.required" class="form-label text-warning">Please enter a password.</span>
                    <span v-if="!$v.password.minLength" class="form-label text-warning">Your password must be at least 8 characters long.</span>
                </div>

            </div>
            <div class="form-outline mb-4">
                <input
                    type="password"
                    v-model="confirmPassword"
                    id="confirmPassword"
                    class="form-control text-center"
                    :class="{'border-warning': $v.confirmPassword.$invalid}"
                    placeholder="Confirm Password"/>
                <div v-if="$v.$error">
                    <span v-if="!$v.confirmPassword.required" class="form-label text-warning">Please confirm your password.</span>
                    <span v-if="!$v.confirmPassword.sameAsPassword" class="form-label text-warning">Your passwords do not match.</span>
                </div>
            </div>
        </div>

        <div class="mt-3">
            <input @click.prevent="register" type="submit"
                   class="btn btn-success btn-block mb-3" value="Register">
        </div>
    </div>
</template>

<script>
import {required, email, minLength, sameAs} from "vuelidate/lib/validators";
import axios from "axios";
import Swal from "sweetalert2";

const checkUnique = (value) => {
    return axios.get(`/api/check-reg-email/${value}`)
        .then(response => {
            return response.data
        });
};

export default {
    name: "Registration",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    validations: {
        name: {required, minLength: minLength(3)},
        email: {required, email, unique: checkUnique},
        password: {required, minLength: minLength(8)},
        confirmPassword: {required, sameAsPassword: sameAs('password'),}
    },

    methods: {
        register() {
            this.$v.$touch();
            if (this.$v.$error)
                return

            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.confirmPassword
                    })
                        .then(response => {
                            localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN'])
                            this.showSuccessAlert();
                            setTimeout(() => {
                                location.replace('/home')
                            }, 3000)

                        })
                }).catch(error => {
                return this.showErrorAlert()
            })
        },
        showErrorAlert() {
            Swal.fire(
                'Something went wrong',
                'Try later',
                'error'
            )
        },
        showSuccessAlert() {
            Swal.fire(
                'Successful registration',
                'Welcome!',
                'success'
            )
        },
    }
}
</script>

<style scoped>

</style>
