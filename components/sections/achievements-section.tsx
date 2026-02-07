"use client"

import React from "react"

import { motion } from "framer-motion"
import { Award, BookOpen, Trophy } from "lucide-react"

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
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Achievements
        </h2>
        <div className="mt-1 h-px w-12 bg-primary" />
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
            <div className="flex items-center gap-2">
              <group.icon className="h-4 w-4 text-primary" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              {group.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between gap-4 rounded-lg bg-card/50 px-4 py-3"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-foreground">
                      {item.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.detail}
                    </span>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-primary/60">
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
