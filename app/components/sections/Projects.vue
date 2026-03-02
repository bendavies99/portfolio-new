<script lang="ts" setup>

import HomepageSection from "../features/HomepageSection.vue";
import {reactive} from "vue";
import {ScrollText, CircleChevronRight, Bot, Package} from "lucide-vue-next";


const projects = reactive([
  {
    name: 'Flammeo CMS',
    desc: 'A fully extensible CMS built from the ground up without vendor lock-in it\'s completely modular',
    tags: ['Typescript', 'Nuxt', 'Tailwind'],
    productionReady: false,
    state: 'dev',
    icon: ScrollText,
    link: 'https://github.com/flammeo/cms',
    isLive: false,
    liveLink: ''
  },
  {
    name: 'Flammeo Asset',
    desc: 'A fully modular Asset Manager with extensible components',
    tags: ['Java', 'Typescript', 'Nuxt', 'Tailwind'],
    productionReady: false,
    state: 'coming',
    icon: Package,
    link: 'https://github.com/flammeo/assets-ce',
    isLive: false,
    liveLink: ''
  },
  {
    name: 'Babblebot Server',
    desc: 'Discord Modular Bot. It uses the Discord API to allow a command system where a user enters a command such as !hi and the bot responds with Hello Ben.',
    tags: ['Java', 'JDA'],
    productionReady: false,
    state: 'archive',
    icon: Bot,
    link: 'https://code.babblebot.net',
    isLive: true,
    liveLink: 'https://babblebot.net'
  },
])

</script>

<template>
  <HomepageSection
      title="projects"
      sub-title="Recent programming projects"
      section-id="projects"
      command="ls -al"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.name"
           class="bg-neutral-950 rounded-xl border border-neutral-700 shadow-xl relative overflow-hidden group flex flex-col">

        <div class="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div
                class="w-12 h-12 bg-neutral-800/50 rounded-lg flex items-center justify-center text-2xl border border-neutral-700 text-nuxt">
              <component :is="project.icon"/>
            </div>
            <div
                class="px-2 py-1 bg-neutral-800 border border-neutral-700 text-neutral-400 text-[10px] rounded font-mono uppercase tracking-wider">
                  <span v-if="project.state === 'dev'" class="text-yellow-400">
                    Active Development
                  </span>
                  <span v-else-if="project.state === 'coming'" class="text-primary">
                    Planned Development
                  </span>
                  <span v-else-if="project.state === 'archive'" class="text-red-500">
                    Not Actively Maintained
                  </span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 font-sans">
            {{ project.name }}
          </h3>
          <p class="text-neutral-400 text-sm mb-6 flex-1 leading-relaxed">{{ project.desc }}</p>

          <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="tag in project.tags" :key="tag"
                    class="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded">
                  {{ tag }}
              </span>
          </div>
        </div>

        <div class="bg-neutral-800/40 px-6 py-4 border-t border-neutral-700 flex justify-between items-center mt-auto">
          <a :href="project.link"
             target="_blank"
             class="text-sm font-mono text-neutral-400 hover:text-white flex items-center gap-2 transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                 viewBox="0 0 18 18">
              <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
            Source
          </a>
          <a v-if="project.isLive" :href="project.liveLink"
             target="_blank"
             class="text-sm font-mono text-red-500 flex items-center gap-2 transition-colors">
            <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse block"></div>
            <span>Live</span>
            <CircleChevronRight :size="14" />
          </a>
        </div>
      </div>
    </div>
  </HomepageSection>
</template>