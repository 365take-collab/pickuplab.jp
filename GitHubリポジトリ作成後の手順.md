# GitHubリポジトリ作成後の手順（pickuplab.jp）

## ✅ GitHubリポジトリ作成完了後

### ステップ1: GitHubにプッシュ

GitHubリポジトリを作成したら、以下のコマンドでプッシュします：

```bash
cd /Users/kawamuratakeshi/Cursor/pickup-lab
git remote add origin https://github.com/365take-collab/pickuplab.git
git branch -M main
git push -u origin main
```

**注意**: リポジトリ名は `pickuplab` です。

### ステップ2: Vercelでプロジェクトを作成

1. **Vercelにアクセス**: https://vercel.com/
2. **New Project** をクリック
3. **GitHubリポジトリを選択**: `pickuplab`
4. **Framework Preset**: Next.js を選択
5. **Root Directory**: `./` を選択
6. **Deploy** をクリック

### ステップ3: Vercelでドメインを追加

1. **Settings** タブをクリック
2. **Domains** セクションを開く
3. **Add Domain** ボタンをクリック
4. **ドメイン名を入力**: `pickuplab.jp`
5. **Add** ボタンをクリック

### ステップ4: お名前.comでネームサーバーを設定

1. **お名前.comにログイン**: https://www.onamae.com/
2. **ドメイン一覧** → **pickuplab.jp** を選択
3. **ネームサーバー設定** → **カスタムネームサーバー**
4. 以下のネームサーバーを入力：
   - **ネームサーバー1**: `ns1.vercel-dns.com`
   - **ネームサーバー2**: `ns2.vercel-dns.com`
5. **保存** ボタンをクリック

### ステップ5: Vercel環境変数を設定

1. **Settings** → **Environment Variables** に移動
2. 以下の環境変数を追加（**Production**環境にチェック）：

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://api.pickuplab.jp` | Production ✅ |
| `NEXT_PUBLIC_BASE_URL` | `https://pickuplab.jp` | Production ✅ |
| `NEXTAUTH_URL` | `https://pickuplab.jp` | Production ✅ |

### ステップ6: デプロイを再実行

1. **Deployments** タブを開く
2. 最新のデプロイメントの **...** メニューをクリック
3. **Redeploy** を選択

---

## 📊 設定完了チェックリスト

### GitHub・Vercel
- [ ] GitHubリポジトリを作成
- [ ] GitHubにプッシュ
- [ ] Vercelでプロジェクトを作成・デプロイ

### ドメイン設定
- [ ] Vercelでドメインを追加
- [ ] お名前.comでネームサーバーを設定
- [ ] 環境変数を設定（3つ）
- [ ] デプロイを再実行

### 動作確認（24-48時間後）
- [ ] `https://pickuplab.jp` でアクセスできる
- [ ] SSL証明書が有効（🔒マークが表示される）
- [ ] サイトが正常に表示される

---

**更新日**: 2025年12月31日
