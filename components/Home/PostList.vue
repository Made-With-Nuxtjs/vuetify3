<template>
    <v-container class="my-2">
        <v-row align="center">
            <template v-for="(post, index) in posts" :key="post.id">
                <!-- <v-col v-if="index % 10 == 0" class="hidden-md-and-down" cols="12" md="4" lg="12">
                            <v-card class="mx-auto rounded " max-width="full" max-height="300" elevation="1">
                                <v-img class="text-white align-end" max-height="300" height="300" src="https://via.placeholder.com/1800x300" cover></v-img>
                            </v-card>
                        </v-col> -->
                <!-- <v-col v-if="index % 6 == 0" cols="12" md="4" lg="3">
                            <v-card class="mx-auto rounded" max-width="400" max-height="450" elevation="1">
                                <v-img class="text-white align-end" max-height="450" height="450" src="https://via.placeholder.com/400x450" cover></v-img>
                            </v-card>
                        </v-col>
                        <v-col v-if="index % 7 == 6" cols="12" md="4" lg="3">
                            <v-card class="mx-auto rounded" max-width="400" max-height="450" elevation="1">
                                <v-img class="text-white align-end" max-height="450" height="450" src="https://via.placeholder.com/400x450" cover></v-img>
                            </v-card>
                        </v-col> -->
                <v-col cols="12" md="4" lg="3">
                    <PostCard :post="post" />
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>

<script setup>
const client = useSupabaseClient();
const { data: posts } = await useAsyncData("posts", async () => {
    const { data } = await client
        .from("posts")
        .select("*")
        .like("posts_status", "Publish")
        .order("posts_id", { ascending: false });
    return data;
});
console.log(posts);
</script>
