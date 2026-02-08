"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ResumeSection() {
  const { t } = useLanguage()
  const experience = t.resume.experience
  const education = t.resume.educationList
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
          {t.resume.career}
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

      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
          {t.resume.education}
        </h3>
        <div className="flex flex-col gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 3), duration: 0.4, ease: "easeOut" }}
              className="rounded-lg bg-card/50 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary/50" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <span className="font-mono text-sm text-primary/70">
                      {edu.department}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">
                  {edu.period}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-2 pl-8">
                {edu.highlights.map((h) => (
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
    </div>
  )
}
