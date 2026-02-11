import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Teruhisa Fukumoto | Portfolio',
  description: 'portofolio of Teruhisa Fukumoto(福本 晃之). I\'m Web/LLM Developer',
  openGraph: {
    title: 'Teruhisa Fukumoto | Portfolio',
    description: 'portofolio of Teruhisa Fukumoto(福本 晃之). I\'m Web/LLM Developer',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teruhisa Fukumoto | Portfolio',
    description: 'Portfolio of Teruhisa Fukumoto(福本 晃之) - I\'m Web/LLM Developer',
    images: ['/ogp.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#222831',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  )
}
