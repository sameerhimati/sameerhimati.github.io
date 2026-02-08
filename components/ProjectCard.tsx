import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  external?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  external = false,
}: ProjectCardProps) {
  const Wrapper = external ? "a" : Link;
  const externalProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      href={href}
      className="group block p-6 rounded-xl border border-cream-dark/60 hover:border-accent/40 bg-cream hover:bg-white/50 transition-all"
      {...externalProps}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-ink group-hover:text-accent transition-colors">
          {title}
        </h3>
        {external && (
          <svg
            className="w-4 h-4 text-ink-light/40 group-hover:text-accent transition-colors flex-shrink-0 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </div>
      <p className="text-ink-light text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-cream-dark/60 text-ink-light"
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
