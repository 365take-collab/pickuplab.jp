# Vercelプロジェクト作成手順（pickuplab.jp）

## 🚀 Vercelから直接GitHubリポジトリをインポート（推奨）

GitHubへのプッシュがうまくいかない場合でも、Vercelから直接GitHubリポジトリをインポートできます。

### ステップ1: Vercelにアクセス

1. **Vercelにアクセス**: https://vercel.com/
2. **ログイン**: GitHubアカウントでログイン
3. **ダッシュボード**: https://vercel.com/dashboard

### ステップ2: 新しいプロジェクトを作成

1. **New Project** ボタンをクリック
2. **Import Git Repository** を選択
3. **GitHub** を選択（既に連携済みの場合）

### ステップ3: リポジトリを選択

1. **リポジトリを検索**: 「pickuplab」と入力
2. **pickuplab** リポジトリを選択
3. **Import** をクリック

### ステップ4: プロジェクト設定

1. **Project Name**: `pickuplab` または `pickup-lab`
2. **Framework Preset**: **Next.js** を選択（自動検出される場合が多い）
3. **Root Directory**: `./` を選択
4. **Build Command**: （自動検出）
5. **Output Directory**: （自動検出）
6. **Install Command**: （自動検出）

### ステップ5: 環境変数の設定（後で設定可能）

この段階では環境変数は設定しなくてもOKです。後で設定できます。

### ステップ6: デプロイ

1. **Deploy** ボタンをクリック
2. デプロイが完了するまで待つ（数分）

---

## ✅ デプロイ完了後

### 1. デプロイの確認

1. **Deployments** タブを開く
2. 最新のデプロイメントの状態を確認
   - ✅ **Ready**: デプロイ成功
   - ⏳ **Building**: ビルド中
   - ❌ **Error**: エラー（ログを確認）

### 2. サイトにアクセス

1. **Visit** ボタンをクリック
2. または、`https://pickuplab-[ランダム文字列].vercel.app` にアクセス
3. サイトが正常に表示されるか確認

---

## 📋 次のステップ

デプロイが成功したら、以下の手順に進みます：

1. **Vercelでドメインを追加** - `pickuplab.jp`
2. **お名前.comでネームサーバーを設定**
3. **環境変数を設定**
4. **デプロイを再実行**

詳細は `ドメイン実装手順_pickuplab.jp.md` を参照してください。

---

**更新日**: 2025年12月31日
