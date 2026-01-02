# Pick up lab

**サービス名**: Pick up lab  
**タグライン**: 「24時間365日、AIコーチングがあなたの上達をサポートする」  
**USP**: AIと人間のハイブリッドナンパコーチングを提供する唯一のサービス

## 技術スタック

- **フロントエンド**: Next.js 16+ (App Router), TypeScript, Tailwind CSS
- **バックエンド**: Next.js API Routes
- **データベース**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **認証**: NextAuth.js
- **決済**: Utage（サブスクリプション）
- **AI**: OpenAI API（コーチング、分析、改善アクション生成）
- **ホスティング**: Vercel

## ドメイン設定

- **ドメイン**: `pickuplab.jp`
- **ドメイン取得サービス**: お名前.com
- **ホスティング**: Vercel

詳細は `ドメイン実装手順_pickuplab.jp.md` を参照してください。

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 環境変数

`.env.example`を参考に、`.env.local`ファイルを作成してください。

## デプロイ

Vercelに自動デプロイされます。GitHubリポジトリにプッシュすると、自動的にデプロイが開始されます。
