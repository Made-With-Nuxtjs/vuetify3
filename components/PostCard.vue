<template>
    <v-card class="pa-4 ma-2" max-width="400">
        <NuxtLink to="/" class="text-decoration-none text-black">
            <v-img loading="lazy" class="text-white align-start" height="200" lazy-src="https://picsum.photos/id/11/100/60" aspect-ratio="4 / 3" src="https://via.placeholder.com/1920x1080/eee?text=16:9">
                <v-toolbar color="rgba(0, 0, 0, 0)">
                    <template v-slot:append>
                        <v-chip class="ma-2" color="white" variant="tonal" elevation="5" size="small" label>
                            <v-icon start icon="mdi-chart-line" class="text-caption"></v-icon>
                            312 M
                        </v-chip>
                    </template>
                </v-toolbar>
                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                    </div>
                </template>
            </v-img>

            <v-card-text class="pa-2 py-2 text-subtitle-1 text-capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribs
            </v-card-text>

            <v-card-subtitle class="pa-2">
                <v-row dense>
                    <v-col>
                        Entertainment
                    </v-col>
                    <v-col class="text-caption" align="end">a few seconds</v-col>
                </v-row>
            </v-card-subtitle>
            <v-card-text class="pa-2 py-2 text-subtitle-2">
                <div style="height:95px">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio excepturi vero temporibus quia maxime animi, eveniet quod earum quis unde maiores ipsam sed incidunter
                </div>
            </v-card-text>
        </NuxtLink>

        <v-card-actions class="py-1 mx-n4 pt-4">
            <v-list-item class="w-100">
                <template v-slot:prepend>
                    <div class="justify-self-start">
                        <v-icon class="mr-3" icon="mdi-thumb-up-outline" size="small"></v-icon>
                        <span class="mr-4 text-caption">52k
                        </span>
                        <v-icon class="mr-3" icon="mdi-thumb-down-outline" size="small"></v-icon>
                        <span class="mr-4 text-caption">21
                        </span>
                    </div>
                </template>
                <template v-slot:append>
                    <v-dialog transition="dialog-bottom-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn icon="mdi-share-variant" v-bind="props" size="small"></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card>
                                <v-toolbar color="tonal" title="Share Article"></v-toolbar>
                                <v-card-text>
                                    <div class="text-h5 pa-8">Share with your friends!</div>
                                </v-card-text>
                                <v-card-actions class="justify-end">
                                    <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>

                </template>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import moment from 'moment'
const props = defineProps(['post'])
</script>
