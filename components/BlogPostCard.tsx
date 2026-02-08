import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  date: string;
  description?: string;
  slug: string;
}

export default function BlogPostCard({
  title,
  date,
  description,
  slug,
}: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block py-4 border-b border-cream-dark/40 last:border-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-ink group-hover:text-accent transition-colors font-medium">
          {title}
        </h3>
        <time className="text-sm text-ink-light/60 font-mono flex-shrink-0">
          {date}
        </time>
      </div>
      {description && (
        <p className="text-sm text-ink-light mt-1 line-clamp-1">{description}</p>
      )}
    </Link>
  );
}
