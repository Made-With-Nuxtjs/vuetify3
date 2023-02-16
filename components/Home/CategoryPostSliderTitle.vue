<template>
    <v-card class="ma-2 pa-4">
        <v-row dense class="container mx-auto mt-0 my-n2">
            <v-col>
                <v-card-title class="align-self-center">Category: Post, Title</v-card-title>
            </v-col>
            <v-card-title class="text-body-2 align-self-center">More</v-card-title>
        </v-row>
        <v-sheet class="mx-auto" elevation="0" width="full" height="">
            <v-row no-gutters>
                <v-slide-group v-model="model" class="py-0" center-active :show-arrows="false">
                    <v-slide-group-item v-for="post in 12" :key="post" v-slot="{ toggle }">
                        <PostCard @click="toggle" />
                    </v-slide-group-item>
                </v-slide-group>
            </v-row>
        </v-sheet>
    </v-card>
</template>

<script setup>
import moment from 'moment'

import { useDisplay } from 'vuetify'
const model = ref('')

const { mdAndUp } = useDisplay()

// const client = useSupabaseClient();
// const { data: posts } = await useAsyncData("posts", async () => {
//     const { data } = await client
//         .from("posts")
//         .select("*")
//         .like("posts_status", "Publish")
//         .order("posts_id", { ascending: false });
//     return data;
// });
// console.log(posts);
</script>
