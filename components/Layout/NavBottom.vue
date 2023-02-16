<template>
    <v-bottom-navigation :elevation="24" grow density="comfortable">
        <v-btn value="recent" link to="">
            <v-icon>mdi-history</v-icon>
            Recent
        </v-btn>
        <v-btn value="home" link to="/">
            <v-icon>mdi-home-variant</v-icon>
            Home
        </v-btn>
        <v-btn value="liked">
            <v-icon>mdi-thumb-up</v-icon>
            Liked
        </v-btn>
    </v-bottom-navigation>
</template>