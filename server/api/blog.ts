// server/api/blog.ts
export default defineEventHandler(async () => {
  const modules = import.meta.resolve('../../pages/blog/*.vue')

  return Object.values(modules)
      .map(i => {
          console.log(i);
          return i;
      });
      // .map((m: any) => m.articleMeta)
      // .filter(Boolean)
      // .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})