"use client";

import { useState } from "react";
import BlogPostCard from "./BlogPostCard";

const CATEGORIES = ["All", "Papers", "Building", "Reflections", "Learnings", "Books"] as const;

interface PostData {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

export default function BlogList({ posts }: { posts: PostData[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered =
    activeFilter === "All"
      ? posts
      : posts.filter((p) => p.tags?.includes(activeFilter));

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-sm px-3 py-1 rounded-full border transition-colors ${
              activeFilter === cat
                ? "bg-ink text-cream border-ink"
                : "bg-transparent text-ink-light border-cream-dark hover:border-ink-light hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div>
        {filtered.length === 0 ? (
          <p className="text-ink-light text-sm py-8">No posts in this category yet.</p>
        ) : (
          filtered.map((post) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              date={post.date}
              description={post.description}
              slug={post.slug}
              tags={post.tags}
            />
          ))
        )}
      </div>
    </>
  );
}
