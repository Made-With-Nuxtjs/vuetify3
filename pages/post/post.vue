<template>
    <v-main class="bg-grey-lighten-3">
        <v-container>
            <v-row>
                <v-col cols="12" sm="2" class="hidden-md-and-down">
                    <v-card class="mx-auto mb-4 rounded-lg" max-width="full">
                        <CategoryTree />
                    </v-card>
                    <v-card class="mx-auto my-4 rounded-lg" max-width="full" elevation="1">
                        <v-img class="text-white align-end" height="400" src="https://via.placeholder.com/300x400" cover>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols="12" md="" sm="8">
                    <v-card class="mx-auto mb-2 rounded-lg" max-width="full" elevation="5">
                        <v-card-title class="py-2 text-capitalize">
                            <!-- {{ single.posts_title }} -->
                            Title
                        </v-card-title>
                        <v-card-subtitle class="py-2">
                            <v-row dense>
                                <v-col>
                                    <NuxtLink to="/category/category" class="text-black text-decoration-none text-capitalize">
                                        Category: Name
                                    </NuxtLink>
                                </v-col>
                                <v-col align="end">
                                    <!-- {{ moment(single.posts_publish_date).format('ddd, MMM D, YYYY') }} -->
                                </v-col>
                            </v-row>
                        </v-card-subtitle>
                        <v-img class="py-2 text-white align-end" height="400" max-height="400" src="https://via.placeholder.com/1920x1080/eee?text=16:9" cover>
                        </v-img>
                        <v-card-text class="py-4 text-justify">
                            <div>Lorem Text</div>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-chip-group v-show="tags !== null" column class="mx-3 my-1">
                            <v-chip v-for=" tag in tags" :key="tag">
                                <NuxtLink to="/tags/tag" class="text-black text-decoration-none">
                                    Tag
                                </NuxtLink>
                            </v-chip>
                        </v-chip-group>

                        <v-card-actions>
                            <v-btn @click="like" v-if="like_react == false" class="mx-1" icon="mdi-thumb-up-outline" variant="tonal" size="small"></v-btn>
                            <v-btn @click="like" v-else class="mx-1" icon="mdi-thumb-up" variant="tonal" size="small"></v-btn>
                            <span class="mr-5 text-subtitle-2">
                                <!-- {{ like_count }} -->
                            </span>
                            <v-btn @click="dislike" v-if="dislike_react == false" class="mx-1" icon="mdi-thumb-down-outline" variant="tonal" size="small"></v-btn>
                            <v-btn @click="dislike" v-else class="mx-1" icon="mdi-thumb-down" variant="tonal" size="small"></v-btn>
                            <span class="mr-5 text-body-2">
                                <!-- {{ dislike_count }} -->
                            </span>
                            <v-icon class="mx-1" icon="mdi-eye-outline" size="small"></v-icon>
                            <p class="mr-4 text-body-2">
                                <!-- {{ single.posts_view + 1 }} -->
                            </p>
                            <v-spacer></v-spacer>
                            <v-dialog transition="dialog-bottom-transition">
                                <template v-slot:activator="{ props }">
                                    <v-btn icon="mdi-share-outline" v-bind="props" variant="tonal" size="small"></v-btn>
                                </template>
                                <template v-slot:default="{ isActive }">
                                    <v-card>
                                        <v-toolbar color="gray" title="Share Article"></v-toolbar>
                                        <v-card-text>
                                            <div class="text-h4 pa-12">Share with your friends!</div>
                                        </v-card-text>
                                        <v-card-actions class="justify-end">
                                            <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>
                        </v-card-actions>
                    </v-card>
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