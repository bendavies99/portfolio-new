<script setup lang="ts">
import Hero from "../components/layout/Hero.vue";
import Profile from "../components/sections/Profile.vue";
import Projects from "../components/sections/Projects.vue";
import LatestBlogItems from "../components/sections/LatestBlogItems.vue";
import ContactMe from "../components/sections/ContactMe.vue";
</script>
<template>
  <div class="min-h-[calc(100vh-4rem)] mb-4 md:mb-0 font-sans antialiased flex flex-col">
    <Hero/>
  </div>
  <main class="mt-20 mb-20 w-full flex flex-col gap-30 md:max-w-9/12 2xl:max-w-7/12 mx-auto px-4 md:px-0">
    <Profile/>
    <Projects/>
    <LatestBlogItems/>
    <ContactMe/>
  </main>
</template>