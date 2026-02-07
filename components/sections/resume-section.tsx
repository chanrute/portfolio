"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"

const experience = [
  {
    role: "Senior Full-Stack Engineer",
    company: "TechNova Inc.",
    period: "2023 - Present",
    highlights: [
      "Architected and led development of a real-time analytics platform serving 50K+ DAU",
      "Reduced page load times by 60% through SSR optimization and edge caching",
      "Mentored a team of 5 junior developers on React and TypeScript best practices",
    ],
  },
  {
    role: "Software Engineer",
    company: "CloudBridge Solutions",
    period: "2021 - 2023",
    highlights: [
      "Built microservices architecture handling 10M+ API requests daily",
      "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
      "Designed and deployed AWS infrastructure for multi-region availability",
    ],
  },
  {
    role: "Frontend Developer",
    company: "PixelForge Studio",
    period: "2019 - 2021",
    highlights: [
      "Developed responsive web applications for enterprise clients",
      "Created a reusable component library adopted across 8 internal projects",
      "Contributed to open-source tools with 2K+ GitHub stars",
    ],
  },
]

export function ResumeSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Resume
          </h2>
          <div className="mt-1 h-px w-12 bg-primary" />
        </div>
        <a
          href="#"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Download PDF
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
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary/50" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {job.role}
                    </h4>
                    <span className="font-mono text-xs text-primary/70">
                      {job.company}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5 pl-6">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs leading-relaxed text-muted-foreground before:mr-2 before:text-primary/40 before:content-['\2022']"
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
          Education
        </h3>
        <div className="rounded-lg bg-card/50 p-5">
          <h4 className="text-sm font-semibold text-foreground">
            B.Sc. Computer Science
          </h4>
          <span className="font-mono text-xs text-primary/70">
            Chulalongkorn University
          </span>
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            2015 - 2019
          </span>
        </div>
      </div>
    </div>
  )
}
