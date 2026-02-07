"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  "Backend": ["Node.js", "Python", "Go", "REST APIs", "GraphQL"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
}

export function AboutSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-primary/30">
          <Image
            src="/profile.jpg"
            alt="chanrute profile photo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              About Me
            </h2>
            <div className="mt-1 h-px w-12 bg-primary" />
          </div>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            I am a passionate full-stack engineer and creative technologist with a deep interest in building
            elegant, high-performance digital experiences. Currently focused on cloud-native architectures
            and modern frontend frameworks, I thrive at the intersection of design and engineering.
          </p>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            When I am not writing code, you can find me exploring new technologies, contributing to open-source
            projects, and sharing knowledge through technical writing and mentorship.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
          Core Technologies
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
              className="rounded-lg bg-card/50 p-4"
            >
              <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-primary/70">
                {category}
              </h4>
              <ul className="flex flex-col gap-1.5">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-sm text-muted-foreground"
                  >
                    {skill}
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
