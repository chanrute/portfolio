"use client"

import React from "react"

import { useState, useCallback, useEffect } from "react"
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

  useEffect(() => {
    if (!mobileMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  const ActiveComponent = activeView !== "home" ? viewComponents[activeView] : null

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background" style={{
      backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.4), transparent 35%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.4), transparent 35%), linear-gradient(135deg, #1f0000 0%, #000000 40%, #000000 60%, #001f3f 100%)'
    }}>
      {/* Fixed Top Navigation — Liquid Glass header */}
      <header className={`lg lg-shadow fixed top-0 left-0 right-0 ${mobileMenuOpen ? "z-[60]" : "z-40"}`} style={{ borderRadius: 0 }}>
        <div className="lg-distort" style={{ borderRadius: 0 }} />
        <div className="mx-auto flex w-full max-w-full items-center justify-between gap-8 px-4 py-4 md:px-8 md:py-5" style={{ position: 'relative', zIndex: 2 }}>
          <button
            type="button"
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 0 0 1.5px rgba(255,255,255,0.18)' }}>
              <Image
                src="/profile.jpg"
                alt="chanrute profile"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold text-white/90">chanrute</span>
          </button>

          {/* Desktop nav — each active item gets a liquid glass pill */}
          <nav className="hidden flex-wrap items-center justify-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.view}
                type="button"
                onClick={() => navigateTo(item.view)}
                className={`lg-nav-item text-2xl ${
                  activeView === item.view
                    ? "lg-nav-item--active lg lg-sm lg-dark lg-pill lg-shadow-sm"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "ja" : "en")}
              aria-label={language === "en" ? "Switch to Japanese" : "Switch to English"}
              className="lg lg-sm lg-pill lg-btn lg-shadow-sm flex items-center gap-1.5 px-3 py-1.5 text-white/70 text-sm font-mono"
            >
              <Languages className="h-4 w-4" />
              <span>{language === "en" ? "JA" : "EN"}</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg lg-sm lg-pill lg-btn lg-shadow-sm p-2 text-white/70 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay — full-screen opaque Dark Glass */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col overflow-hidden md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="lg-mobile-overlay" aria-hidden="true" />

            <div className="relative z-10 flex min-h-0 flex-1 flex-col pt-20">
              <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-4">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.view}
                    type="button"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.28 }}
                    onClick={() => navigateTo(item.view)}
                    className={`lg-nav-item lg-nav-item--mobile text-2xl ${
                      activeView === item.view ? "lg-nav-item--active" : ""
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              <div className="flex shrink-0 items-center gap-4 border-t border-white/10 px-6 py-6">
                <a href="https://github.com/chanrute" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/50 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/chanrute" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/chanrute" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white/50 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Display Area */}
      <main
        className="flex flex-1 items-center justify-center overflow-hidden p-4 md:p-8 pt-10 md:pt-12"
        aria-hidden={mobileMenuOpen}
      >
        <AnimatePresence mode="wait">
          {activeView === "home" ? (
            <motion.div
              key="home"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col items-center gap-8 text-center cursor-pointer md:cursor-default"
              onClick={() => { if (window.innerWidth < 768) setMobileMenuOpen(true) }}
            >
              {/* Avatar with liquid glass ring */}
              <div
                className="lg lg-shadow"
                style={{ borderRadius: '50%', padding: 3 }}
              >
                <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-32 md:w-32">
                  <Image
                    src="/profile.jpg"
                    alt="chanrute profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name + tagline */}
              <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                  {language === "ja" ? "福本 晃之" : "Teruhisa Fukumoto"}
                </h1>
                <p className="font-mono text-xl text-white/60">
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
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg lg-dark lg-shadow h-full w-full max-w-3xl overflow-hidden"
              style={{ borderRadius: 24 }}
            >
              <div className="lg-distort" style={{ borderRadius: 24 }} />
              <div className="relative z-[2] h-full overflow-y-auto p-6 md:p-8">
                {ActiveComponent && <ActiveComponent />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
