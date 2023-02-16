<template>
    <v-sheet class="mx-auto my-2" width="full">
        <v-slide-group :show-arrows="false">
            <v-slide-group-item v-for="n in 25" :key="n" v-slot="{ isSelected, toggle }">
                <v-btn class="ma-2" rounded :color="isSelected ? 'grey-darken-2' : undefined" @click="toggle" elevation="2" variant="tonal">
                    Category {{ n }}
                </v-btn>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
// import { useDisplay } from 'vuetify'
// const { mdAndUp } = useDisplay()
</script>

