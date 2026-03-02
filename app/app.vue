<script setup lang="ts">
import NavBar from "./components/layout/NavBar.vue";
import {useBlogArticles} from "./composables/useBlogArticles";

</script>
<template>
  <NuxtRouteAnnouncer/>
  <div class="flex flex-col min-h-screen bg-neutral-900 text-white dark font-sans antialiased relative">
    <NavBar/>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
