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
                    <v-card class="mx-auto mb-5 rounded-lg pa-5" width="full">
                        <v-row align="center">
                            <v-col cols="12" lg="9">
                                <v-text-field hide-details="auto" type="text" v-model="search_input" class="" clearable label="Search" placeholder="Search for Article / Category Here..."></v-text-field>
                            </v-col>
                            <v-col cols="12" lg="3" align="center">
                                <v-btn @click="search" color="normal" max-width="large" width="300" type="submit" variant="tonal">
                                    Search
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>

                    <v-card class="mx-auto mb-4 rounded" max-width="full" max-height="250" elevation="1">
                        <v-img class="text-white align-end" max-height="250" height="250" src="https://via.placeholder.com/1800x300" cover>
                        </v-img>
                    </v-card>

                    <v-alert prominent v-if="posts === null" variant="tonal" align="center">Search Results Will be shown below...</v-alert>

                    <v-row align="center">
                        <template v-for="post in posts" :key="post">
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


</script>