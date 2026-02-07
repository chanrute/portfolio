"use client"

import { motion } from "framer-motion"

type Proficiency = "Advanced" | "Intermediate" | "Beginner"

interface SkillItem {
  name: string
  level: Proficiency
}

interface SkillCategory {
  category: string
  items: SkillItem[]
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "Go", level: "Intermediate" },
      { name: "Rust", level: "Beginner" },
      { name: "SQL", level: "Advanced" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React / Next.js", level: "Advanced" },
      { name: "Vue.js / Nuxt", level: "Intermediate" },
      { name: "Node.js / Express", level: "Advanced" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "AWS (EC2, S3, Lambda)", level: "Advanced" },
      { name: "Docker / Kubernetes", level: "Advanced" },
      { name: "CI/CD (GitHub Actions)", level: "Advanced" },
      { name: "Terraform", level: "Intermediate" },
      { name: "PostgreSQL / Redis", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
    ],
  },
]

const levelColors: Record<Proficiency, string> = {
  Advanced: "bg-primary text-background",
  Intermediate: "bg-primary/30 text-primary",
  Beginner: "bg-muted text-muted-foreground",
}

const levelWidths: Record<Proficiency, string> = {
  Advanced: "w-full",
  Intermediate: "w-2/3",
  Beginner: "w-1/3",
}

export function SkillsSection() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Skills Matrix
        </h2>
        <div className="mt-2 h-px w-12 bg-primary" />
      </div>

      <div className="flex flex-col gap-6">
        {skillsData.map((category, ci) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * ci, duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-4 rounded-lg bg-card/50 px-5 py-3"
                >
                  <span className="text-base font-medium text-foreground">{skill.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-20 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full rounded-full bg-primary transition-all ${levelWidths[skill.level]}`}
                      />
                    </div>
                    <span
                      className={`shrink-0 rounded px-2 py-1 font-mono text-xs uppercase tracking-wide ${levelColors[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
