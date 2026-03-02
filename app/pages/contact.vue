<script lang="ts" setup>
import {MailIcon, Lock} from "lucide-vue-next";

definePageMeta({
  layout: 'default'
});

useSeoMeta({
  title: "Blog | Ben Davies Portfolio",
  description: "ls -al ./blog",
  ogTitle: "Blog",
  ogDescription: "ls -al ./blog",
  ogImage: '/favicon.ico',
  ogUrl: '[og:url]',
  twitterTitle: "Blog",
  twitterDescription: "ls -al ./blog",
  twitterImage: '/favicon.ico',
  twitterCard: 'summary'
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
});

</script>

<template>
  <div class="flex flex-col gap-16 blog-index dark">
    <header class="pb-72 relative">
      <div
          class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[linear-gradient(to_bottom,black_70%,transparent)]"></div>
      <div class="flex flex-col gap-6 mt-16 max-w-7xl! mx-auto px-4 lg:px-0 z-40 isolate">
        <div class="font-mono text-sm text-neutral-400 flex flex-wrap gap-2 items-center">
          <p class="text-white"><span class="text-primary">ben</span>@<span class="text-blue-500">portfolio</span></p>
          <span>:</span>
          <span>~$</span>
          <span class="text-white ">java -jar ./</span>
        </div>
        <h1 class="text-4xl sm:text-6xl font-bold text-white font-sans tracking-tight leading-tight">
          Contact
        </h1>
      </div>
    </header>
    <main class="max-w-7xl w-full mx-auto px-4 lg:px-0 -mt-72 z-40 flex flex-col gap-12 flex-1">
      <div class="w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
            class="bg-neutral-950 rounded-xl border border-neutral-700 shadow-xl relative overflow-hidden group flex flex-col">

          <div class="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col font-mono gap-20 w-full">
            <div>
              <p>Last login: {{ new Date().toLocaleString() }} on /dev/ttys001</p>
              <p>Kernel: 6.2.17 - Distro: bdavies.net</p>
              <p>bensh: Welcome to Ben Davies Portfolio Shell</p>
              <p class="text-orange-500"> > Establishing Secure connection...</p>
              <p class="text-orange-500"> > Booting Contact Section...</p>
              <p class="text-primary inline-flex items-center gap-2">
                <Lock :size="15"/>
                Secure connection established, and contact section booted...
              </p>
            </div>

            <div class="flex flex-col justify-center items-center w-full">
              <h3 class="text-2xl md:text-3xl font-bold text-white font-sans mb-4 tracking-tight">Get in touch.</h3>
              <p class="text-neutral-400 font-sans mb-8 leading-relaxed max-w-2xl text-center">
                if there's anything you want to talk to me about
              </p>

              <div class="flex flex-col sm:flex-row gap-4">
                <a href="mailto:portfolio@bdavies.net"
                   class="flex items-center justify-center gap-3 px-6 py-3.5 bg-primary hover:bg-primary/80 text-white font-bold rounded-lg transition-colors font-sans">
                  <MailIcon/>
                  Email Me
                </a>
                <a href="https://github.com/bendavies99"
                   class="flex items-center justify-center gap-3 px-6 py-3.5 bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 text-white rounded-lg transition-colors font-sans">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                       viewBox="0 0 18 18">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.blog-index {
  min-height: calc(100vh - 8rem);
}
</style>