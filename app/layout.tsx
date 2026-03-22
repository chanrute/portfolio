import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

const siteUrl = 'https://www.teruhisafukumoto.com'

export const metadata: Metadata = {
  title: '福本 晃之 (Teruhisa Fukumoto) | Webエンジニア ポートフォリオ',
  description: 'スマートラウンドでWeb/LLMエンジニアを務める福本 晃之（Teruhisa Fukumoto）のポートフォリオサイトです。これまでの開発実績、登壇資料、ブログ記事、キャリアについてまとめています。',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '福本 晃之 (Teruhisa Fukumoto) | Webエンジニア ポートフォリオ',
    description: 'スマートラウンドでWeb/LLMエンジニアを務める福本 晃之（Teruhisa Fukumoto）のポートフォリオサイトです。これまでの開発実績、登壇資料、ブログ記事、キャリアについてまとめています。',
    url: siteUrl,
    siteName: '福本 晃之 ポートフォリオ',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '福本 晃之 (Teruhisa Fukumoto) | Webエンジニア ポートフォリオ',
    description: 'スマートラウンドでWeb/LLMエンジニアを務める福本 晃之（Teruhisa Fukumoto）のポートフォリオサイトです。',
    images: ['/ogp.png'],
    creator: '@chanrute',
  },
}

export const viewport: Viewport = {
  themeColor: '#222831',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '福本 晃之',
  alternateName: 'Teruhisa Fukumoto',
  jobTitle: 'Web/LLM Engineer',
  url: siteUrl,
  sameAs: [
    'https://x.com/chanrute',
    'https://github.com/chanrute',
    'https://www.wantedly.com/id/teruhisa_fukumoto',
    'https://youtrust.jp/users/chanrute',
  ],
  worksFor: {
    '@type': 'Organization',
    name: '株式会社スマートラウンド',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  )
}
