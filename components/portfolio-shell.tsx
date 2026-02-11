"use client"

import React from "react"

import { useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Github, Linkedin, Twitter, Languages } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { BlogSection } from "@/components/sections/blog-section"
import { SNSSection } from "@/components/sections/sns-section"
import { ResumeSection } from "@/components/sections/resume-section"

type View = "home" | "about" | "projects" | "achievements" | "blog" | "sns" | "resume"

const viewComponents: Record<Exclude<View, "home">, React.ComponentType> = {
  about: AboutSection,
  projects: ProjectsSection,
  achievements: AchievementsSection,
  blog: BlogSection,
  sns: SNSSection,
  resume: ResumeSection,
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export function PortfolioShell() {
  const [activeView, setActiveView] = useState<View>("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { label: t.nav.about, view: "about" as const },
    { label: t.nav.resume, view: "resume" as const },
    { label: t.nav.blog, view: "blog" as const },
    { label: t.nav.social, view: "sns" as const },
    { label: t.nav.achievements, view: "achievements" as const },
    { label: t.nav.projects, view: "projects" as const },
  ]

  const navigateTo = useCallback((view: View) => {
    setActiveView(view)
    setMobileMenuOpen(false)
  }, [])

  const ActiveComponent = activeView !== "home" ? viewComponents[activeView] : null

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background" style={{
      backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.4), transparent 35%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.4), transparent 35%), linear-gradient(135deg, #1f0000 0%, #000000 40%, #000000 60%, #001f3f 100%)'
    }}>
      {/* Fixed Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/20 bg-black/20 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-full items-center justify-between gap-8 px-4 py-4 md:px-8 md:py-5">
          <button
            type="button"
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20">
              <Image
                src="/profile.jpg"
                alt="chanrute profile"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold text-foreground">chanrute</span>
          </button>
          <nav className="hidden flex-wrap items-center justify-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.view}
                type="button"
                onClick={() => navigateTo(item.view)}
                className={`font-mono text-2xl transition-colors ${activeView === item.view
                  ? "font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "ja" : "en")}
              aria-label={language === "en" ? "Switch to Japanese" : "Switch to English"}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Languages className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm md:hidden pt-20"
          >
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-5 right-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-1 flex-col gap-1 p-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.view}
                  type="button"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  onClick={() => navigateTo(item.view)}
                  className={`rounded-lg px-4 py-3 text-left text-2xl transition-colors ${activeView === item.view
                    ? "font-medium text-primary"
                    : "text-muted-foreground"
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <div className="flex items-center gap-4 border-t border-border/20 p-6">
              <a href="https://github.com/chanrute" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/chanrute" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/chanrute" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Display Area */}
      <main className="flex flex-1 items-center justify-center overflow-hidden p-4 md:p-8 pt-24 md:pt-28">
        <AnimatePresence mode="wait">
          {activeView === "home" ? (
            <motion.div
              key="home"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 text-center cursor-pointer md:cursor-default"
              onClick={() => { if (window.innerWidth < 768) setMobileMenuOpen(true) }}
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 md:h-32 md:w-32">
                <Image
                  src="/profile.jpg"
                  alt="chanrute profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Teruhisa Fukumoto
                </h1>
                <p className="font-mono text-2xl text-muted-foreground">
                  {t.home.tagline}
                </p>
              </div>

            </motion.div>
          ) : (
            <motion.div
              key={activeView}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full w-full max-w-3xl overflow-y-auto rounded-xl bg-black/30 backdrop-blur-md border border-white/10 p-6 md:p-8"
            >
              {ActiveComponent && <ActiveComponent />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
