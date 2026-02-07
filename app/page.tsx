import { PortfolioShell } from "@/components/portfolio-shell"
import { LanguageProvider } from "@/lib/language-context"

export default function Page() {
  return (
    <LanguageProvider>
      <PortfolioShell />
    </LanguageProvider>
  )
}
