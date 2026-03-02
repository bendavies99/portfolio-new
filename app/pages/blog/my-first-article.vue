<script lang="ts" setup>
definePageMeta({
  article: {
    title: 'Migrating a Legacy Vue 2 Admin App to Nuxt 3',
    category: 'Development',
    date: '2026-02-21',
    tags: ['nuxt', 'test']
  }
})
setupBlogArticle();
const test = reactive(Array(100).map(i => 'test'));
</script>

<template>
  <h2>Garlic bread with cheese: What the science tells us</h2>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  <p class="text-lg">
    Moving a massive monolithic Vue 2 dashboard into the modern Nuxt 3 composition API era is no small feat. After Vue 2 reached its End of Life (EOL), the technical debt of our internal admin tools became a glowing red light on our monitoring dashboards. Here is how I tackled the migration, step-by-step.
  </p>

  <h2>The "Why" Behind the Rewrite</h2>
  <p>
    Our old stack was built on Vue CLI, Vuex, and Vue Router. It worked, but hot-module replacement (HMR) was taking upwards of 15 seconds, and the bundle size was enormous. We chose <strong>Nuxt 3</strong> because of its auto-imports, file-based routing, and built-in server engine (Nitro) which allows us to write API routes in the same repository.
  </p>

  <ul>
    <li><strong>Vuex to Pinia:</strong> Vuex mutations were always boilerplate-heavy. Pinia's composition-style stores are a breath of fresh air.</li>
    <li><strong>Options API to Composition API:</strong> Migrating logic to <code>&lt;script setup&gt;</code> made our components 40% smaller on average.</li>
    <li><strong>Vite over Webpack:</strong> Dev server startup time went from 45 seconds to 1.2 seconds.</li>
  </ul>

  <h2>Refactoring to Script Setup</h2>
  <p>
    The biggest mental shift was leaving the <code>this</code> context behind. Here is a quick example of how an old authentication component was transformed.
  </p>

  <blockquote>
    How about block quotes?
  </blockquote>
</template>