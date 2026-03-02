import {useRouter} from "#app";
import type {BlogArticleMeta} from "#imports";

export const useBlogArticles = () => {
    const router = useRouter();
    const routes = router.getRoutes();

    return routes
        .filter(r => r.path.startsWith('/blog'))
        .filter(r => r.meta.article)
        .map(r => ({ ...r.meta.article as any, link: r.path }) as (BlogArticleMeta & {link: string}))
}