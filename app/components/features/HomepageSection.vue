<script lang="ts" setup>
interface Props {
  readonly title: string;
  readonly subTitle: string;
  readonly sectionId: string;
  readonly command: string;
}

useSlots();

const {
  title,
  subTitle,
  sectionId,
  command
} = defineProps<Props>();
</script>

<template>
  <section :id="sectionId" class="flex flex-col gap-8 w-full">
      <div class="flex flex-col justify-between gap-2">
        <h2 class="font-mono text-3xl font-bold inline-flex items-center gap-2">
          <span class="text-primary">$</span>
          {{ command }} <template v-if="!title.startsWith('/')">./</template><span class="text-primary">{{ title.toLowerCase() }}</span>
        </h2>
        <p class="text-neutral-400">{{ subTitle }}</p>
      </div>

      <slot />
  </section>
</template>