const TAG_EMOJI_MAP: Record<string, string> = {
  // Blog categories
  "AI/LLM": "🤖",
  "AI/Kotlin": "⚡",
  "Flutter/iOS": "📱",

  // Tech stack
  v0: "✨",
  React: "⚛️",
  "Next.js": "▲",
  Vercel: "▲",
  Kotlin: "🟣",
  LLM: "🧠",
  ORAG: "🔗",
  KMP: "📱",
  Python: "🐍",
  "Google Cloud": "☁️",
  Docker: "🐳",
  pandas: "🐼",
  TypeScript: "📘",
  Vue: "💚",
  Flutter: "📱",
  AWS: "☁️",
  Ruby: "💎",
  "Node.js": "🟢",
}

const FALLBACK_EMOJIS = ["🏷️", "💡", "🔧", "📦", "🛠️"]

/**
 * Returns an emoji icon for a tag label, with a stable fallback per label.
 */
export function getTagEmoji(label: string): string {
  if (TAG_EMOJI_MAP[label]) {
    return TAG_EMOJI_MAP[label]
  }

  let hash = 0
  for (let i = 0; i < label.length; i += 1) {
    hash = label.charCodeAt(i) + ((hash << 5) - hash)
  }

  return FALLBACK_EMOJIS[Math.abs(hash) % FALLBACK_EMOJIS.length]
}
