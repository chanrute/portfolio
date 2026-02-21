# 概要

[v0](https://v0.app/)を使用して開発したポートフォリオサイトです。[Vercel](https://vercel.com/)にデプロイしホスティングしています。

<https://teruhisafukumoto.com/>

# プロジェクト構成

```text
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト（メタデータ・フォント設定）
│   ├── page.tsx            # ホームページ
│   ├── globals.css         # グローバルスタイル
│   └── icon.jpg            # ファビコン
├── components/             # React コンポーネント
│   ├── portfolio-shell.tsx # メインシェル（ナビゲーション・言語切り替え）
│   ├── theme-provider.tsx  # ダーク/ライトテーマ管理
│   ├── sections/           # 各セクション
│   │   ├── about-section.tsx
│   │   ├── achievements-section.tsx
│   │   ├── blog-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── resume-section.tsx
│   │   └── sns-section.tsx
│   └── ui/                 # shadcn/ui コンポーネント群
├── lib/                    # ユーティリティ
│   ├── language-context.tsx # 言語管理（EN/JA）
│   └── utils.ts            # 共通ユーティリティ
├── hooks/                  # カスタムフック
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── public/                 # 静的ファイル
│   ├── profile.jpg
│   └── ogp.png
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

主な技術スタックは以下のとおりです。

- v0
- Vercel
- Next.js 16 / React 19 / TypeScript 5
- Tailwind CSS / shadcn/ui / Radix UI
- Framer Motion
- React Hook Form / Zod
- Google Analytics（`@next/third-parties`）

# 環境構築

## 必要要件

- Node.js 18 以上
- npm または pnpm

## セットアップ

リポジトリをクローンし、依存パッケージをインストールします。

```bash
git clone <repository-url>
cd portfolio
npm install
```

## 環境変数

`.env.local` を作成し、以下の変数を設定します。

```text
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
```

## 開発サーバーの起動

```bash
npm run dev
```

ブラウザで <http://localhost:3000> を開きます。

## ビルド・本番起動

```bash
npm run build
npm start
```

## コマンド一覧

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動する |
| `npm run build` | 本番用ビルドを生成する |
| `npm start` | 本番サーバーを起動する |
| `npm run lint` | ESLint でコードをチェックする |
