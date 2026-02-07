"use client"

import React from "react"

import { useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { BlogSection } from "@/components/sections/blog-section"
import { SNSSection } from "@/components/sections/sns-section"
import { ResumeSection } from "@/components/sections/resume-section"

type View = "home" | "about" | "projects" | "skills" | "achievements" | "blog" | "sns" | "resume"

const navItems: { label: string; view: View }[] = [
  { label: "About", view: "about" },
  { label: "Projects", view: "projects" },
  { label: "Skills", view: "skills" },
  { label: "Achievements", view: "achievements" },
  { label: "Blog", view: "blog" },
  { label: "Connect", view: "sns" },
  { label: "Resume", view: "resume" },
]

const viewComponents: Record<Exclude<View, "home">, React.ComponentType> = {
  about: AboutSection,
  projects: ProjectsSection,
  skills: SkillsSection,
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

  const navigateTo = useCallback((view: View) => {
    setActiveView(view)
    setMobileMenuOpen(false)
  }, [])

  const ActiveComponent = activeView !== "home" ? viewComponents[activeView] : null

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 shrink-0 flex-col justify-between border-r border-border/50 p-8 md:flex lg:w-72">
        <div className="flex flex-col gap-8">
          {/* Identity */}
          <button
            type="button"
            onClick={() => navigateTo("home")}
            className="flex flex-col items-start gap-3 text-left"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border/50">
              <Image
                src="/profile.jpg"
                alt="chanrute profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                chanrute
              </h1>
              <p className="font-mono text-sm text-muted-foreground">
                Engineer & Creative
              </p>
            </div>
          </button>

          {/* Navigation */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.view}
                type="button"
                onClick={() => navigateTo(item.view)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-base transition-colors ${
                  activeView === item.view
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                }`}
              >
                <span
                  className={`h-px transition-all ${
                    activeView === item.view ? "w-4 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/chanrute"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/chanrute"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com/chanrute"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="flex items-center justify-between border-b border-border/50 p-4 md:hidden">
        <button
          type="button"
          onClick={() => navigateTo("home")}
          className="flex items-center gap-2"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border/50">
            <Image
              src="/profile.jpg"
              alt="chanrute profile"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-bold text-foreground">chanrute</span>
        </button>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-sm md:hidden"
          >
            <div className="flex items-center justify-between border-b border-border/50 p-4">
              <span className="text-sm font-bold text-foreground">chanrute</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-1.5 text-muted-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.view}
                  type="button"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  onClick={() => navigateTo(item.view)}
                  className={`rounded-lg px-4 py-3 text-left text-lg transition-colors ${
                    activeView === item.view
                      ? "font-medium text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <div className="flex items-center gap-4 border-t border-border/50 p-6">
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
      <main className="flex flex-1 items-center justify-center overflow-hidden p-4 md:p-8">
        <AnimatePresence mode="wait">
          {activeView === "home" ? (
            <motion.div
              key="home"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 text-center"
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
                  chanrute
                </h1>
                <p className="font-mono text-lg text-muted-foreground">
                  Engineer & Creative
                </p>
              </div>
              <div className="mt-2 hidden flex-wrap justify-center gap-2 md:flex">
                {navItems.map((item) => (
                  <button
                    key={item.view}
                    type="button"
                    onClick={() => navigateTo(item.view)}
                    className="rounded-lg border border-border/50 px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeView}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full w-full max-w-3xl overflow-y-auto rounded-xl bg-card/30 p-6 md:p-8"
            >
              {ActiveComponent && <ActiveComponent />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
