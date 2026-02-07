"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const posts = [
  {
    title: "Why I Migrated from Webpack to Turbopack",
    excerpt:
      "A deep dive into the migration process, benchmarks, and the surprising pitfalls I encountered along the way.",
    date: "Jan 2026",
    readTime: "8 min",
    tag: "Tooling",
  },
  {
    title: "Building Resilient Microservices with Go",
    excerpt:
      "Patterns for circuit breakers, retries, and graceful degradation in distributed Go services.",
    date: "Dec 2025",
    readTime: "12 min",
    tag: "Backend",
  },
  {
    title: "The Art of Component API Design in React",
    excerpt:
      "How to design React component APIs that are intuitive, flexible, and maintainable at scale.",
    date: "Nov 2025",
    readTime: "6 min",
    tag: "Frontend",
  },
  {
    title: "Infrastructure as Code: Terraform Best Practices",
    excerpt:
      "Lessons learned from managing 200+ cloud resources with Terraform across multiple environments.",
    date: "Oct 2025",
    readTime: "10 min",
    tag: "DevOps",
  },
  {
    title: "Optimizing Database Queries for Sub-100ms Response",
    excerpt:
      "Practical techniques for PostgreSQL query optimization, indexing strategies, and connection pooling.",
    date: "Sep 2025",
    readTime: "9 min",
    tag: "Database",
  },
]

export function BlogSection() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Blog
        </h2>
        <div className="mt-2 h-px w-12 bg-primary" />
      </div>

      <div className="flex flex-col gap-2">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href="#"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.4, ease: "easeOut" }}
            className="group flex items-start justify-between gap-4 rounded-lg px-5 py-4 transition-colors hover:bg-card/50"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <span className="font-mono text-sm text-muted-foreground">
                {post.date}
              </span>
              <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                {post.tag}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
