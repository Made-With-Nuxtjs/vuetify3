<template>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
            Sign in to your account
        </h2>
        <v-sheet class="mx-auto pa-6">
            <p class="my-2">Sign in via magic link with your email below</p>
            <v-form @submit.prevent="handleLogin">
                <v-text-field v-model="email" type="email" label="Email"></v-text-field>
                <v-btn type="submit" block class="mt-2" variant="tonal" elevation="3" :value="loading ? 'Loading' : 'Send magic link'" :disabled="loading">Submit
                </v-btn>
            </v-form>
        </v-sheet>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="u-bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div block>
                    <span> Or connect with: </span>
                </div>
                <v-btn class="mx-auto mt-2" block @click="github_login"> Github </v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
