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
      social: "Social",
      resume: "Resume",
    },
    home: {
      tagline: "Web/LLM Developer",
    },
    about: {
      title: "About Me",
      description1:
        "I am a Web and LLM programmer. Rather than specializing in a specific domain, my strength lies in having a strong product and business orientation, and being able to work flexibly across multiple areas as needed.",
      description2:
        "I engage in full-cycle development from backend to frontend, with particular confidence and extensive experience in backend development. I also actively work on Agent/Workflow development utilizing LLM APIs and frameworks like LangChain/Mastra. I have flexibly handled various technology stacks including AWS and Flutter app development, adapting to product needs.",
      coretech: "Core Technologies",
      backend: "Backend",
      frontendMobileInfra: "Front/Mobile/Infra",
      other: "Other",
    },
    projects: {
      title: "Projects",
      role: "Role",
      list: [
        {
          name: "This Portfolio Site",
          description: "Created with React/Next.js using v0 and hosted on Vercel.",
          tech: ["v0", "React", "Next.js", "Vercel"],
          role: "Creator",
          github: null,
          demo: null,
        },
        {
          name: "Koog Sample",
          description: "Sample explanatory code for JetBrains AI framework Koog.",
          tech: ["Kotlin", "LLM", "ORAG", "KMP"],
          role: "Creator",
          github: "https://github.com/chanrute/koog-sample?tab=readme-ov-file",
          demo: "https://zenn.dev/smartround_dev/articles/9faa2d870b15b2",
        },
        {
          name: "Stooqifier",
          description: "Python-based stock price notification service for companies.",
          tech: ["Python", "Google Cloud", "Docker", "pandas"],
          role: "Creator",
          github: "https://github.com/chanrute/stooqifier?tab=readme-ov-file",
          demo: "https://zenn.dev/t_fukumoto/articles/e5e0fe753d5726",
        },
      ],
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
      title: "Social",
      description: null,
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter",
    },
    resume: {
      title: "Resume",
      download: "Download PDF",
      career: "Career",
      education: "Education",
      languages: "Languages & Frameworks",
      cloud: "Cloud & Tools",
      experience: [
        {
          role: "Web/AI Developer",
          company: "SmartRound Inc.",
          period: "2023 - Present",
          highlights: [
            "Full-cycle web service development using Kotlin (Ktor) and TypeScript (Vue.js)",
            "Mobile app development using Flutter",
            "LLM application development using LangChain and Mastra",
          ],
        },
        {
          role: "Web Developer",
          company: "Medpeer Inc.",
          period: "2020 - 2023",
          highlights: [
            "Feature development and operational maintenance of Web APIs and admin panels using Ruby on Rails",
            "API and admin panel development for consumer-facing mobile apps using Ruby on Rails",
            "Development and maintenance of internal gems (Rails Engine) libraries",
          ],
        },
        {
          role: "Web Developer/PdM/VPoE",
          company: "Zeals Inc.",
          period: "2018 - 2020",
          highlights: [
            "Web and API feature development using Ruby on Rails/Python",
            "As Product Manager, led development planning and decision-making on service direction",
            "As VPoE, managed development organization of around 10 people and recruitment activities",
          ],
        },
        {
          role: "Solution Accountant",
          company: "Fujitsu Marketing Ltd. (now merged into Fujitsu Japan)",
          period: "2015 - 2018",
          highlights: [
            "Project management for ERP system implementation and replacement for SMEs",
            "New system/solution proposals to clients",
          ],
        },
      ],
      educationList: [
        {
          degree: "Teikyo University",
          department: "Department of Computer Science",
          period: "2022/04 ~ 2025/03",
          highlights: [
            "Study computer science at university while working.",
          ],
        },
        {
          degree: "Kindai University",
          department: "Department of Economics",
          period: "2011/04 ~ 2015/03",
          highlights: [
            "Study economics and information technology.",
          ],
        },
      ],
    },
  },
  ja: {
    nav: {
      about: "自己紹介",
      projects: "プロジェクト",
      achievements: "資格",
      blog: "ブログ",
      social: "ソーシャル",
      resume: "経歴",
    },
    home: {
      tagline: "エンジニア & クリエイティブ",
    },
    about: {
      title: "自己紹介",
      description1:
        "WebとLLMのプログラマーです。特定の領域に尖っているというよりは、プロダクトや事業への志向を強く持って、必要なことであればマルチに動くことが強みです。",
      description2:
        "バックエンドからフロントエンドまで一気通貫したフルサイクル開発を行っており、特にバックエンド開発では長い経験と自信を持っています。また、LLMのAPIやLangChain/Mastraなどを活用したAgent/Workflowの開発にも積極的に取り組んでいます。AWSやFlutterを使ったアプリ開発など、プロダクトのニーズに応じて幅広い技術スタックに対応してきました。",
      coretech: "Core Technologies",
      backend: "Backend",
      frontendMobileInfra: "Frontend/Mobile/Infra",
      other: "Other",
    },
    projects: {
      title: "プロジェクト",
      role: "役割",
      list: [
        {
          name: "ポートフォリオサイト",
          description: "v0を用いたReact/Next.jsにより作成し、Vercelへホスティングしている。",
          tech: ["v0", "React", "Next.js", "Vercel"],
          role: "作成者",
          github: null,
          demo: null,
        },
        {
          name: "Koog Sample",
          description: "JetBrains製AIフレームワークKoogのサンプル解説コード。",
          tech: ["Kotlin", "LLM", "ORAG", "KMP"],
          role: "作成者",
          github: "https://github.com/chanrute/koog-sample?tab=readme-ov-file",
          demo: "https://zenn.dev/smartround_dev/articles/9faa2d870b15b2",
        },
        {
          name: "Stooqifier",
          description: "Python製の企業の株価通知サービス",
          tech: ["Python", "Google Cloud", "Docker", "pandas"],
          role: "作成者",
          github: "https://github.com/chanrute/stooqifier?tab=readme-ov-file",
          demo: "https://zenn.dev/t_fukumoto/articles/e5e0fe753d5726",
        },
      ],
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
      title: "ソーシャル",
      description: null,
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter",
    },
    resume: {
      title: "経歴",
      download: "PDF をダウンロード",
      career: "経歴",
      education: "学歴",
      languages: "言語 & フレームワーク",
      cloud: "クラウド & ツール",
      experience: [
        {
          role: "Web/AI Developer",
          company: "株式会社SmartRound",
          period: "2023 - 現在",
          highlights: [
            "Kotlin(Ktor), TypeScript(Vue.js)を用いたフルサイクルでのWebサービスの開発",
            "Flutterを用いたモバイルアプリの開発",
            "LangChain, Mastraを用いたLLMアプリケーションの開発",
          ],
        },
        {
          role: "Web Developer",
          company: "メドピア株式会社",
          period: "2020 - 2023",
          highlights: [
            "Ruby on Railsを用いたWeb API/管理画面の機能開発および運用保守",
            "Ruby on Railsを用いたtoC向けスマホアプリのAPI/管理画面 機能の開発および運用保守",
            "社内gem(Rails Engine)を用いたライブラリの開発・メンテナンス",
          ],
        },
        {
          role: "Web Developer/PdM/VPoE",
          company: "株式会社Zeals",
          period: "2018 - 2020",
          highlights: [
            "Ruby on Rails/Pythonを用いたWebやAPI機能の開発",
            "PdMとして、開発計画の策定・推進およびサービスの方向性の意思決定",
            "VPoEとして、10人前後規模の開発組織のマネジメントや採用活動",
          ],
        },
        {
          role: "Solution Accountant",
          company: "株式会社富士通マーケティング(現: 富士通Japanへ統合)",
          period: "2015 - 2018",
          highlights: [
            "中小企業のERPシステムの導入・リプレースのプロジェクト推進",
            "顧客への新規システム/ソリューション提案",
          ],
        },
      ],
      educationList: [
        {
          degree: "帝京大学",
          department: "理工学部 情報科学科",
          period: "2022/04 ~ 2025/03",
          highlights: [
            "社会人大学生として、コンピューターサイエンスを学び直しました",
          ],
        },
        {
          degree: "近畿大学",
          department: "経済学部 経済学科",
          period: "2011/04 ~ 2015/03",
          highlights: [
            "マクロ/ミクロ経済学および、基本的な情報技術を学びました",
          ],
        },
      ],
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
