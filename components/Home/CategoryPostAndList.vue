<template>
    <v-card class="ma-4 pa-4">
        <v-row class="ma-2" no-gutters>
            <v-col cols="3">
                <PostCard2 />
            </v-col>
            <v-col cols="9">
                <v-row align="center" justify="center" dense no-gutters>
                    <v-col v-for="list in 6" :key="list" cols="6">
                        <ListCard2 />
                    </v-col>
                    <!-- <div v-for="post in 2" :key="post">
                        <v-col class="px-1">
                            <v-row v-for="n in 3" :key="n" no-gutters>
                                <ListCard2 />
                            </v-row>
                        </v-col>
                    </div> -->
                </v-row>
            </v-col>
        </v-row>
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