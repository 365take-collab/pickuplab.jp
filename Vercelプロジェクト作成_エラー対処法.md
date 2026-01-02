# Vercelプロジェクト作成 - エラー対処法

## ⚠️ エラー: プロジェクト名が既に存在する

### エラーメッセージ
```
Project "pickuplab-jp" already exists, please use a new name.
```

### 対処方法

**プロジェクト名を変更してください**

#### 推奨プロジェクト名

1. **pickuplab** （推奨）
   - シンプルで覚えやすい
   - リポジトリ名と一致

2. **pickup-lab**
   - ハイフン付きで読みやすい

3. **pickuplab-app**
   - アプリであることを明示

### 手順

1. **Project Name** フィールドをクリック
2. プロジェクト名を「**pickuplab**」に変更
3. **Deploy** ボタンをクリック

---

## ✅ 正しい設定

### プロジェクト設定

- **Vercel Team**: TL's projects
- **Project Name**: `pickuplab` （変更後）
- **Framework Preset**: Next.js ✅
- **Root Directory**: `./` ✅

### リポジトリ設定

- **Repository**: `365take-collab/pickuplab.jp`
- **Branch**: `main`

---

## 📋 デプロイ後の確認

デプロイが成功したら：

1. **Deployments** タブでデプロイ状態を確認
2. **Visit** ボタンからサイトにアクセス
3. サイトが正常に表示されるか確認

---

**更新日**: 2025年12月31日
