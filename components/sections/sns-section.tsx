"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, ExternalLink, Facebook, Instagram, BookOpen, FileText, Presentation, Book, Film, MessageCircle } from "lucide-react"
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
    name: "X (Twitter)",
    handle: "@terry_i_",
    url: "https://x.com/terry_i_",
    icon: Twitter,
    description: "Tech insights and industry commentary",
  },
  {
    name: "Blog (Medium)",
    handle: "@chanrute",
    url: "https://medium.com/@chanrute",
    icon: BookOpen,
    description: "Technical articles and blog posts",
  },
  {
    name: "Zenn",
    handle: "@t_fukumoto",
    url: "https://zenn.dev/t_fukumoto",
    icon: FileText,
    description: "Technical articles in Japanese",
  },
  {
    name: "SpeakerDeck",
    handle: "@chanrute",
    url: "https://speakerdeck.com/chanrute",
    icon: Presentation,
    description: "Conference slides and presentations",
  },
  {
    name: "Qiita",
    handle: "@chanrute",
    url: "https://qiita.com/chanrute",
    icon: FileText,
    description: "Programming tips and articles",
  },
  {
    name: "Bookmeter",
    handle: "Reading Log",
    url: "https://bookmeter.com/users/629901",
    icon: Book,
    description: "Book reviews and reading history",
  },
  {
    name: "Filmarks",
    handle: "Movie Log",
    url: "https://filmarks.com/users/teruid",
    icon: Film,
    description: "Movie reviews and watchlist",
  },
  {
    name: "LinkedIn",
    handle: "chanrute",
    url: "https://linkedin.com/in/chanrute",
    icon: Linkedin,
    description: "Professional network and career updates",
  },
  {
    name: "Facebook",
    handle: "Teruhisa Fukumoto",
    url: "https://www.facebook.com/teruhisa.fukumoto",
    icon: Facebook,
    description: "Personal updates and connections",
  },
  {
    name: "Instagram",
    handle: "@chanrute0324",
    url: "https://instagram.com/chanrute0324",
    icon: Instagram,
    description: "Photos and daily moments",
  },
  {
    name: "Threads",
    handle: "@chanrute0324",
    url: "https://www.threads.com/chanrute0324",
    icon: MessageCircle,
    description: "Casual conversations and thoughts",
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
