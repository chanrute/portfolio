"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const skillsData = {
  "Backend": ["Kotlin", "Python", "Ruby", "Node.js"],
  "Front/Mobile/Infra": ["TypeScript (Vue)", "Flutter", "AWS", "Docker"],
  "Other": ["Recruiting", "Management", "DevRel"],
}

export function AboutSection() {
  const { t } = useLanguage()
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
              {t.about.title}
            </h2>
            <div className="mt-1 h-px w-12 bg-primary" />
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.about.description1}
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.about.description2}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primary">
          {t.about.coretech}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Object.entries(skillsData).map(([category, items], i) => {
            const translatedCategory = category === "Backend" ? t.about.backend :
              category === "Front/Mobile/Infra" ? t.about.frontendMobileInfra :
                t.about.other
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
                className="rounded-lg bg-card/50 p-4"
              >
                <h4 className="mb-3 font-mono text-sm uppercase tracking-wider text-primary/70">
                  {translatedCategory}
                </h4>
                <ul className="flex flex-col gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-lg text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
