export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 固定ヘッダー（スクロールしてもCTAが見える） */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4 max-w-6xl flex justify-between items-center">
          <div className="text-xl font-bold">Pick up lab</div>
          <a
            href="#contact"
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            今すぐ始める
          </a>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black pt-20">
        <div className="container mx-auto px-6 py-20 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Pick up lab
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              AIと人間のハイブリッドナンパコーチング
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              24時間365日、AIコーチングがあなたの上達をサポート
            </p>
          </div>

          {/* 実績バッジ */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
              <span className="text-green-400">✓</span>
              <span className="text-sm">累計500名以上が成功を実現</span>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="text-center mb-16">
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl"
            >
              今すぐ始める
            </a>
            <p className="text-sm text-gray-400 mt-4">
              7日間の返金保証付き | 30日間の成果保証付き
            </p>
          </div>

          {/* 価格表示 */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 rounded-full">
              <p className="text-sm text-gray-300 line-through mb-1">通常価格 ¥1,200,000</p>
              <p className="text-3xl font-bold">期間限定特別価格 ¥398,000</p>
              <p className="text-sm text-gray-200 mt-2">先着50名様限定 | 残り23名様</p>
            </div>
          </div>
        </div>
      </section>

      {/* 現状維持の恐怖セクション（SendRightスタイル） */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            現状維持に身を任せるのか、それとも
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 border border-red-800/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-red-400">このまま何もしなければ</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>返信に悩む時間が増え続ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>理想の女性との距離が広がり続ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>マッチングアプリでの失敗が積み重なる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>自信が失われていく</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-900/20 border border-green-800/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-green-400">今この瞬間に行動を起こせば</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>返信の悩みから解放される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>理想の女性との距離が縮まる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>マッチングアプリでの成功体験が積み重なる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>自信が取り戻せる</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              今すぐ始める
            </a>
          </div>
        </div>
      </section>

      {/* 実績・統計データセクション */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            圧倒的な実績データ
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-4xl font-bold text-white mb-2">500名+</div>
              <div className="text-gray-400">累計利用者数</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-4xl font-bold text-white mb-2">87%</div>
              <div className="text-gray-400">成功率</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-4xl font-bold text-white mb-2">2.5ヶ月</div>
              <div className="text-gray-400">平均成果期間</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-4xl font-bold text-white mb-2">4.8/5.0</div>
              <div className="text-gray-400">顧客満足度</div>
            </div>
          </div>
        </div>
      </section>

      {/* 創設者の権威性セクション */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            なぜPick up labなのか？
          </h2>
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8">
            <h3 className="text-2xl font-bold mb-4">創設者の実績</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pick up labの創設者は、現役のトップナンパ師、ナンパ講師です。
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-gray-400 text-sm">渋谷で美女ナンパ成功率</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-3xl font-bold text-white mb-1">200名+</div>
                <div className="text-gray-400 text-sm">講習受講者数</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-3xl font-bold text-white mb-1">70%+</div>
                <div className="text-gray-400 text-sm">3ヶ月以内に彼女ができた割合</div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 leading-relaxed">
              そんな彼が限られたクライアントにのみ提供してきた「秘密のメッセージ術」を、いつどんな時も使えるように作られたのがPick up labです。
            </p>
          </div>
        </div>
      </section>

      {/* USPセクション */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pick up labで得られるもの
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* USP 1: AIと人間のハイブリッド */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AIと人間のハイブリッドコーチング</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                24時間365日、AIコーチングがあなたの上達をサポート。人間講師とのハイブリッド機能で、AIが講師の教え方をサポートし品質を保証します。
              </p>
              <p className="text-green-400 font-semibold">
                → 返信時間を数分から10秒に短縮
              </p>
            </div>

            {/* USP 2: データドリブンな上達 */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">AI数値分析と改善アクション</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                講習→実践→AI数値分析→AI改善アクションの体系化。データに基づいた改善提案で、確実にスキルを向上させます。
              </p>
              <p className="text-green-400 font-semibold">
                → 成功率が平均3倍に向上
              </p>
            </div>

            {/* USP 3: 体系的な学習サイクル */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-4">体系的な学習サイクル</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                実践記録の入力・管理から、成功事例・失敗事例の体系化まで。継続的な改善サイクルで、着実に上達できます。
              </p>
              <p className="text-green-400 font-semibold">
                → 従来の学習時間の半分で上達
              </p>
            </div>

            {/* USP 4: コミュニティ機能 */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">コミュニティ機能</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                同じ目標を持つ仲間と情報共有。コミュニティ機能で、モチベーションを維持しながら上達できます。
              </p>
              <p className="text-green-400 font-semibold">
                → 85%が3ヶ月以内に初めての成功を達成
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              今すぐ始める
            </a>
          </div>
        </div>
      </section>

      {/* ソーシャルプルーフ（顧客の声）セクション */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            受講生の声
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <div className="font-bold">Aさん</div>
                  <div className="text-sm text-gray-400">28歳・会社員</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                「3ヶ月で10人と出会えました。AIコーチングのおかげで、確実にスキルが向上しました。返信に悩む時間がなくなり、マッチングアプリでの成功体験が増えました。」
              </p>
              <div className="text-yellow-400">★★★★★</div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <div className="font-bold">Bさん</div>
                  <div className="text-sm text-gray-400">30歳・会社員</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                「判断の軸が分かるようになりました。以前は、返信に30分以上かかっていましたが、SendRightを使うようになってから、10秒で返信できるようになりました。」
              </p>
              <div className="text-yellow-400">★★★★★</div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <div className="font-bold">Cさん</div>
                  <div className="text-sm text-gray-400">32歳・自営業</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                「自信が取り戻せました。マッチングアプリでの成功体験が積み重なり、理想の女性との関係を築けるようになりました。30日間の成果保証も安心でした。」
              </p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* 特典セクション */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            今だけの特別特典
          </h2>
          <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 border border-yellow-700/50 p-8 rounded-xl">
            <p className="text-center text-2xl font-bold mb-8">
              総額26万円相当の特典を無料でプレゼント
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-xl font-bold mb-2">無料PDF「ナンパ成功の7つのルール」</h3>
                <p className="text-gray-400 text-sm">通常¥3,000相当</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="text-3xl mb-3">🎥</div>
                <h3 className="text-xl font-bold mb-2">無料動画「AIコーチング活用法」</h3>
                <p className="text-gray-400 text-sm">通常¥5,000相当</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="text-xl font-bold mb-2">コミュニティへの優先参加権</h3>
                <p className="text-gray-400 text-sm">通常¥18,000相当</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6 text-sm">
              ※ 特典は購入後すぐにダウンロード可能です
            </p>
          </div>
        </div>
      </section>

      {/* 保証セクション */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            安心の保証制度
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-xl border border-green-700">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4">30日間の成果保証</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                30日間、実践を続けても成果が出ない場合、全額返金いたします。
              </p>
              <p className="text-sm text-gray-300 mb-4">
                <strong>条件:</strong> 週3回以上の実践、AIコーチングの利用、フィードバックの受講
              </p>
              <p className="text-sm text-green-300 font-semibold">
                過去3年間で、返金率はわずか2%。98%の受講生が成果を実感しています。
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl border border-blue-700">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-4">7日間の返金保証</h3>
              <p className="text-gray-200 leading-relaxed">
                7日間以内であれば、理由を問わず全額返金いたします。
                <br />
                <span className="text-sm text-gray-300">
                  安心してご利用いただけます。
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            よくある質問
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: 39.8万円は高すぎませんか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: 一般的なナンパスクールの月額制（月額2-5万円×12ヶ月=24-60万円）と比較すると、買い切り制の39.8万円は非常にコスパが良いです。さらに、26万円相当の特典が無料で付いてきます。
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: 本当に効果があるのですか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: 30日間の成果保証を設けています。30日間、実践を続けても成果が出ない場合、全額返金いたします。リスクはゼロです。また、過去3年間で、返金率はわずか2%です。98%の受講生が成果を実感しています。
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: AIコーチングだけで本当に上達できるのですか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: AIコーチングと人間講師のハイブリッドで、24時間365日サポートします。AIコーチングで基礎を学び、人間講師が深いサポートを提供します。受講生の85%が3ヶ月以内に初めての成功を達成しています。
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: 初心者でも大丈夫ですか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: はい、大丈夫です。Pick up labは、初心者から上級者まで、すべてのレベルの方に対応しています。体系的な学習サイクルで、着実に上達できます。
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: 分割払いは可能ですか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: はい、可能です。3回払い、6回払い、12回払いが可能です。お申し込み時にご選択いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 機能詳細セクション */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            主な機能
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3">24時間365日対応</h3>
              <p className="text-gray-300 text-sm">
                AIコーチングがいつでもあなたの上達をサポートします。
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3">実践記録の管理</h3>
              <p className="text-gray-300 text-sm">
                実践記録を入力・管理し、データに基づいた改善提案を受けられます。
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3">人間講師との連携</h3>
              <p className="text-gray-300 text-sm">
                人間講師とのハイブリッド機能（予約制）で、より深いサポートを受けられます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ・申し込みセクション */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            今すぐ始める
          </h2>
          <p className="text-center text-gray-400 mb-12">
            期間限定特別価格 ¥398,000（通常価格 ¥1,200,000）
            <br />
            先着50名様限定 | 残り23名様
          </p>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
            <div className="text-center mb-6">
              <p className="text-2xl font-bold mb-4">総額26万円相当の特典を無料でプレゼント</p>
              <ul className="text-left space-y-2 text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>無料PDF「ナンパ成功の7つのルール」（通常¥3,000相当）</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>無料動画「AIコーチング活用法」（通常¥5,000相当）</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>コミュニティへの優先参加権（通常¥18,000相当）</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="mailto:info@sendright.jp?subject=Pick%20up%20lab%20お申し込み"
                className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl mb-4"
              >
                今すぐお申し込み
              </a>
              <p className="text-sm text-gray-400">
                7日間の返金保証付き | 30日間の成果保証付き
              </p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <p className="text-center text-lg mb-4">
              <strong>お問い合わせ</strong>
            </p>
            <p className="text-center text-2xl text-white mb-6">
              <a href="mailto:info@sendright.jp" className="hover:text-gray-300 transition-colors">
                info@sendright.jp
              </a>
            </p>
            <p className="text-center text-gray-400 text-sm">
              返信期間: 通常2営業日以内
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center text-gray-400">
            <p className="mb-2">Pick up lab運営事務局（個人事業主・川村健志）</p>
            <p className="text-sm">
              〒160-0022 東京都新宿区新宿1-36-2 新宿第七葉山ビル（METSオフィス新宿御苑）
            </p>
            <p className="text-sm mt-4">
              © 2025 Pick up lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
