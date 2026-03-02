<script setup lang="ts">
import NavBar from "./components/layout/NavBar.vue";
import {useBlogArticles} from "./composables/useBlogArticles";
import Footer from "./components/layout/Footer.vue";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Ben Davies Portfolio` : 'Ben Davies Portfolio'
  },
  meta: [
      { name: 'darkreader-lock', content: 'true' }
  ]
})

</script>
<template>
  <NuxtRouteAnnouncer/>
  <div class="flex flex-col min-h-screen bg-neutral-900 text-white dark font-sans antialiased relative">
    <NavBar/>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>
