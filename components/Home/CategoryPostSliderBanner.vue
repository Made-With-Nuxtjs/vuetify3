<template>
  <v-card class="ma-2">
    <v-sheet class="mx-auto" elevation="0" width="full" height="540">
      <v-row no-gutters>
        <v-col cols="2">
          <v-img class="py-2 ml-4 px-2 my-6" height="420" max-width="360" aspect-ratio="4/3" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-img>
        </v-col>
        <v-col cols="10">
          <v-slide-group v-model="model" class="py-2" center-active :show-arrows="false">
            <v-slide-group-item v-for="post in 12" :key="post" v-slot="{ toggle }">
              <PostCard @click="toggle" />
            </v-slide-group-item>
          </v-slide-group>
        </v-col>
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
