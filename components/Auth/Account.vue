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
const supabase = useSupabaseClient()
const loading = ref(true)
const user_name = ref('')
const full_name = ref('')
const website = ref('')
const avatar_url = ref('')

loading.value = true
const user = useSupabaseUser();

let { data } = await supabase
    .from('profiles')
    .select(`user_name, website, avatar_url, full_name`)
    .eq('id', user.value.id)
    .single()
if (data) {
    full_name.value = data.full_name
    user_name.value = data.user_name
    website.value = data.website
    avatar_url.value = data.avatar_url
}
loading.value = false

async function updateProfile() {
    try {
        loading.value = true
        const user = useSupabaseUser();
        const updates = {
            id: user.value.id,
            user_name: user_name.value,
            website: website.value,
            avatar_url: avatar_url.value,
            updated_at: new Date(),
        }
        let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
        })
        if (error) throw error
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}

async function signOut() {
    try {
        loading.value = true
        let { error } = await supabase.auth.signOut()
        if (error) throw error
        user.value = null
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}
</script>