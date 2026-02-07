"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "CloudSync Dashboard",
    description:
      "Real-time cloud infrastructure monitoring platform with automated alerting and cost optimization insights.",
    tech: ["React", "TypeScript", "AWS", "GraphQL", "Docker"],
    role: "Lead Developer",
    github: "#",
    demo: "#",
  },
  {
    name: "DevFlow CLI",
    description:
      "A developer productivity CLI tool that automates repetitive workflows, from scaffolding to deployment pipelines.",
    tech: ["Go", "Cobra", "Docker", "CI/CD"],
    role: "Creator & Maintainer",
    github: "#",
    demo: null,
  },
  {
    name: "PixelCraft Studio",
    description:
      "Browser-based collaborative design tool with real-time multiplayer editing and version control for assets.",
    tech: ["Next.js", "WebSocket", "PostgreSQL", "Tailwind CSS"],
    role: "Full-stack Developer",
    github: "#",
    demo: "#",
  },
  {
    name: "Neural Notes",
    description:
      "AI-powered note-taking application with smart tagging, semantic search, and automatic summarization.",
    tech: ["Python", "FastAPI", "React", "OpenAI", "Redis"],
    role: "Backend Architect",
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
        <div className="mt-1 h-px w-12 bg-primary" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeOut" }}
            className="group flex flex-col gap-3 rounded-lg bg-card/50 p-5 transition-colors hover:bg-card"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">
                  {project.name}
                </h3>
                <span className="font-mono text-xs text-primary/70">
                  {project.role}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    aria-label={`GitHub repository for ${project.name}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    aria-label={`Live demo of ${project.name}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
