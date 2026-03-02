<script lang="ts" setup>
import {useBlogArticles} from "#imports";
import { Search, LoaderCircle, CodeXml, ScrollTextIcon } from "lucide-vue-next";
import {InputGroup, InputGroupAddon, InputGroupInput} from "../../components/ui/input-group";
import {Select, SelectItem, SelectGroup, SelectLabel, SelectContent, SelectTrigger, SelectValue} from "../../components/ui/select";

const _blogs = useBlogArticles();
const blogs = [..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
  ..._blogs, ..._blogs, ..._blogs, ..._blogs,
];
const filteredBlogs = ref<ReturnType<typeof useBlogArticles>>(blogs);
const search = ref('');
const limit = ref(10);
const offset = ref(0);

const categories = computed(() => {
  return new Set(blogs.map(i => i.category));
});

const tags = computed(() => {
  return new Set(blogs.flatMap(i => i.tags.map(t => `${t.toLowerCase()}`)));
});

const paginatedBlogs = computed(() => {
  return filteredBlogs.value.slice(offset.value, offset.value + limit.value);
});

const getIcon = (category: string) => {
  switch (category) {
    case 'Development':
      return CodeXml
    default:
      return ScrollTextIcon
  }
}

definePageMeta({
  layout: 'default'
});

watch(search, (v) => {
  if (v === '') {
    filteredBlogs.value = blogs;
    return;
  }

  filteredBlogs.value = blogs.filter(b => b.title.toLowerCase().includes(v));
}, {immediate: true});

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
          <span class="text-white ">ls -al ./</span>
        </div>
        <h1 class="text-4xl sm:text-6xl font-bold text-white font-sans tracking-tight leading-tight">
          Blogs
        </h1>
      </div>
    </header>
    <main class="max-w-7xl w-full mx-auto px-4 lg:px-0 -mt-72 z-40 flex flex-col gap-12 flex-1">
      <div class="flex justify-between flex-col gap-2 md:flex-row">
        <div>
          <InputGroup>
            <InputGroupInput v-model="search" placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
<!--            <InputGroupAddon align="inline-end">-->
<!--              <LoaderCircle class="animate-spin" />-->
<!--            </InputGroupAddon>-->
          </InputGroup>
        </div>
        <div class="flex items-center gap-2">
          <Select multiple>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="all">
                  All
                </SelectItem>
                <SelectItem v-for="cat in categories" :key="cat" :value="cat">
                  {{ cat }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select multiple>
            <SelectTrigger>
              <SelectValue placeholder="Tags" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tags</SelectLabel>
                <SelectItem value="all">
                  All
                </SelectItem>
                <SelectItem v-for="tag in tags" :key="tag" :value="tag">
                  #{{ tag }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div class="flex-1">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink :to="blog.link" v-for="blog in paginatedBlogs" :key="blog.title + '-' + blog.date"
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
                  <component :is="getIcon(blog.category)" />
                </div>
                <div
                    class="px-2 py-1 bg-neutral-800 border border-neutral-700 text-neutral-400 text-[10px] rounded font-mono uppercase tracking-wider">
                  <span class="">
                    {{ blog.category }}
                  </span>
                </div>
              </div>
              <h3 class="text-xl font-bold text-white mb-2 font-sans">
                {{ blog.title }}
              </h3>
              <p class="text-neutral-400 text-sm mb-6 flex-1 leading-relaxed">{{ blog.tagLine }}</p>

              <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="tag in blog.tags" :key="tag"
                    class="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded">
                  #{{ tag }}
              </span>
              </div>
            </div>

            <div class="bg-neutral-800/40 px-6 py-4 border-t border-neutral-700 flex justify-between items-center mt-auto">
              <div
                 class="text-sm font-mono text-red-500 flex items-center gap-2 transition-colors">
                <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse block"></div>
                <span>Live</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-4 justify-between border-t border-neutral-800 py-6">
        <p>Showing {{offset + 1}}-{{(offset) + limit}} of {{ filteredBlogs.length }}</p>
        <div class="flex gap-4 items-center">
          <Button @click="() => offset -= limit">Prev Page</Button>
          <Button @click="() => offset += limit">Next Page</Button>
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