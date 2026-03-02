<script lang="ts" setup>

import HomepageSection from "../features/HomepageSection.vue";
import {reactive} from "vue";
import {Button} from "../ui/button";
import { FileText, CircleChevronRight } from "lucide-vue-next";
import {clickLink} from "../../lib/clickLink.ts";

const posts = reactive([
  {
    title: 'Reverse Proxying Proxmox with Traefik & Authentik',
    date: '2023-10-24 14:32:01',
    link: '/',
    category: 'Homelab',
    excerpt: 'Securing my homelab dashboard behind a zero-trust authentication layer using Traefik as the ingress and Authentik as the identity provider. No more exposed management ports.'
  },
  {
    title: 'Migrating a Legacy Vue 2 Admin App to Nuxt 3',
    date: '2023-09-12 09:15:44',
    link: '/',
    category: 'Development',
    excerpt: 'Lessons learned moving a massive monolithic Vue 2 dashboard into the modern Nuxt 3 composition API era, dealing with state management changes from Vuex to Pinia.'
  },
  {
    title: 'Why I still write Java in 2024',
    date: '2023-08-05 18:45:11',
    link: '/',
    category: 'Opinion',
    excerpt: 'Spring Boot 3 and virtual threads have completely revitalized the JVM ecosystem. Here is why I still choose it as my primary weapon of choice for robust backend services.'
  }
])

</script>

<template>
  <HomepageSection
      title="blog"
      sub-title="My latest thoughts and tutorials"
      section-id="blog"
      command="tail -n 3 -f"
  >
    <div class="w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-6 relative before:absolute before:inset-0 before:-ml-2 before:-tranneutral-x-px lg:before:mx-auto lg:before:tranneutral-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-neutral-700 before:to-transparent">

        <a :href="post.link" v-for="(post) in posts" :key="post.title" class="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group cursor-pointer">

          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 bg-neutral-800 text-neutral-400 group-hover:text-primary group-hover:border-primary group-hover:bg-primary/10 shrink-0 lg:order-1 lg:group-odd:-tranneutral-x-1/2 lg:group-even:tranneutral-x-1/2 shadow-sm transition-colors duration-200 absolute left-0 lg:left-1/2 -ml-6 lg:-ml-5">
            <FileText />
          </div>

          <div class="w-full lg:w-[calc(50%-3.5rem)] p-6 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-neutral-500 transition-colors">
            <div class="flex items-center gap-3 mb-3 font-mono text-xs">
              <span class="text-primary">[{{ post.date }}]</span>
              <span class="px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-700">{{ post.category }}</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors cursor-pointer">
              {{ post.title }}
            </h3>
            <p class="text-neutral-400 text-sm mb-4 leading-relaxed">
              {{ post.excerpt }}
            </p>
            <div class="inline-flex items-center gap-2 text-sm text-neutral-300 group-hover:text-primary font-mono">
              <CircleChevronRight :size="18" class="text-primary" /> cat /blog/post.md
            </div>
          </div>
        </a>

      </div>

      <div class="mt-12 text-center">
        <Button variant="outline" class="font-mono" size="xl" @click="clickLink('/blog')">
          ls -al /blog
        </Button>
      </div>
    </div>
  </HomepageSection>
</template>