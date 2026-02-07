"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const links = [
  {
    name: "GitHub",
    handle: "@chanrute",
    url: "https://github.com/chanrute",
    icon: Github,
    description: "Open source projects and contributions",
  },
  {
    name: "LinkedIn",
    handle: "chanrute",
    url: "https://linkedin.com/in/chanrute",
    icon: Linkedin,
    description: "Professional network and career updates",
  },
  {
    name: "Twitter / X",
    handle: "@chanrute",
    url: "https://twitter.com/chanrute",
    icon: Twitter,
    description: "Tech insights and industry commentary",
  },
]

export function SNSSection() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          {t.sns.title}
        </h2>
        <div className="mt-2 h-px w-12 bg-primary" />
      </div>

      <p className="max-w-md text-base leading-relaxed text-muted-foreground">
        {t.sns.description}
      </p>

      <div className="flex flex-col gap-3">
        {links.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
            className="group flex items-center gap-4 rounded-lg bg-card/50 p-5 transition-colors hover:bg-card"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <link.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="text-lg font-medium text-foreground">
                {link.name}
              </span>
              <span className="font-mono text-base text-muted-foreground">
                {link.handle}
              </span>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.a>
        ))}
      </div>
    </div>
  )
}
