import {useBlogArticleState} from "./useBlogArticleState";

type Year = `20${2 | 3 | 4 | 5 | 6 | 7 | 8}${number}`;
type Month = `${0}${number}` | '10' | '11' | '12';
type Day = `${0 | 1 | 2}${number}` | '30' | '31';

export interface BlogArticleMeta {
    readonly title: string;
    readonly category: string;
    readonly excerpt?: string;
    readonly date: `${Year}-${Month}-${Day}`;
    readonly tags: string[];
}

export const setupBlogArticle = () => {
    const route = useRoute();
    const article = route.meta.article! as BlogArticleMeta;

    useSeoMeta({
        title: article.title,
        description: article.excerpt,
        ogTitle: article.title,
        ogDescription: article.excerpt,
        ogImage: '/favicon.ico',
        ogUrl: '[og:url]',
        twitterTitle: article.title,
        twitterDescription: article.excerpt,
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

    const articleState = useBlogArticleState();
    articleState.value = article;
    return article;
}