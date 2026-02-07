"use client"

import React from "react"

import { motion } from "framer-motion"
import { Award, BookOpen, Trophy } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface Achievement {
  icon: React.ElementType
  category: string
  items: { title: string; detail: string; year: string }[]
}

const achievements: Achievement[] = [
  {
    icon: Award,
    category: "AWS Certifications",
    items: [
      {
        title: "AWS Solutions Architect - Professional",
        detail: "Amazon Web Services",
        year: "2024",
      },
      {
        title: "AWS Developer - Associate",
        detail: "Amazon Web Services",
        year: "2023",
      },
      {
        title: "AWS Cloud Practitioner",
        detail: "Amazon Web Services",
        year: "2022",
      },
    ],
  },
  {
    icon: Trophy,
    category: "Hackathons & Awards",
    items: [
      {
        title: "1st Place - Global AI Hackathon",
        detail: "Built an AI-driven accessibility tool for visually impaired users",
        year: "2024",
      },
      {
        title: "Best Technical Innovation",
        detail: "DevConf International 2023",
        year: "2023",
      },
      {
        title: "Top 10 Finalist - Startup Weekend",
        detail: "Pitched a cloud-native SaaS platform for SMBs",
        year: "2022",
      },
    ],
  },
  {
    icon: BookOpen,
    category: "Media & Articles",
    items: [
      {
        title: "Featured in Tech Radar Weekly",
        detail: "Interview on modern frontend architecture",
        year: "2024",
      },
      {
        title: "Published: 'Scaling React at Enterprise'",
        detail: "Medium Engineering Blog - 12K+ reads",
        year: "2023",
      },
    ],
  },
]

export function AchievementsSection() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          {t.achievements.title}
        </h2>
        <div className="mt-2 h-px w-12 bg-primary" />
      </div>

      <div className="flex flex-col gap-6">
        {achievements.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * gi, duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <group.icon className="h-5 w-5 text-primary" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-primary">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {group.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between gap-4 rounded-lg bg-card/50 px-5 py-4"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-medium text-foreground">
                      {item.title}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.detail}
                    </span>
                  </div>
                  <span className="shrink-0 font-mono text-sm text-primary/60">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
