"use client"

import React, { createContext, useContext, useState } from "react"

type Language = "en" | "ja"

const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      achievements: "Achievements",
      blog: "Blog",
      connect: "Connect",
      resume: "Resume",
    },
    home: {
      tagline: "Engineer & Creative",
    },
    about: {
      title: "About Me",
      description1:
        "I am a passionate full-stack engineer and creative technologist with a deep interest in building elegant, high-performance digital experiences. Currently focused on cloud-native architectures and modern frontend frameworks, I thrive at the intersection of design and engineering.",
      description2:
        "When I am not writing code, you can find me exploring new technologies, contributing to open-source projects, and sharing knowledge through technical writing and mentorship.",
      coretech: "Core Technologies",
      frontend: "Frontend",
      backend: "Backend",
      devops: "Cloud & DevOps",
    },
    projects: {
      title: "Projects",
      role: "Role",
    },
    achievements: {
      title: "Achievements",
      certifications: "Certifications",
      hackathons: "Hackathons",
      media: "Media Features",
    },
    blog: {
      title: "Blog",
    },
    sns: {
      title: "Connect",
      description:
        "Feel free to reach out for collaborations, speaking engagements, or just a conversation about technology and design.",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter",
    },
    resume: {
      title: "Resume",
      download: "Download PDF",
      skills: "Skills & Tech Stack",
      languages: "Languages & Frameworks",
      cloud: "Cloud & Tools",
    },
  },
  ja: {
    nav: {
      about: "について",
      projects: "プロジェクト",
      achievements: "実績",
      blog: "ブログ",
      connect: "つながる",
      resume: "レジュメ",
    },
    home: {
      tagline: "エンジニア & クリエイティブ",
    },
    about: {
      title: "について",
      description1:
        "エレガントで高性能なデジタル体験を構築することに情熱を持つ、フルスタックエンジニアでありクリエイティブテクノロジストです。クラウドネイティブアーキテクチャとモダンフロントエンドフレームワークに注力しており、デザインとエンジニアリングの交差点で活躍しています。",
      description2:
        "コードを書いていない時は、新しい技術を探索したり、オープンソースプロジェクトに貢献したり、技術ブログやメンターシップを通じて知識を共有しています。",
      coretech: "コア技術",
      frontend: "フロントエンド",
      backend: "バックエンド",
      devops: "クラウド & DevOps",
    },
    projects: {
      title: "プロジェクト",
      role: "役割",
    },
    achievements: {
      title: "実績",
      certifications: "認定資格",
      hackathons: "ハッカソン",
      media: "メディア掲載",
    },
    blog: {
      title: "ブログ",
    },
    sns: {
      title: "つながる",
      description:
        "コラボレーション、スピーキングエンゲージメント、または技術とデザインについての会話のためにお気軽にお問い合わせください。",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter",
    },
    resume: {
      title: "レジュメ",
      download: "PDF をダウンロード",
      skills: "スキル & 技術スタック",
      languages: "言語 & フレームワーク",
      cloud: "クラウド & ツール",
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (typeof translations)["en"]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
