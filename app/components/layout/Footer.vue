<script setup lang="ts">
import {TerminalSquare, Hamburger} from "lucide-vue-next";
import {reactive} from "vue";
import {clickLink} from "../../lib/clickLink";

const route = useRoute();

</script>

<template>
  <footer
      class="flex border-t border-neutral-800 bg-neutral-900 z-100 w-full justify-center items-center font-mono h-16 text-sm text-neutral-500 text-center p-10 md:p-0">
    &copy; {{ new Date().getFullYear() }} Ben Davies; Built with Nuxt 4, Shadcn-Vue & Tailwind. Zero Trust Applied.
  </footer>
</template>