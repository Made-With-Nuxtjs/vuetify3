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
                    <v-row align="center">
                        <v-col>
                            <v-alert v-if="posts != null" variant="tonal" prominent justify="end" class="text-uppercase">
                                Recently Viewed
                            </v-alert>
                            <v-alert v-else prominent variant="tonal" align="center" class="text-uppercase">No Post Recently Viewed</v-alert>
                        </v-col>
                        <v-col cols="1" lg="1" align="center">
                            <v-btn @click="delete_all" icon="mdi-trash-can-outline" size="large"></v-btn>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <template v-for="post in posts" :key="post">
                            <v-col cols="12" md="4" lg="4">
                                <v-card class="mx-auto rounded-lg" max-width="full" elevation="6">
                                    <v-img v-if="post.posts_featured_img_url === null" class="text-white align-end" height="200" src="https://hahammer.com/wp-content/uploads/2017/06/default-placeholder-1024x1024-400x200.png" cover></v-img>
                                    <v-img v-else class="text-white align-start" height="200" :src="post.posts_featured_img_url" cover>
                                        <v-toolbar color="rgba(0, 0, 0, 0)">
                                            <template v-slot:append>
                                                <v-dialog transition="dialog-bottom-transition">
                                                    <template v-slot:activator="{ props }">
                                                        <v-btn icon="mdi-share" v-bind="props" variant="tonal" elevation="5" color="white" size="small"></v-btn>
                                                    </template>
                                                    <template v-slot:default="{ isActive }">
                                                        <v-card>
                                                            <v-toolbar color="gray" title="Share Article"></v-toolbar>
                                                            <v-card-text>
                                                                <div class="text-h4 pa-12">
                                                                    Share with your friends!
                                                                </div>
                                                            </v-card-text>
                                                            <v-card-actions class="justify-end">
                                                                <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </template>
                                                </v-dialog>
                                            </template>
                                        </v-toolbar>
                                    </v-img>
                                    <NuxtLink :to="`/post/${post.posts_url}`" class="text-black text-decoration-none">
                                        <v-card-title class="py-2 text-capitalize">
                                            {{ post.posts_title }}
                                        </v-card-title>
                                    </NuxtLink>
                                    <v-card-subtitle class="py-1">
                                        <v-row dense>
                                            <v-col>
                                                <NuxtLink :to="`/category/${post.post_categories_url}`" class="text-black text-decoration-none">
                                                    Category: {{ post.post_categories_name }}
                                                </NuxtLink>
                                            </v-col>
                                            <v-col align="end">{{
                                                moment(post.posts_publish_date).fromNow()
                                            }}</v-col>
                                        </v-row>
                                    </v-card-subtitle>
                                    <NuxtLink :to="`/post/${post.posts_url}`" class="text-black text-decoration-none">
                                        <v-card-text class="py-2 text-justify">
                                            <div>{{ post.posts_text_summary }}</div>
                                        </v-card-text>
                                    </NuxtLink>
                                    <v-card-actions class="mx-n2">
                                        <v-list-item class="w-100" align="center">
                                            <template v-slot:prepend>
                                                <div class="justify-self-start">
                                                    <v-icon class="mr-3" icon="mdi-thumbs-up-down-outline" size="small"></v-icon>
                                                    <span class="mr-4 text-body-2">
                                                        {{ post.posts_reactions }}
                                                    </span>
                                                    <v-icon class="mr-3" icon="mdi-comment-outline" size="small"></v-icon>
                                                    <span class="mr-4 text-body-2">
                                                        {{ post.posts_comments }}
                                                    </span>
                                                </div>
                                            </template>
                                            <template v-slot:append>
                                                <v-icon class="mr-3" icon="mdi-eye-outline" size="small"></v-icon>
                                                <p class="mr-4 text-body-2">{{ post.posts_view }}</p>
                                                <v-btn @click="delete_post(post.posts_url)" icon="mdi-delete-outline" size="small" variant="tonal"></v-btn>
                                            </template>
                                        </v-list-item>
                                    </v-card-actions>
                                </v-card>
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

</script>
