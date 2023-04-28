<template>

    <div class="card border-success text-center m-auto mt-4 w-50">
        <div class="card-header">
            Update your profile
        </div>
        <div class="card-body">


            <div class="form-outline mb-4">
                <input
                    type="text"
                    v-model="name"
                    id="name"
                    class="form-control text-center"
                    :class="{'border-warning': $v.name.$invalid}"
                    placeholder="Email"/>
                <div v-if="$v.$error">
                    <span v-if="!$v.name.required" class="form-label text-warning">Name is required</span>
                    <span v-if="!$v.name.minLength"
                          class="form-label text-warning">Name must have at least 3 letters.</span>
                </div>
            </div>
            <div class="form-outline">
                <input
                    type="email"
                    v-model="$v.email.$model"
                    id="email"
                    class="form-control text-center"
                    :class="{'border-warning': $v.email.$invalid}"
                    placeholder="Email"/>
                <div v-if="$v.$error">
                    <span v-if="!$v.email.required" class="form-label text-warning">Email is required</span>
                    <span v-if="!$v.email.email" class="form-label text-warning">Email is invalid</span>
                    <span v-if="!$v.email.unique" class="form-label text-warning">This email is already taken!</span>
                </div>
            </div>

            <div class="mt-3">
                <router-link to="/" class="btn btn-secondary btn-block mb-3">Cancel</router-link>
                <input @click.prevent="update" type="submit"
                       class="btn btn-success btn-block mb-3" value="Update">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {required, email, minLength} from "vuelidate/lib/validators";
import Swal from "sweetalert2";

const checkUnique = (value) => {
    return axios.get(`/api/check-email/${value}`)
        .then(response => {
            return response.data
        });
};


export default {
    name: "Edit",
    data() {
        return {
            id: '',
            name: '',
            email: '',
            message: '',
        }
    },
    validations: {
        email: {required, email, unique: checkUnique},
        name: {required, minLength: minLength(3)},
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            axios.get('/api/profile')
                .then(result => {
                    this.id = result.data.data.id
                    this.name = result.data.data.name
                    this.email = result.data.data.email
                })
        },
        update() {
            this.$v.$touch();
            if (this.$v.$error)
                return

            axios.patch('/api/profile/' + this.id, {
                name: this.name,
                email: this.email
            })
                .then(result => {
                    this.showSuccessAlert()
                    this.$router.push({
                        name: 'profile',
                        query: {
                            message: 'Profile info successful updated!'
                        }
                    });
                })
                .catch(error => {
                    return this.showAlert()
                });
        },
        showErrorAlert() {
            Swal.fire(
                'Something went wrong',
                'Try later',
                'error'
            )
        },
        showSuccessAlert() {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        },

    }
}
</script>

<style scoped>

</style>
