import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.title} | Sameer Himati`,
    description: post.description || post.title,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <main className="pt-24 pb-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-ink-light hover:text-accent transition-colors mb-8 inline-block"
        >
          &larr; All posts
        </Link>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-ink mb-2">{post.title}</h1>
          <time className="text-sm text-ink-light/60 font-mono">
            {post.date}
          </time>
          {post.tags && (
            <div className="flex gap-2 mt-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-cream-dark/60 text-ink-light"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
