<script lang="ts" setup>
import HomepageSection from "../features/HomepageSection.vue";
import {reactive} from "vue";
import {Box, Code, PanelTop, Container, Server, CircleChevronRight, PackageSearch, LoaderCircle} from "lucide-vue-next";

const skillCategories = reactive([
  {
    name: 'Core Languages',
    icon: Code,
    skills: [
      {name: 'Java', desc: 'Spring Boot, Enterprise architecture, JVM optimization.'},
      {name: 'JS/TS', desc: 'Strict typing, Node backend, universal utility.'},
      {name: 'PHP', desc: 'Legacy integration, Laravel framework.'}
    ]
  },
  {
    name: 'Frontend Frameworks',
    icon: PanelTop,
    skills: [
      {name: 'Vue / Nuxt', desc: 'Composition API, SSR, Pinia state management.'},
      {name: 'React / Next.js', desc: 'Hooks ecosystem, Server Components'}
    ]
  },
  {
    name: 'Containerization',
    icon: Container,
    skills: [
      {name: 'Docker / Podman', desc: 'Rootless containers, multi-stage builds, Compose.'},
      {name: 'Kubernetes', desc: 'Helm charts, deployments, k3s/k8s clusters.'}
    ]
  },
  {
    name: 'Infrastructure & Ops',
    icon: Server,
    skills: [
      {name: 'Sysadmin', desc: 'Linux internals, bash scripting, systemd daemons.'},
      {name: 'Networking', desc: 'VLANs, Firewalls, reverse proxies, Zero-Trust.'}
    ]
  }
]);
const learning = reactive([
  'Rust', 'Golang'
]);
const hobbies = reactive([
  'Homelabbing', 'Zero-trust architecture',
  'Commercial / Enterprise Networking', 'Home Automation', 'Self-hosting'
]);

</script>

<template>
  <HomepageSection
      title="profile"
      sub-title="Core components, pending knowledge resolution, and background hobby daemons"
      section-id="profile"
      command="cat"
  >
    <div class="grid lg:grid-cols-3 gap-6 w-full">
      <div
          class="lg:col-span-2 bg-neutral-950 rounded-xl border border-neutral-700 shadow-xl p-6 md:p-8 relative overflow-hidden group">
        <div
            class="absolute -bottom-10 -right-10 opacity-[0.03] text-[12rem] group-hover:opacity-[0.05] transition-opacity text-emerald-500 pointer-events-none">
          <i class="fa-solid fa-microchip"></i>
        </div>
        <h3 class="text-lg font-bold text-white font-mono mb-6 border-b border-neutral-800 pb-3 flex items-center gap-2">
          <Box class="text-primary"></Box>
          Installed Skills
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div v-for="category in skillCategories" :key="category.name" class="space-y-4">
            <h4 class="text-emerald-500 font-mono font-bold flex items-center gap-2 text-sm border-b border-neutral-800 pb-2">
              <component :size="15" :is="category.icon" /> {{ category.name }}
            </h4>
            <ul class="space-y-3">
              <li v-for="skill in category.skills" :key="skill.name" class="group/skill">
                <div class="text-white font-bold text-sm mb-1">{{ skill.name }}</div>
                <p class="text-xs text-neutral-400 font-mono leading-relaxed group-hover/skill:text-neutral-300 transition-colors inline-flex gap-x-1">
                  <CircleChevronRight :size="15" class="text-primary mt-0.5 shrink-0" /> {{ skill.desc }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-neutral-950 rounded-xl border border-neutral-700 shadow-xl p-6 relative overflow-hidden group">
          <h3 class="text-lg font-bold text-white font-mono mb-4 border-b border-neutral-800 pb-3 flex items-center gap-2">
            <PackageSearch class="text-primary" />
            Learning Packages
          </h3>
          <ul class="space-y-3 mt-4">
            <li v-for="item in learning" :key="item" class="flex items-center gap-3 font-mono text-neutral-300 text-sm">
              <LoaderCircle class="animate-spin text-primary" :size="15" />
              <span>Resolving <span class="text-white font-bold">{{ item }}</span>...</span>
            </li>
          </ul>
        </div>

        <div class="bg-neutral-950 rounded-xl border border-neutral-700 shadow-xl p-6 relative overflow-hidden group">
          <h3 class="text-lg font-bold text-white font-mono mb-4 border-b border-neutral-800 pb-3 flex items-center gap-2">
            <Server class="text-primary" />
            Background Hobby Daemons
          </h3>
          <ul class="space-y-3 mt-4">
            <li v-for="hobby in hobbies" :key="hobby"
                class="flex items-start gap-3 font-mono text-neutral-300 text-sm hover:text-white transition-colors">
              <CircleChevronRight :size="15" class="text-primary shrink-0" />
              <span class="leading-tight">{{ hobby }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </HomepageSection>
</template>