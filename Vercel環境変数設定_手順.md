# Vercel環境変数設定手順（pickuplab.jp）

## ✅ 完了した作業

- [x] Vercelでドメインを追加
- [x] お名前.comでネームサーバーを設定

---

## 🚀 次のステップ: Vercel環境変数を設定

### ステップ1: 環境変数設定画面を開く

1. **Vercelダッシュボード** → **pickuplab** プロジェクトを選択
2. **Settings** → **Environment Variables** に移動
3. **Add New** ボタンをクリック

---

### ステップ2: NEXT_PUBLIC_API_URL を設定

1. **Key**: `NEXT_PUBLIC_API_URL`
2. **Value**: `https://api.pickuplab.jp`（バックエンドのURL）
   - または、`https://pickuplab.jp/api`（サブディレクトリでAPIを提供する場合）
   - バックエンドのURLが未確定の場合は、後で更新可能
3. **Environment**: **Production** を選択（✅チェック）
   - Preview、Development は必要に応じて設定
4. **Save** ボタンをクリック

---

### ステップ3: NEXT_PUBLIC_BASE_URL を設定

1. **Add New** ボタンをクリック
2. **Key**: `NEXT_PUBLIC_BASE_URL`
3. **Value**: `https://pickuplab.jp`
4. **Environment**: **Production** を選択（✅チェック）
5. **Save** ボタンをクリック

---

### ステップ4: NEXTAUTH_URL を設定

1. **Add New** ボタンをクリック
2. **Key**: `NEXTAUTH_URL`
3. **Value**: `https://pickuplab.jp`
4. **Environment**: **Production** を選択（✅チェック）
5. **Save** ボタンをクリック

---

### ステップ5: 環境変数の確認

以下の環境変数が設定されているか確認：

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://api.pickuplab.jp` | Production ✅ |
| `NEXT_PUBLIC_BASE_URL` | `https://pickuplab.jp` | Production ✅ |
| `NEXTAUTH_URL` | `https://pickuplab.jp` | Production ✅ |

---

## 🚀 ステップ6: デプロイを再実行

環境変数を追加した後、デプロイを再実行して変更を反映します。

### 方法A: Vercelダッシュボードから再デプロイ（推奨）

1. **Deployments** タブを開く
2. 最新のデプロイメントの **...** メニューをクリック
3. **Redeploy** を選択
4. デプロイが完了するまで待つ（数分）

### 方法B: GitHubから自動デプロイ

```bash
cd /Users/kawamuratakeshi/Cursor/pickup-lab
git add .
git commit -m "環境変数を追加"
git push
```

---

## ✅ 設定完了チェックリスト

### ドメイン設定
- [x] Vercelでドメインを追加
- [x] お名前.comでネームサーバーを設定
- [ ] 環境変数を設定（3つ）
- [ ] デプロイを再実行

### 動作確認（24-48時間後）
- [ ] `https://pickuplab.jp` でアクセスできる
- [ ] SSL証明書が有効（🔒マークが表示される）
- [ ] サイトが正常に表示される

---

## 🔗 参考リンク

- **Vercelダッシュボード**: https://vercel.com/dashboard
- **Vercel環境変数設定**: https://vercel.com/docs/concepts/projects/environment-variables

---

**更新日**: 2025年12月31日
