import { getTagEmoji } from "@/lib/tag-emojis"

type DynamicTagProps = {
  label: string
  emoji?: string
  className?: string
}

/**
 * Matte glass chip with emoji icon — avoids the shiny Liquid Glass pill look.
 */
export function DynamicTag({ label, emoji, className = "" }: DynamicTagProps) {
  const icon = emoji ?? getTagEmoji(label)

  return (
    <span className={`lg-chip ${className}`.trim()}>
      <span className="lg-chip__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="lg-chip__label">{label}</span>
    </span>
  )
}
