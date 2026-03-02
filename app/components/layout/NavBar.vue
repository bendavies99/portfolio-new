<script setup lang="ts">
import {TerminalSquare, Hamburger, XIcon, ChevronRight} from "lucide-vue-next";
import {reactive} from "vue";
import {clickLink} from "../../lib/clickLink";
import {onBeforeRouteUpdate} from "#app";

const route = useRoute();

const links = computed(() => ([
  {label: 'Home', link: '/', active: route.path === '/'},
  {label: 'Blog', link: '/blog', active: route.path.includes('/blog')},
  {label: 'contact', link: '/contact', active: route.path === '/contact'},
]));

const showMobileNav = ref(false);
const closing = ref(false);

watch(closing, (v) => {
  if (v) {
    setTimeout(() => {
      showMobileNav.value = false;
      closing.value = false;
    }, 400);
  }
})

watch(showMobileNav, (v) => {
  if (v) {
    document.body.style.overflowY = 'hidden';
    document.body.style.maxHeight = '100vh';
  } else {
    document.body.style.overflowY = '';
    document.body.style.maxHeight = '';
  }
});

const goto = (link: string, target: string | undefined = undefined) => {
  clickLink(link, target);
  closing.value = true;
}


</script>

<template>
  <div class="lg:hidden transition-all duration-500 fixed inset-0 bg-neutral-900 font-mono w-full flex flex-col isolate" :class="{'-z-10 opacity-0': !showMobileNav || closing, 'opacity-100 z-200': showMobileNav && !closing, 'z-200!': closing}">
    <div class="flex border-b border-neutral-800 w-full px-2 h-16 justify-between">
      <a @click.prevent="goto('/')" class="h-full flex items-center gap-2 md:gap-4 flex-1">
        <TerminalSquare class=""/>
        <h1 class="font-bold tracking-wide">
          <span class="italic text-primary">ben</span>@<span class="text-blue-500">portfolio</span>:~$
        </h1>
      </a>

      <div class="mr-2 cursor-pointer flex items-center" tabindex="0" @click="closing = true">
        <XIcon/>
      </div>


    </div>

    <ul class="flex flex-col pl-5 gap-5 mt-5">
      <li
          class="h-full flex items-center justify-between cursor-pointer border-b border-neutral-800 pb-5"
          tabindex="0"
          v-for="link in links" :key="link.label"
          @click="goto(link.link)"
      >
        <div>
          ./<span :class="{'text-primary': link.active}" class="hover:text-primary lowercase">{{ link.label }}</span>
        </div>
      </li>
      <li class="h-full flex items-center mr-1 pb-5 border-b border-neutral-800" tabindex="0" @click="goto('https://github.com/bendavies99', '_tab')">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="text-white hover:text-primary cursor-pointer"
             viewBox="0 0 16 16">
          <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
      </li>
    </ul>
  </div>
  <nav
      class="flex border-b border-neutral-800 bg-neutral-900 z-100 w-full justify-between font-mono h-16 md:pl-8 px-2 sticky top-0">

    <NuxtLink to="/" class="h-full flex items-center gap-2 md:gap-4 flex-1">
      <TerminalSquare class=""/>
      <h1 class="font-bold tracking-wide">
        <span class="italic text-primary">ben</span>@<span class="text-blue-500">portfolio</span>:~$
      </h1>
    </NuxtLink>

    <div class="lg:hidden mr-2 cursor-pointer flex items-center" tabindex="0" @click="showMobileNav = !showMobileNav">
      <Hamburger/>
    </div>

    <ul class="gap-4 hidden lg:flex">
      <li
          class="h-full flex items-center justify-center cursor-pointer"
          tabindex="0"
          v-for="link in links" :key="link.label"
          @click="goto(link.link)"
      >
        ./<span :class="{'text-primary': link.active}" class="hover:text-primary lowercase">{{ link.label }}</span>
      </li>
      <li class="h-full flex items-center justify-center mr-1" tabindex="0" @click="goto('https://github.com/bendavies99', '_tab')">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="text-white hover:text-primary cursor-pointer"
             viewBox="0 0 16 16">
          <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
      </li>
    </ul>
  </nav>
</template>