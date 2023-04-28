<template>
    <div class="card border-success text-center m-auto mt-4 w-50">
        <div class="card-header">
            <span v-if="message" class="text-success font-monospace">{{ message }}</span>
            <span v-else>Profile info</span>

        </div>
        <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">{{ user.email }}</p>
            <router-link :to="{ name: 'profile.edit', params: { id: user.id } }"
                         class="btn btn-info mt-1">Edit
            </router-link>

            <a @click.prevent="deleteUser(user.id)" href="#" class="btn btn-danger mt-1">Delete</a>
        </div>
        <div class="card-footer text-muted">
            {{ user.date }}
        </div>
    </div>

</template>

<script>
import Swal from "sweetalert2";

export default {
    name: "Personal",

    data() {
        return {
            user: '',
            message: '',
        }
    },
    created() {
        this.message = this.$route.query.message
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            axios.get('/api/profile/')
                .then(result => {
                    this.user = result.data.data
                })
        },
        deleteUser(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete!'
            }).then((result) => {
                if (result.isConfirmed) {

                    axios.delete(`/api/profile/${id}`)
                        .then(result => {
                            Swal.fire(
                                'Deleted!',
                                'Profile has been deleted.',
                                'success'
                            )
                            localStorage.removeItem('x-xsrf-token')
                            setTimeout(function () {
                                window.location.reload()
                            }, 2000);
                        })
                }
            })
        },
    }

}
</script>

<style scoped>

</style>
