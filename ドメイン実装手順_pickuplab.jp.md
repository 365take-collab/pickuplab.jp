# ドメイン実装手順（pickuplab.jp）

## ✅ 前提条件

- **ドメイン**: `pickuplab.jp` を取得済み ✅
- **ドメイン取得サービス**: お名前.com
- **ホスティング**: Vercel（Next.js）

---

## 📋 設定手順の全体フロー

```
1. コード側の設定完了 ✅
   ↓
2. Vercelでプロジェクトを作成・デプロイ
   ↓
3. Vercelでドメインを追加
   ↓
4. お名前.comでネームサーバーを設定
   ↓
5. Vercel環境変数を設定
   ↓
6. デプロイを再実行
   ↓
7. 反映確認（24-48時間）
```

---

## ✅ ステップ1: コード側の設定（完了）

### 1-1. next.config.tsの更新

`next.config.ts`にドメイン設定を追加しました：

```typescript
images: {
  domains: ['pickuplab.jp'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'pickuplab.jp',
    },
  ],
},
```

### 1-2. 環境変数のテンプレート

`.env.example`ファイルにドメイン関連の環境変数を追加しました。

**本番環境用（Vercel環境変数）**:
```env
NEXT_PUBLIC_API_URL="https://api.pickuplab.jp"
NEXT_PUBLIC_BASE_URL="https://pickuplab.jp"
NEXTAUTH_URL="https://pickuplab.jp"
```

---

## 🚀 ステップ2: Vercelでプロジェクトを作成・デプロイ

### 2-1. GitHubリポジトリを作成

1. **GitHubにアクセス**: https://github.com/new
2. **リポジトリ名**: `pickup-lab` または `pickuplab`
3. **リポジトリを作成**

### 2-2. ローカルでGitを初期化

```bash
cd /Users/kawamuratakeshi/Cursor/pickup-lab
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[ユーザー名]/pickup-lab.git
git push -u origin main
```

### 2-3. Vercelでプロジェクトを作成

1. **Vercelにアクセス**: https://vercel.com/
2. **New Project** をクリック
3. **GitHubリポジトリを選択**: `pickup-lab`
4. **Framework Preset**: Next.js を選択
5. **Root Directory**: `./` を選択
6. **Deploy** をクリック

---

## 🌐 ステップ3: Vercelでドメインを追加

### 3-1. Vercelにログイン

1. **Vercelにアクセス**: https://vercel.com/
2. **ログイン**: GitHubアカウントでログイン
3. **ダッシュボード**: https://vercel.com/dashboard

### 3-2. プロジェクトを選択

1. **プロジェクト一覧**から `pickup-lab` プロジェクトを選択

### 3-3. ドメインを追加

1. **Settings** タブをクリック
2. **Domains** セクションを開く
3. **Add Domain** ボタンをクリック
4. **ドメイン名を入力**: `pickuplab.jp`
5. **Add** ボタンをクリック

### 3-4. ネームサーバー情報を確認

Vercelが以下のようなネームサーバー情報を表示します：

```
ネームサーバー:
- ns1.vercel-dns.com
- ns2.vercel-dns.com
```

**この情報をコピーしておきます**（次のステップで使用）

---

## 🔧 ステップ4: お名前.comでネームサーバーを設定

### 4-1. お名前.comにログイン

1. **お名前.comにアクセス**: https://www.onamae.com/
2. **ログイン**: お名前.comのアカウントでログイン
3. **ドメイン一覧**: https://www.onamae.com/domain/

### 4-2. ドメインを選択

1. **ドメイン一覧** を開く
2. **pickuplab.jp** を選択
3. **ドメイン設定** または **ネームサーバー設定** をクリック

### 4-3. ネームサーバー設定画面を開く

1. **ネームサーバー設定** または **DNS設定** を選択
2. **カスタムネームサーバー** または **外部ネームサーバー** を選択

### 4-4. Vercelのネームサーバーを入力

お名前.comの管理画面で、以下のネームサーバーを入力：

**ネームサーバー1**: `ns1.vercel-dns.com`
**ネームサーバー2**: `ns2.vercel-dns.com`

**注意**: 
- 末尾にピリオド（.）は不要です
- 大文字・小文字は区別されませんが、正確に入力してください

### 4-5. 設定を保存

1. **確認** ボタンをクリック
2. **保存** または **適用** ボタンをクリック
3. 設定完了のメッセージを確認

---

## 🔐 ステップ5: Vercel環境変数を設定

### 5-1. 環境変数設定画面を開く

1. **Vercelダッシュボード** → **Settings** → **Environment Variables** に移動
2. **Add New** ボタンをクリック

### 5-2. 環境変数を追加

以下の環境変数を追加（**Production**環境にチェック）：

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://api.pickuplab.jp` | Production ✅ |
| `NEXT_PUBLIC_BASE_URL` | `https://pickuplab.jp` | Production ✅ |
| `NEXTAUTH_URL` | `https://pickuplab.jp` | Production ✅ |

### 5-3. 環境変数の確認

以下の環境変数が設定されているか確認：

- ✅ `NEXT_PUBLIC_API_URL` = `https://api.pickuplab.jp` (Production)
- ✅ `NEXT_PUBLIC_BASE_URL` = `https://pickuplab.jp` (Production)
- ✅ `NEXTAUTH_URL` = `https://pickuplab.jp` (Production)

---

## 🚀 ステップ6: デプロイを再実行

環境変数を追加した後、デプロイを再実行して変更を反映します。

### 6-1. Vercelダッシュボードから再デプロイ

1. **Deployments** タブを開く
2. 最新のデプロイメントの **...** メニューをクリック
3. **Redeploy** を選択
4. デプロイが完了するまで待つ（数分）

---

## ✅ ステップ7: ドメインの反映確認

### 7-1. Vercelダッシュボードで確認

1. **Settings** → **Domains** → **pickuplab.jp**
2. **ドメインの状態** を確認
   - ✅ **Valid Configuration**: 正常に設定完了
   - ⏳ **Pending**: 設定中（反映待ち）
   - ❌ **Invalid Configuration**: エラー（設定を確認）

### 7-2. コマンドラインで確認

```bash
cd /Users/kawamuratakeshi/Cursor/pickup-lab
./check_domain.sh
```

### 7-3. ブラウザで確認

1. **ブラウザでアクセス**: `https://pickuplab.jp`
2. **SSL証明書の確認**: ブラウザのアドレスバーで🔒マークを確認
3. **サイトが表示されるか確認**

---

## 📊 設定完了後の確認チェックリスト

### コード側の設定
- [x] `next.config.ts` にドメイン設定を追加
- [x] `.env.example` を更新

### ドメイン設定
- [ ] GitHubリポジトリを作成
- [ ] Vercelでプロジェクトを作成・デプロイ
- [ ] Vercelでドメインを追加
- [ ] お名前.comでネームサーバーを設定
- [ ] DNSレコードの確認（Vercelが自動設定）
- [ ] SSL証明書の発行確認（Vercelが自動発行）

### 環境変数設定
- [ ] `NEXT_PUBLIC_API_URL` を設定（Production）
- [ ] `NEXT_PUBLIC_BASE_URL` を設定（Production）
- [ ] `NEXTAUTH_URL` を設定（Production）

### デプロイ
- [ ] デプロイを再実行
- [ ] デプロイが成功したことを確認

### 動作確認（24-48時間後）
- [ ] `https://pickuplab.jp` でアクセスできる
- [ ] SSL証明書が有効（🔒マークが表示される）
- [ ] サイトが正常に表示される

---

## 🔗 参考リンク

### お名前.com
- **お名前.com**: https://www.onamae.com/
- **お名前.comサポート**: https://www.onamae.com/support/
- **ドメイン一覧**: https://www.onamae.com/domain/

### Vercel
- **Vercelダッシュボード**: https://vercel.com/dashboard
- **Vercelドメイン設定ガイド**: https://vercel.com/docs/concepts/projects/domains
- **Vercel環境変数設定**: https://vercel.com/docs/concepts/projects/environment-variables

---

**作成日**: 2025年12月31日
**ドメイン**: pickuplab.jp
**ドメイン取得サービス**: お名前.com
**ホスティング**: Vercel
