<template>
    <v-card class="ma-2 px-2" max-width="450">
        <div class="d-flex flex-no-wrap justify-start">
            <v-avatar class="ml-2" size="125" rounded="0">
                <v-img loading="lazy" height="94" aspect-ratio="4/3" elevation="2" src="https://via.placeholder.com/1920x1080/eee?text=16:9" cover>
                </v-img>
            </v-avatar>
            <div>
                <v-card-text class="text-subtitle-1 text-capitalize px-3 py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribs
                </v-card-text>

                <v-card-subtitle class="px-3 text-subtitle-2 my-n1">
                    <v-row dense>
                        <v-col>
                            Entertainment
                        </v-col>
                        <v-col class="text-caption" align="end">a few seconds</v-col>
                    </v-row>
                </v-card-subtitle>

                <v-card-actions class="py-0 my-n2 mx-n3">
                    <v-list-item class="w-100">
                        <template v-slot:prepend>
                            <div class="justify-self-start">
                                <v-icon class="mr-3" icon="mdi-thumb-up-outline" size="small"></v-icon>
                                <span class="mr-4 text-caption">52k
                                </span>
                                <v-icon class="mr-3" icon="mdi-thumb-down-outline" size="small"></v-icon>
                                <span class="mr-4 text-caption">21
                                </span>
                                <v-icon class="mr-3" icon="mdi-chart-line" size="small"></v-icon>
                                <span class="mr-4 text-caption">312M
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
            </div>
        </div>
    </v-card>
</template>