<script lang="ts" setup>
import type { BlogArticleMeta } from "#imports";
import {useBlogArticleState} from "../composables/useBlogArticleState";
import {ArrowLeft, CalendarIcon, LucideClock, Tag, Grid2X2PlusIcon} from "lucide-vue-next";

const articleRef = useBlogArticleState();
const mainRef = ref<HTMLDivElement | null>(null);
const minutesToRead = ref(0);
const wpm = 160;

watch(mainRef, (main) => {
  if (main) {
    const text = main.innerText;
    const words = text.trim().split(/\s+/).length;
    minutesToRead.value = Math.ceil(words / wpm);
  }

}, { immediate: true });

const article = computed<BlogArticleMeta>(() => {
  if (!!articleRef.value) {
    return articleRef.value;
  }

  return {
    title: '',
    tagLine: '',
    category: '',
    date: '2026-01-01',
    tags: []
  }
});

</script>

<template>
  <div v-show="!!articleRef" class="flex flex-col gap-16">
    <header class="pb-72 relative">
      <div
          class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[linear-gradient(to_bottom,black_70%,transparent)]"></div>
      <div class="flex flex-col gap-6 mt-16 max-w-4xl! mx-auto px-4 lg:px-0 z-40 isolate">
        <NuxtLink to="/blog" class="flex items-center gap-1 font-mono hover:text-primary">
          <ArrowLeft :size="15" class="text-primary"/>
          <span>cd ..</span>
        </NuxtLink>

        <div class="font-mono text-sm text-neutral-400 flex flex-wrap gap-2 items-center">
          <p class="text-white"><span class="text-primary">ben</span>@<span class="text-blue-500">portfolio</span></p>
          <span>:</span>
          <span>~/blog/$</span>
          <span class="text-white ">cat ./</span>
        </div>

        <h1 class="text-4xl sm:text-6xl font-bold text-white font-sans tracking-tight leading-tight">
          {{ article.title }}
        </h1>

        <div
            class="flex flex-wrap items-center gap-4 text-sm font-mono text-neutral-400 bg-neutral-950  p-4 rounded-lg border border-neutral-800">
          <div class="flex items-center gap-2">
            <Grid2X2PlusIcon :size="16" class="text-neutral-500" />
            <NuxtLink :to="`/blog?filterByCategory=${article.category}`" class="hover:text-primary/80">{{ article.category }}</NuxtLink>
          </div>
          <div class="hidden sm:block text-neutral-600">|</div>
          <div class="flex items-center gap-2">
            <CalendarIcon :size="16" class="text-neutral-500" />
            {{ article.date }}
          </div>
          <div class="hidden sm:block text-neutral-600">|</div>
          <div class="flex items-center gap-2">
            <LucideClock :size="16" class="text-neutral-500" />
            {{ minutesToRead }} min read
          </div>
          <div class="hidden sm:block text-neutral-600" v-if="article.tags.length">|</div>
          <div class="flex items-center gap-2 text-primary" v-if="article.tags.length">
            <Tag :size="16" class="text-neutral-500" />
            <NuxtLink v-for="tag in article.tags" :key="tag" :to="`/blog?filterByTag=${tag.toLowerCase()}`" class="hover:text-primary/50">#{{ tag.toLowerCase() }}</NuxtLink>
          </div>
        </div>
      </div>
    </header>
    <main ref="mainRef" class="prose lg:prose-xl prose-neutral prose-invert max-w-4xl! mx-auto px-4 lg:px-0 -mt-72 z-40">
      <slot/>
    </main>
    <div class="max-w-4xl! mx-auto px-4 lg:px-0 border-t border-neutral-800 py-8 w-full flex justify-between items-center">
      <div class="font-mono">
        EOF
      </div>
    </div>
  </div>
</template>