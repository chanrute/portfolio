"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const experience = [
  {
    role: "Web Developer",
    company: "SmartRound",
    period: "2023 - Present",
    highlights: [
      "Full-stack development using Kotlin (Ktor) backend and TypeScript (Vue.js) frontend",
      "Built LLM-integrated features and AWS cloud infrastructure",
      "Developed Flutter mobile applications for cross-platform deployment",
    ],
  },
  {
    role: "Developer Program Member",
    company: "Community Developer",
    period: "2022 - Present",
    highlights: [
      "Active open-source contributor with projects on GitHub",
      "Proficient in Kotlin, TypeScript, Python, and Ruby",
      "Experience with AWS, LLM integration, and modern web frameworks",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Self-Directed Learning",
    period: "2020 - 2023",
    highlights: [
      "Mastered multiple technology stacks across backend and frontend",
      "Built production-ready applications using Ktor, Vue.js, and Flask",
      "Developed expertise in cloud deployment and infrastructure",
    ],
  },
]

export function ResumeSection() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t.resume.title}
          </h2>
          <div className="mt-2 h-px w-12 bg-primary" />
        </div>
        <a
          href="#"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-base font-medium text-background transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          {t.resume.download}
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
          Experience
        </h3>
        <div className="flex flex-col gap-4">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
              className="rounded-lg bg-card/50 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary/50" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {job.role}
                    </h4>
                    <span className="font-mono text-sm text-primary/70">
                      {job.company}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-2 pl-8">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-base leading-relaxed text-muted-foreground before:mr-3 before:text-primary/40 before:content-['\2022']"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
          Skills & Tech Stack
        </h3>
        <div className="rounded-lg bg-card/50 p-6">
          <h4 className="text-lg font-semibold text-foreground">
            {t.resume.languages}
          </h4>
          <p className="mt-3 text-base text-muted-foreground">
            Kotlin (Ktor), TypeScript (Vue.js, Next.js), Python, Ruby, Flutter
          </p>
        </div>
        <div className="rounded-lg bg-card/50 p-6">
          <h4 className="text-lg font-semibold text-foreground">
            {t.resume.cloud}
          </h4>
          <p className="mt-3 text-base text-muted-foreground">
            AWS, LLM Integration, Docker, Git, CI/CD
          </p>
        </div>
      </div>
    </div>
  )
}
