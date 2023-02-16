<template>
    <v-main class="bg-grey-lighten-3">
        <v-container>
            <v-row>
                <v-col cols="12" sm="2" class="hidden-md-and-down">
                    <v-card class="mx-auto mb-4 rounded-lg" max-width="full">
                        <CategoryTree />
                    </v-card>
                    <v-card class="mx-auto mb-2 rounded-lg" max-width="full" elevation="1">
                        <v-img class="text-white align-end" height="400" src="https://via.placeholder.com/300x400" cover>
                        </v-img>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="8">
                    <v-card class="mx-auto mb-4 rounded" max-width="full" max-height="250" elevation="1">
                        <v-img class="text-white align-end" max-height="250" height="250" src="https://via.placeholder.com/1800x300" cover>
                        </v-img>
                    </v-card>

                    <v-alert prominent variant="tonal" align="center" class="mb-4 text-uppercase">{{ post_category }}</v-alert>

                    <v-row align="center">
                        <template v-for="(post, index) in posts" :key="index">
                            <v-col cols="12" md="4" lg="4">
                                <PostCard :post="post" />
                            </v-col>
                        </template>
                    </v-row>
                </v-col>

                <v-col cols="12" sm="2" class="hidden-md-and-down">
                    <v-card class="mx-auto mb-2 rounded-lg" max-width="full" elevation="1">
                        <v-img class="text-white align-end" height="400" src="https://via.placeholder.com/300x400" cover>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script setup>
// const client = useSupabaseClient();
// const route = useRoute()
// const post_category = route.params.url

// const { data: posts } = await useAsyncData("posts", async () => {
//     const { data } = await client
//         .from("posts")
//         .select("*")
//         .ilike('post_categories_name', post_category)
//         .order("posts_id", { ascending: false });

//     return data;
// });
// console.log(posts);

// const { data: posts, refresh } = await useFetch('http://127.0.0.1:8000/api/category/' + post_category)

</script>