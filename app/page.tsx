import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Sameer Himati
          </h1>
          <p className="text-lg text-ink-light max-w-2xl leading-relaxed mb-8">
            I love reading, starting companies, and investing. I run{" "}
            <a
              href="https://itamih.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Itamih
            </a>
            , forward-deployed AI for small businesses since 2023 — recent
            work includes a from-scratch practice-management system for a
            dental hospital. Previously built{" "}
            <span className="text-ink">Atlas</span> (AI-native investment
            firm for private markets) and{" "}
            <a
              href="https://thefend.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Fend
            </a>{" "}
            (members-only startup network). Now I&apos;m trying to{" "}
            <Link href="/blog" className="text-accent hover:underline">
              Write
            </Link>{" "}
            more.
          </p>
          <div className="flex gap-5 text-sm">
            <a
              href="https://github.com/sameerhimati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-light hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sameerhimati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-light hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/samhimati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-light hover:text-ink transition-colors"
            >
              X
            </a>
            <a
              href="mailto:samhimre@gmail.com"
              className="text-ink-light hover:text-ink transition-colors"
            >
              Email
            </a>
          </div>
        </section>

        {/* Work — public repos + private engagements linked to writeups */}
        <section className="mb-20">
          <h2 className="text-sm font-semibold text-ink-light/60 uppercase tracking-wider mb-6">
            Work
          </h2>
          <div className="space-y-2">
            {[
              { emoji: "🏢", name: "Atlas", desc: "Private markets agent platform for CRE", href: "https://itamih.com/case-studies/atlas", external: true, date: "2026" },
              { emoji: "🏥", name: "Clinic", desc: "Full rewrite of a 26-year-old dental practice OS", href: "/blog/build-something-useful", external: false, date: "2026" },
              { emoji: "💰", name: "Holding / David.ai", desc: "Family office dashboard + Claude wealth advisor", href: "https://itamih.com/case-studies/holding", external: true, date: "2026" },
              { emoji: "📱", name: "Learnt", desc: "iOS app for tracking daily learnings", href: "https://github.com/sameerhimati/Learnt", external: true, date: "Feb 2026" },
              { emoji: "🛠️", name: "claude-code-kit", desc: "Dev skills and agents for Claude Code", href: "https://github.com/sameerhimati/claude-code-kit", external: true, date: "Feb 2026" },
              { emoji: "📣", name: "claude-marketing-kit", desc: "Marketing skills for Claude Code", href: "https://github.com/sameerhimati/claude-marketing-kit", external: true, date: "Feb 2026" },
              { emoji: "✍️", name: "blogpost", desc: "CLI tool for creating blog post markdown files", href: "https://github.com/sameerhimati/blogpost", external: true, date: "Feb 2026" },
              { emoji: "📈", name: "economic-dashboard", desc: "Economic data dashboard", href: "https://github.com/sameerhimati/economic-dashboard", external: true, date: "Oct 2025" },
              { emoji: "📚", name: "PaperBuddy", desc: "Read papers better and retain more knowledge", href: "https://github.com/sameerhimati/PaperBuddy", external: true, date: "Apr 2025" },
              { emoji: "🌳", name: "PapersApplied-ID3", desc: "Implementation of J.R. Quinlan's ID3 paper", href: "https://github.com/sameerhimati/PapersApplied-ID3", external: true, date: "Feb 2025" },
              { emoji: "🔗", name: "PapersApplied-Apriori", desc: "Implementation of Agrawal's Association Rule paper", href: "https://github.com/sameerhimati/PapersApplied-Apriori", external: true, date: "Feb 2025" },
              { emoji: "📊", name: "Analysing_SEC_Filings", desc: "NLP on M&A filings from the SEC", href: "https://github.com/sameerhimati/Analysing_SEC_Filings", external: true, date: "Jul 2020" },
            ].map((project) => {
              const linkProps = project.external
                ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: project.href };
              const Component = project.external ? "a" : Link;
              return (
                <Component
                  key={project.name}
                  {...linkProps}
                  className="flex items-baseline gap-3 group py-1"
                >
                  <span className="text-base">{project.emoji}</span>
                  <span className="text-ink group-hover:text-accent transition-colors font-medium">
                    {project.name}
                  </span>
                  <span className="text-sm text-ink-light/60 hidden sm:inline">
                    {project.desc}
                  </span>
                  <span className="ml-auto text-xs font-mono text-ink-light/40">
                    {project.date}
                  </span>
                </Component>
              );
            })}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="mb-20">
          <h2 className="text-sm font-semibold text-ink-light/60 uppercase tracking-wider mb-6">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              title="Itamih"
              description="Forward-deployed AI for small businesses, since 2023. Custom tools that save teams hours every week. Case studies: Hannah, Economic Dashboard, FundLens."
              tags={["Next.js", "FastAPI", "Claude AI", "Railway"]}
              href="https://itamih.com"
              external
            />
            <ProjectCard
              title="Clinic"
              description="From-scratch practice-management system for a dental clinic. Replaced three SaaS subscriptions; in daily use by the doctors and staff. Built in the open with the team."
              tags={["Next.js", "Prisma", "Bun", "Production"]}
              href="/blog/build-something-useful"
            />
            <ProjectCard
              title="Learnt"
              description="Minimal iOS app for tracking daily learnings. Voice and text input. Built with SwiftUI, currently in TestFlight."
              tags={["SwiftUI", "iOS", "Speech-to-Text"]}
              href="https://sameerhimati.com/Learnt/"
              external
            />
            <ProjectCard
              title="claude-code-kit"
              description="Shared dev skills and agents for Claude Code. 14 skills, 5 agents. Open source toolkit for AI-assisted development."
              tags={["Claude Code", "Skills", "Agents", "Open Source"]}
              href="https://github.com/sameerhimati/claude-code-kit"
              external
            />
            <ProjectCard
              title="claude-marketing-kit"
              description="Marketing skills for Claude Code. Recursive self-improvement loops for content generation and strategy."
              tags={["Claude Code", "Marketing", "Open Source"]}
              href="https://github.com/sameerhimati/claude-marketing-kit"
              external
            />
          </div>

          {/* Other projects */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-ink-light/60 uppercase tracking-wider mb-4">
              Other
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.admute.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline gap-3 group"
              >
                <span className="text-ink group-hover:text-accent transition-colors font-medium">
                  AdMute
                </span>
                <span className="text-sm text-ink-light/60">
                  Chrome extension that mutes non-blockable ads on streaming platforms
                </span>
              </a>
              <a
                href="https://whatsthatbuilding.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline gap-3 group"
              >
                <span className="text-ink group-hover:text-accent transition-colors font-medium">
                  Architectural Style Classifier
                </span>
                <span className="text-sm text-ink-light/60">
                  Computer vision, EfficientNet-V2, 91% accuracy across 45 styles
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-sm font-semibold text-ink-light/60 uppercase tracking-wider">
              Writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-ink-light hover:text-accent transition-colors"
            >
              View all
            </Link>
          </div>
          <div>
            {recentPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                date={post.date}
                description={post.description}
                slug={post.slug}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
