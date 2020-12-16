<template>
    <div class="flex items-center mt-10">
        <form class="w-4/12" @submit.prevent="login">
            <h2 class="mb-4 text-2xl font-bold">Login</h2>

            <div class="mb-4">
                <label for="email" class="inline-block mb-1 font-medium">Email</label>
                <input v-model="form.email" type="text" 
                    class="bg-gray-100 border-2 border-gray-200 rounded-lg w-full px-4" 
                    placeholder="you@gmail.com" name="email" id="email">
            </div>
            <div class="mb-4">
                <label for="password" class="inline-block mb-1 font-medium">Password</label>
                <input v-model="form.password" type="password" 
                    class="bg-gray-100 border-2 border-gray-200 rounded-lg w-full px-4" 
                    name="password" id="password">
            </div>

            <button type="submit" class="bg-blue-500 text-white font-medium rounded-lg border-2 p-4">Login</button>
        </form>
    </div>
</template>


<script>
export default {
    data()
    {
        return {
            error: null,
            form: {
                email:'',
                password:''
            }
        }
    },

    methods: {
        login () {
            // this.$axios.$get('/sanctum/csrf-cookie').then(response => {
                try 
                {
                    this.$auth.loginWith('local', { data: this.form })

                } 
                catch (e) 
                {
                    console.log
                }
            // })
        }
    },

    mounted() {
        this.$axios.$get('/sanctum/csrf-cookie');
    },
}
</script>