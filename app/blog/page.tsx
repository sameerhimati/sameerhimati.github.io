import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Sameer Himati",
  description: "Writing about AI, machine learning, building software, and learning in public.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-ink mb-2">Blog</h1>
        <p className="text-ink-light mb-10">
          Learnings, reflections, paper summaries, and notes.
        </p>
        <div>
          {posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              date={post.date}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
