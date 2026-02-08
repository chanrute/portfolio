"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const posts = [
  {
    title: {
      en: "Using Google Vertex AI (Gemini) Context Cache with Vercel AI SDK",
      ja: "Vercel AI SDKでGoogle Vertex AI(Gemini)のコンテキストキャッシュを使う"
    },
    excerpt: {
      en: "How to reduce Gemini input token processing costs by 75% using context caching with Vercel AI SDK.",
      ja: "Vercel AI SDKを使ってGeminiの入力トークン処理コストを75%削減する方法。"
    },
    date: "2025/10",
    tag: "AI/LLM",
    url: "https://zenn.dev/smartround_dev/articles/99560644f138d9",
  },
  {
    title: {
      en: "[Kotlin] JetBrains Official AI Agent \"Koog\" 0.4.0 Released",
      ja: "[Kotlin] JetBrains公式AIエージェント「Koog」0.4.0リリース"
    },
    excerpt: {
      en: "Exploring new features in Koog 0.4.0: Ktor integration, native structured output, and KMP iOS support.",
      ja: "Koog 0.4.0の新機能を探索：Ktor統合、ネイティブ構造化出力、KMP iOSサポート。"
    },
    date: "2025/09",
    tag: "AI/Kotlin",
    url: "https://zenn.dev/smartround_dev/articles/edfce676fd3aaf",
  },
  {
    title: {
      en: "Getting Started with Koog: JetBrains' Kotlin AI Agent Framework",
      ja: "JetBrains公式のKotlin製AIエージェントフレームワーク「Koog」やるぞ"
    },
    excerpt: {
      en: "Building a recipe PDF analyzer using JetBrains' official Kotlin AI agent framework announced at KotlinConf 2025.",
      ja: "KotlinConf 2025で発表されたJetBrains公式のKotlin AIエージェントフレームワークでレシピPDF解析を実装。"
    },
    date: "2025/08",
    tag: "AI/Kotlin",
    url: "https://zenn.dev/smartround_dev/articles/9faa2d870b15b2",
  },
  {
    title: {
      en: "Implementing Apple Privacy Manifests in smartround's Flutter App",
      ja: "smartroundのFlutterアプリでApple Privacy Manifests対応をはじめてやった"
    },
    excerpt: {
      en: "First-time implementation of Apple Privacy Manifests compliance for a Flutter mobile application.",
      ja: "FlutterモバイルアプリでApple Privacy Manifests対応を初めて実装した記録。"
    },
    date: "2024/07",
    tag: "Flutter/iOS",
    url: "https://zenn.dev/smartround_dev/articles/d2027d3e19f2db",
  },
  {
    title: {
      en: "Serving Asset Files with CloudFront + S3 Using asset_sync",
      ja: "asset_syncを使ってCloud Front + S3でassetファイルを配信する"
    },
    excerpt: {
      en: "Reducing ECS container image size by offloading asset delivery to CloudFront and S3.",
      ja: "アセットファイルの配信をCloudFront + S3にオフロードしてECSコンテナイメージサイズを削減。"
    },
    date: "2022/11",
    tag: "Rails/AWS",
    url: "https://zenn.dev/t_fukumoto/articles/bf56daeaf616c4",
  },
]

export function BlogSection() {
  const { t, language } = useLanguage()
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          {t.blog.title}
        </h2>
        <div className="mt-2 h-px w-12 bg-primary" />
      </div>

      <div className="flex flex-col gap-2">
        {posts.map((post, i) => (
          <motion.a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.4, ease: "easeOut" }}
            className="group flex items-start justify-between gap-4 rounded-lg px-5 py-4 transition-colors hover:bg-card/50"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {post.title[language]}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {post.excerpt[language]}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <span className="font-mono text-sm text-muted-foreground">
                {post.date}
              </span>
              <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                {post.tag}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
