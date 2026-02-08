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
            Software engineer building tools, apps, and systems. Currently
            working on{" "}
            <a
              href="https://itamih.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Itamih
            </a>{" "}
            (AI consulting),{" "}
            <span className="text-ink">Learnt</span> (iOS), and open-source{" "}
            <a
              href="https://github.com/sameerhimati/claude-code-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Claude Code toolkits
            </a>
            .
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
              href="mailto:sameerhimati98@gmail.com"
              className="text-ink-light hover:text-ink transition-colors"
            >
              Email
            </a>
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
              description="AI business automation consulting. Building custom tools that save teams hours every week. Case studies: Hannah, Economic Dashboard, FundLens."
              tags={["Next.js", "FastAPI", "Claude AI", "Railway"]}
              href="https://itamih.com"
              external
            />
            <ProjectCard
              title="Learnt"
              description="Minimal iOS app for tracking daily learnings. Voice and text input. Built with SwiftUI, currently in TestFlight."
              tags={["SwiftUI", "iOS", "Speech-to-Text"]}
              href="https://github.com/sameerhimati"
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

        {/* About */}
        <section id="about" className="mb-8">
          <h2 className="text-sm font-semibold text-ink-light/60 uppercase tracking-wider mb-6">
            About
          </h2>
          <div className="text-ink-light leading-relaxed max-w-2xl space-y-4">
            <p>
              Studied Applied Statistics and Computer Science at the University of
              Toronto. Based between Houston, Chicago, and San Francisco.
            </p>
            <p>
              I like building things that work — tools, apps, systems. Most of my
              time right now goes into Itamih (AI consulting for businesses),
              Learnt (an iOS app), and open-source toolkits for Claude Code.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
