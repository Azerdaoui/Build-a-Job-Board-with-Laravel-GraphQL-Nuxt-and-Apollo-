<template>
    <header class="py-6 flex items-center justify-between">
        
        <nuxt-link :to="{ name: 'index' }"  exact-active-class="text-blue-500">Jobs</nuxt-link>

        <div class="-mx-4 flex items-center flex-wrap"> 
            <span class="mx-4 font-bold">Othmane</span>
            <nuxt-link 
                :to="{ name: 'login' }" href="" 
                class="mx-4" exact-active-class="text-blue-500">
                Login
            </nuxt-link>
            <a href="" class="mx-4" exact-active-class="text-blue-500">Manage listings</a>
            <a href="" class="mx-4" exact-active-class="text-blue-500">Logout</a>
            <a href="" class="mx-4" exact-active-class="text-blue-500">Post a job</a>
        </div>
        
    </header>
</template>