<template>
    <v-card class="ma-2 pa-4">
        <v-sheet class="mx-auto" width="full" height="full">
            <v-row justify="center" class="mx-auto" dense>
                <v-col v-for="list in 12" :key="list" cols="3">
                    <ListCard />
                </v-col>
            </v-row>
        </v-sheet>
    </v-card>
</template>