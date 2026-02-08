import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cream-dark/50 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex gap-6 text-sm text-ink-light">
            <a
              href="https://github.com/sameerhimati"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sameerhimati"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/samhimati"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              X
            </a>
            <a
              href="mailto:sameerhimati98@gmail.com"
              className="hover:text-ink transition-colors"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-ink-light/60">
            &copy; {new Date().getFullYear()} Sameer Himati
          </p>
        </div>
      </div>
    </footer>
  );
}
