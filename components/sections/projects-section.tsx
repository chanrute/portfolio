"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ProjectsSection() {
  const { t } = useLanguage()
  const projects = t.projects.list
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          {t.projects.title}
        </h2>
        <div className="mt-2 h-px w-12 bg-primary" />
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
              <h3 className="text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    aria-label={`GitHub repository for ${project.name}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    aria-label={`Live demo of ${project.name}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded bg-primary/10 px-3 py-1 font-mono text-sm text-primary"
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
