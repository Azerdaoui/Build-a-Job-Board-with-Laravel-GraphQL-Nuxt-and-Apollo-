<template>
    <header class="py-6 flex items-center justify-between">

        <nuxt-link :to="{ name: 'index' }"  exact-active-class="text-blue-500">Jobs</nuxt-link>

        <div class="-mx-4 flex items-center flex-wrap"> 
            <a href="" class="mx-4" exact-active-class="text-blue-500">Post a job</a>

            <template>
                <span class="mx-4 font-bold" v-if="$auth.user">{{ $auth.user.name }} - Name </span>
                <a href="" class="mx-4" exact-active-class="text-blue-500">Manage listings</a>
                <a @click.prevent="logout" href="" class="mx-4" exact-active-class="text-blue-500">Logout</a>
            </template>

            <template>
                <nuxt-link 
                    :to="{ name: 'login' }" href="" 
                    class="mx-4" exact-active-class="text-blue-500">
                    Login
                </nuxt-link>
            </template>

        </div>
        
    </header>
</template>

<script>
export default {
    methods: {
        async logout()
        {
            await this.$auth.logout()

            this.$router.replace({ name: 'index' })
        }
    }
}
</script>