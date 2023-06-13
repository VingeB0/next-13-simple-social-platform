// export const dynamic = 'force-dynamic';
export const revalidate = 1200; // not necessary, just for ISR demonstration

import {Post} from "@/app/api/content/route";

interface Props {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    );

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({params}: Props) {
    const posts: Post[] = await fetch('http://localhost:3000/api/content', ).then( //{ cache: 'no-cache' }
        res => res.json()
    ); // deduped
    const post = posts.find(post => post.slug === params.slug)!;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}