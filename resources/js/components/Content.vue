<template>
    <div v-if="!hasRouterView">
        <section v-if="token" class="fdb-block py-0">
            <div class="container py-5 my-5">
                <div class="row justify-content-center py-5">
                    <div class="col-12 col-md-10 col-lg-8 text-center">
                        <div class="fdb-box">
                            <h1>Call to Action</h1>
                            <p class="lead text-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse rhoncus congue velit, sed porttitor libero semper a.
                                Proin fermentum massa sed est sodales maximus.
                            </p>
                            <p class="mt-4">
                                <router-link :to="{name: 'profile'}" class="btn btn-primary">View profile</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section v-if="!token" class="fdb-block py-0">
            <div class="container py-5 my-5">
                <div class="row justify-content-center py-5">
                    <div class="col-12 col-md-10 col-lg-8 text-center">
                        <div class="fdb-box">
                            <h1>Call to Action</h1>
                            <p class="lead text-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse rhoncus congue velit, sed porttitor libero semper a.
                                Proin fermentum massa sed est sodales maximus.
                            </p>
                            <p class="mt-4">
                                <router-link :to="{ name: 'user.login' }" class="btn btn-primary">Do something</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: "Content",
    props: {
        token: String
    },
    computed: {
        hasRouterView() {
            return !!this.$route.matched.length;
        },
    },
}
</script>

<style scoped>

</style>
