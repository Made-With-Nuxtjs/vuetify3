<template>
  <v-app id="inspire">
    <!-- System Bar -->
    <LayoutSystemBar />
    <!-- Sidebar -->
    <!-- <v-navigation-drawer v-model="drawer">
      <CategoryTree />
    </v-navigation-drawer> -->
    <!-- Navbar -->
    <v-app-bar class="mx-auto" color="" flat density="compact" elevation="5">
      <v-container class="d-flex align-center mx-auto px-0">
        <v-app-bar-nav-icon @click="drawer = !drawer" class=""></v-app-bar-nav-icon>
        <NuxtLink to="/" class="text-decoration-none">
          <v-avatar size="150" rounded="0">
            <v-img src="https://logovectordl.com/wp-content/uploads/2021/03/article-logo-vector.png" class="" size="150"></v-img>
          </v-avatar>
        </NuxtLink>
        <v-spacer></v-spacer>
        <v-btn size="32" class="mx-2" icon="mdi-theme-light-dark" elevation="2" @click="toggleTheme">
        </v-btn>
        <NuxtLink to="/search" class="text-decoration-none">
          <v-avatar size="32" class="mx-2" icon="mdi-magnify" variant="elevated"></v-avatar>
        </NuxtLink>
        <NuxtLink to="/" class="text-decoration-none">
          <v-avatar v-if="user" size="34" class="mx-2" variant="elevated">
            <v-img size="32" :src="avatar_url" alt="User"></v-img>
          </v-avatar>
          <v-avatar v-else size="32" class="mx-2" icon="mdi-account-circle" variant="elevated">
          </v-avatar>
        </NuxtLink>
        <!-- <v-btn icon class="mx-2 hidden-sm-and-up">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
      </v-container>
    </v-app-bar>
    <!-- Main Content -->
    <NuxtLoadingIndicator />
    <NuxtPage />
    <!-- Nav Bottom -->
    <LayoutNavBottom />
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
// const user = useSupabaseUser();
const drawer = ref(false);
const avatar_url = ref("");

const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'

// watchEffect(() => {
//   if (user.value) {
//     avatar_url.value = user.value.user_metadata.avatar_url;
//   }
// });
</script>

<style lang="scss">
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e6e6e6;
  // border-left: 1px solid #dadada;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c5c4c46c;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(134, 134, 134, 0.466);
}
</style>
