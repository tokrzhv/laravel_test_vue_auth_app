<template>
    <div class="text-center m-auto mt-4 col-md-6">
        <div class="table-responsive ">
            <h2>User list</h2>
            <table class="table text-light bg-transparent">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>created_at</th>
                    <th>updated_at</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users">
                    <template v-if="user.role !== 1" >
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.created_at }}</td>
                        <td>{{ user.updated_at }}</td>
                    </template>
                    <template v-if="user.role === 1">
                        <td class="text-info">{{ user.id }}</td>
                        <td class="text-info">{{ user.name }}</td>
                        <td class="text-info">{{ user.email }}</td>
                        <td class="text-info">{{ user.created_at }}</td>
                        <td class="text-info">{{ user.updated_at }}</td>
                        <td class="text-info">Admin</td>
                    </template>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndexAdmin",

    data() {
        return {
            users: '',
        }
    },

    mounted() {
        this.getUsers()
    },

    methods: {
        getUsers() {
            axios.get('/api/admin/users')
                .then(response => {
                    this.users = response.data.data
                })
        }
    }

}
</script>

<style scoped>

</style>
