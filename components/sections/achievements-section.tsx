"use client"

import React from "react"

import { motion } from "framer-motion"
import { Award, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface Achievement {
  icon: React.ElementType
  category: { en: string; ja: string }
  items: { title: { en: string; ja: string }; detail: { en: string; ja: string }; year: string; url?: string }[]
}

const achievements: Achievement[] = [
  {
    icon: Award,
    category: { en: "Certifications", ja: "資格" },
    items: [
      {
        title: {
          en: "Fundamental Information Technology Engineer Examination",
          ja: "基本情報技術者試験"
        },
        detail: {
          en: "Information-technology Promotion Agency (IPA), Japan",
          ja: "情報処理推進機構（IPA）"
        },
        year: "2015/05",
      },
      {
        title: {
          en: "Linux Professional Institute Certification (LPIC) Level 1",
          ja: "Linux Professional Institute Certification (LPIC) Level 1"
        },
        detail: {
          en: "Linux Professional Institute",
          ja: "Linux Professional Institute"
        },
        year: "2021/11",
        url: "https://cs.lpi.org/caf/Xamman/certification/verify/LPI000450347/yhyx5attm3",
      },
      {
        title: {
          en: "AWS Certified Solutions Architect – Associate (SAA)",
          ja: "AWS Certified Solutions Architect – Associate (SAA)"
        },
        detail: {
          en: "Amazon Web Services",
          ja: "Amazon Web Services"
        },
        year: "2022/02",
        url: "https://www.credly.com/badges/786ae87f-e882-4e03-b81c-5dc9db0c8d9c/public_url",
      },
      {
        title: {
          en: "Grade 2 Statistics Certification",
          ja: "統計検定 2級"
        },
        detail: {
          en: "Japan Statistical Society",
          ja: "日本統計学会"
        },
        year: "2024/09",
      },
    ],
  },
  {
    icon: BookOpen,
    category: { en: "Media & Articles", ja: "メディア掲載" },
    items: [
      {
        title: {
          en: "Rails API Communication: 100 Error Notifications and Three Solutions",
          ja: "RailsのAPI通信で届いた100回のエラー通知　トラブル状態から\"普通\"を目指すための3つの解決法"
        },
        detail: {
          en: "logmi.jp",
          ja: "logmi.jp"
        },
        year: "2021/10",
        url: "https://logmi.jp/main/technology/325212",
      },
      {
        title: {
          en: "Learning Decision-Making from the Cuban Missile Crisis",
          ja: "人類史上最もHardな意思決定『キューバ危機』から学ぶ意思決定のすすめ方"
        },
        detail: {
          en: "Gadget Tsushin",
          ja: "ガジェット通信"
        },
        year: "2018",
        url: "https://getnews.jp/archives/2158006",
      },
    ],
  },
]

export function AchievementsSection() {
  const { t, language } = useLanguage()
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
            key={group.category.en}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * gi, duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <group.icon className="h-5 w-5 text-primary" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-primary">
                {group.category[language]}
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {group.items.map((item, idx) => {
                const content = (
                  <div className="flex items-start justify-between gap-4 rounded-lg bg-card/50 px-5 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-medium text-foreground">
                        {item.title[language]}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.detail[language]}
                      </span>
                    </div>
                    <span className="shrink-0 font-mono text-sm text-primary/60">
                      {item.year}
                    </span>
                  </div>
                )

                return item.url ? (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={idx}>
                    {content}
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
