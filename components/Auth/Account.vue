<template>
    <v-sheet class="mx-auto pa-6">
        <v-form @submit.prevent="updateProfile">
            <v-img class="mb-4 mx-16" v-model="avatar_url" :src="avatar_url" cover></v-img>
            <v-text-field v-model="full_name" :placeholder="full_name ? full_name : 'Full Name'" type="text"></v-text-field>
            <v-text-field v-model="user_name" :placeholder="user_name ? user_name : 'Username'" type="text"></v-text-field>
            <v-text-field v-model="website" :placeholder="website ? website : 'Website'" type="text"></v-text-field>
            <v-text-field type="text" :value="user.email" disabled></v-text-field>
            <v-btn type="submit" block class="my-4" variant="tonal" elevation="3" :value="loading ? 'Loading' : 'Update'" :disabled="loading">
                Submit
            </v-btn>
            <v-btn @click="signOut" block class="my-4" :disabled="loading">
                SignOut
            </v-btn>
        </v-form>
    </v-sheet>
</template>

<script setup>

</script>