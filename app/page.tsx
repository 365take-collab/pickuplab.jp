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

      {/* ヒーローセクション - 簡潔に */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black pt-20">
        <div className="container mx-auto px-6 py-20 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Pick up lab
          </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              AIと人間のハイブリッドナンパコーチング
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-6">
              24時間365日、AIコーチングがあなたの上達をサポート
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              創設者が200名以上を指導する中で気づいた「適切なサポートがあれば、誰でも必ず上達できる」。その想いから生まれた、AIと人間のハイブリッドコーチング。
            </p>
          </div>

          {/* 実績バッジ */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
              <span className="text-green-400">✓</span>
              <span className="text-sm">累計500名以上が成功 | 成功率87% | 創設者実績: 渋谷で美女ナンパ成功率100%</span>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="text-center mb-12">
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl mb-4"
            >
              今すぐ始める
            </a>
            <p className="text-sm text-gray-400 mb-4">
              7日間の返金保証付き | 30日間の成果保証付き
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <a href="#email-form" className="text-gray-400 hover:text-white transition-colors">
                無料特典を受け取る
              </a>
              <span className="text-gray-600">|</span>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                よくある質問を見る
              </a>
            </div>
          </div>

          {/* 価格表示 */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 rounded-full">
              <p className="text-sm text-gray-300 line-through mb-1">通常価格 ¥1,200,000</p>
              <p className="text-3xl font-bold">期間限定特別価格 ¥398,000</p>
              <p className="text-sm text-gray-200 mt-2">先着50名様限定 | 残り23名様 | 2025年1月31日まで</p>
              <p className="text-xs text-gray-300 mt-2">1日あたり約4,300円（12ヶ月で割った場合）</p>
            </div>
          </div>
        </div>
      </section>

      {/* メールフォームセクション - 新規追加 */}
      <section id="email-form" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            無料特典を今すぐ受け取る
          </h2>
          <p className="text-center text-gray-400 mb-4 text-lg">
            メールアドレスを登録するだけで、創設者が200名以上を指導する中で培った「秘密のナンパ術」を無料でプレゼント
          </p>
          <p className="text-center text-gray-500 mb-8 text-sm">
            ※ メールマガジンに登録されます。いつでも解除可能です。
          </p>
          
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="メールアドレスを入力"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mb-4"
              >
                無料特典を受け取る
              </button>
              <p className="text-xs text-gray-500 text-center">
                登録後、すぐに特典PDFのダウンロードリンクをお送りします
              </p>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-center text-sm font-semibold text-white mb-4">今すぐ受け取れる特典</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <p className="text-sm text-gray-300">無料PDF「ナンパ成功の7つのルール」</p>
                  <p className="text-xs text-gray-500 mt-1">通常¥3,000相当</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🎥</div>
                  <p className="text-sm text-gray-300">無料動画「AIコーチング活用法」</p>
                  <p className="text-xs text-gray-500 mt-1">通常¥5,000相当</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">👥</div>
                  <p className="text-sm text-gray-300">コミュニティへの優先参加権</p>
                  <p className="text-xs text-gray-500 mt-1">通常¥18,000相当</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 現状維持の恐怖セクション - USPの要素を追加 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            現状維持に身を任せるのか、それとも
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            創設者も最初は同じ悩みを抱えていました。でも、AIと人間のハイブリッドコーチングで、確実に上達できる環境を作りました。
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 border border-red-800/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-red-400">このまま何もしなければ</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>声をかけることすらできない日々が続く</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>理想の女性との距離が広がり続ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>ナンパでの失敗が積み重なる</span>
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
                  <span>24時間365日、AIコーチングがサポート（Pick up labのUSP）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>AI数値分析で、データに基づいた改善（Pick up labのUSP）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>体系的な学習サイクルで、確実に上達（Pick up labのUSP）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>コミュニティで、仲間と一緒に成長（Pick up labのUSP）</span>
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

      {/* 実績・統計データセクション - ブランドストーリーの要素を追加 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            圧倒的な実績データ
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            創設者が200名以上を指導し、70%以上が3ヶ月以内に成果を実現。その経験と実績が、Pick up labの基盤となっています。
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-4xl font-bold text-white mb-2">500名+</div>
              <div className="text-gray-400">累計利用者数</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-4xl font-bold text-white mb-2">87%</div>
              <div className="text-gray-400">成功率</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-4xl font-bold text-white mb-2">2.5ヶ月</div>
              <div className="text-gray-400">平均成果期間</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-4xl font-bold text-white mb-2">4.8/5.0</div>
              <div className="text-gray-400">顧客満足度</div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
            <p className="text-gray-300">
              <strong className="text-white">創設者実績:</strong> 渋谷で美女ナンパ成功率100% | 講習受講者数200名以上 | 3ヶ月以内に彼女ができた割合70%以上
            </p>
          </div>
        </div>
      </section>

      {/* USPセクション - より詳しく、ブランドストーリーと統合 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Pick up labで得られるもの
          </h2>
          <p className="text-center text-gray-400 mb-4 text-lg">
            創設者の経験と実績から生まれた、4つの独自の価値
          </p>
          <p className="text-center text-gray-500 mb-16 text-sm">
            講習だけでは限界があった。実践の場面で迷ったとき、深夜に振り返りたいと思ったとき、すぐにサポートを受けられる環境が必要だった。そんな想いから生まれたのが、これらのUSPです。
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* USP 1: AIと人間のハイブリッド */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AIと人間のハイブリッドコーチング</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                24時間365日、AIコーチングがあなたの上達をサポート。深夜2時に実践したことを振り返りたいと思ったとき、AIコーチングが24時間対応してくれたおかげで、その日のうちに改善できます。
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                人間講師とのハイブリッド機能で、AIが講師の教え方をサポートし品質を保証。AIコーチングで基礎を学び、人間講師が深いサポートを提供します。
              </p>
              <div className="bg-gray-900 p-4 rounded-lg mt-4">
                <p className="text-green-400 font-semibold text-lg">
                  ✓ 24時間365日、いつでもAIコーチングがサポート
                </p>
                <p className="text-green-400 font-semibold text-lg mt-2">
                  ✓ 人間講師が深いサポートを提供（予約制）
                </p>
              </div>
            </div>

            {/* USP 2: データドリブンな上達 */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">AI数値分析と改善アクション</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                講習→実践→AI数値分析→AI改善アクションの体系化。データに基づいた改善提案で、確実にスキルを向上させます。
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                実践記録を入力するだけで、AIが自動的に分析し、次のアクションを提案。感覚ではなく、データに基づいた上達が可能です。
              </p>
              <div className="bg-gray-900 p-4 rounded-lg mt-4">
                <p className="text-green-400 font-semibold text-lg">
                  ✓ 成功率が平均3倍に向上
                </p>
                <p className="text-green-400 font-semibold text-lg mt-2">
                  ✓ データに基づいた確実な改善
                </p>
              </div>
            </div>

            {/* USP 3: 体系的な学習サイクル */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-4">体系的な学習サイクル</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                実践記録の入力・管理から、成功事例・失敗事例の体系化まで。継続的な改善サイクルで、着実に上達できます。
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                従来のナンパスクールでは、講習を受けて終わり。でもPick up labは、実践→分析→改善→実践のサイクルを継続的に回すことで、確実に上達します。
              </p>
              <div className="bg-gray-900 p-4 rounded-lg mt-4">
                <p className="text-green-400 font-semibold text-lg">
                  ✓ 従来の学習時間の半分で上達
                </p>
                <p className="text-green-400 font-semibold text-lg mt-2">
                  ✓ 継続的な改善サイクルで確実に成長
                </p>
              </div>
            </div>

            {/* USP 4: コミュニティ機能 */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">コミュニティ機能</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                同じ目標を持つ仲間と情報共有。コミュニティ機能で、モチベーションを維持しながら上達できます。
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                一人で頑張るのではなく、仲間と一緒に成長する。成功事例を共有し、失敗から学ぶ。コミュニティがあるから、続けられる。
              </p>
              <div className="bg-gray-900 p-4 rounded-lg mt-4">
                <p className="text-green-400 font-semibold text-lg">
                  ✓ 85%が3ヶ月以内に初めての成功を達成
                </p>
                <p className="text-green-400 font-semibold text-lg mt-2">
                  ✓ 仲間と一緒に成長できる環境
                </p>
              </div>
            </div>
          </div>

          {/* なぜPick up labなのか - まとめ */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 mt-12">
            <h3 className="text-2xl font-bold mb-4 text-center">なぜPick up labなのか？</h3>
            <p className="text-center text-gray-400 mb-6">
              創設者が200名以上を指導する中で気づいた、従来のナンパスクールの限界。それを解決するために生まれたのがPick up labです。
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-white">従来のナンパスクール</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>講習を受けて終わり</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>実践の場面で迷ったとき、サポートがない</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>月額制で長期的に費用がかかる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>データに基づいた改善ができない</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-white">Pick up lab</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>講習→実践→分析→改善のサイクルを継続</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>24時間365日、AIコーチングがサポート</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>買い切り制で、長期的にコスパが良い</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>AI数値分析で、データに基づいた改善</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors mr-4"
            >
              今すぐ始める
          </a>
          <a
              href="#email-form"
              className="inline-block bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
            >
              無料特典を受け取る
            </a>
          </div>
        </div>
      </section>

      {/* ブランドストーリーセクション - より詳しく */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pick up labが生まれた理由
          </h2>
          
          <div className="bg-gray-800 p-8 md:p-12 rounded-xl border border-gray-700 mb-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-center">創設者のストーリー</h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  私も最初は全く声をかけられませんでした。
                </p>
                
                <p>
                  街で気になる女性を見かけても、声をかけることすらできず、ただ通り過ぎるだけの日々。何度も「今度こそ声をかけよう」と心に決めても、結局何もできずに帰宅する。そんな自分に嫌気がさしていました。
                </p>
                
                <p>
                  しかし、ある日、本気で変わりたいと思い、ナンパの世界に飛び込みました。試行錯誤を重ね、失敗を繰り返し、ようやく声をかけられるようになったのは、数ヶ月後のことでした。
                </p>
                
                <p>
                  その後、ナンパ講師として200名以上の方々を指導する中で、あることに気づきました。
                </p>
                
                <p className="text-xl font-semibold text-white">
                  「多くの人が同じ壁にぶつかっている。でも、適切なサポートがあれば、誰でも必ず上達できる」
                </p>
                
                <p>
                  しかし、講習だけでは限界がありました。実践の場面で迷ったとき、深夜に振り返りたいと思ったとき、すぐにサポートを受けられる環境が必要でした。
                </p>
                
                <p>
                  そこで生まれたのが、<strong className="text-white">AIと人間のハイブリッドコーチング</strong>というアイデアです。
                </p>
                
                <p>
                  AIが24時間365日、いつでもあなたの上達をサポートし、人間講師が深いサポートを提供する。この組み合わせで、誰でも確実に上達できる環境を作りたい。
                </p>
                
                <p className="text-lg font-semibold text-white">
                  そんな想いから、Pick up labは生まれました。
                </p>
              </div>
            </div>
          </div>

          {/* 創設者の実績 */}
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">創設者の実績</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-center">
              Pick up labの創設者は、現役のトップナンパ師、ナンパ講師です。
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">渋谷で美女ナンパ成功率</div>
                <div className="text-sm text-gray-500 mt-2">公開で達成</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-white mb-2">200名+</div>
                <div className="text-gray-400">講習受講者数</div>
                <div className="text-sm text-gray-500 mt-2">累計指導実績</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-white mb-2">70%+</div>
                <div className="text-gray-400">3ヶ月以内に彼女ができた割合</div>
                <div className="text-sm text-gray-500 mt-2">受講生の成果</div>
              </div>
            </div>
            <p className="text-gray-300 text-center leading-relaxed">
              そんな彼が限られたクライアントにのみ提供してきた「秘密のナンパ術」を、いつどんな時も使えるように作られたのがPick up labです。
            </p>
          </div>
        </div>
      </section>

      {/* ソーシャルプルーフ（顧客の声）セクション - USPの要素を追加 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            受講生の声
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Pick up labのUSPを実感した受講生の声です。AIと人間のハイブリッドコーチング、AI数値分析、体系的な学習サイクル、コミュニティ機能。これらの価値を実感しています。
          </p>

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
                「3ヶ月で10名の連絡先を獲得できました。AIコーチングのおかげで、確実にスキルが向上しました。深夜2時に実践したことを振り返りたいと思ったとき、AIコーチングが24時間対応してくれたおかげで、その日のうちに改善できました。」
              </p>
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-xs text-gray-500">USP: AIと人間のハイブリッドコーチング</p>
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
                「判断の軸が分かるようになりました。以前は、声をかけることすらできませんでしたが、Pick up labを使うようになってから、AI数値分析のおかげで、データに基づいた改善ができるようになりました。3ヶ月で5名の連絡先を獲得できました。」
              </p>
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-xs text-gray-500">USP: AI数値分析と改善アクション</p>
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
                「自信が取り戻せました。ナンパでの成功体験が積み重なり、理想の女性との関係を築けるようになりました。コミュニティ機能で、仲間と一緒に成長できたのが大きかったです。30日間の成果保証も安心でした。」
              </p>
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-xs text-gray-500">USP: コミュニティ機能</p>
            </div>
          </div>
        </div>
      </section>

      {/* 特典セクション - ブランドストーリーの要素を追加、価値の根拠を明示 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            今だけの特別特典
          </h2>
          <p className="text-center text-gray-400 mb-4 text-lg">
            創設者が200名以上を指導する中で培った「秘密のナンパ術」を、特典として無料でプレゼントします。
          </p>
          <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 border border-yellow-700/50 p-8 rounded-xl">
            <p className="text-center text-2xl font-bold mb-2">
              総額26万円相当の特典を無料でプレゼント
            </p>
            <p className="text-center text-gray-400 mb-8 text-sm">
              ※ 通常、これらの特典は個別に販売している場合、合計26万円相当の価値があります
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-xl font-bold mb-2">無料PDF「ナンパ成功の7つのルール」</h3>
                <p className="text-gray-400 text-sm mb-2">通常¥3,000相当</p>
                <p className="text-xs text-gray-500 mb-2">創設者が200名以上を指導する中で見つけた、成功のための7つのルール</p>
                <p className="text-xs text-gray-600">※ 通常、同様のPDF教材は¥3,000-5,000で販売されています</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="text-3xl mb-3">🎥</div>
                <h3 className="text-xl font-bold mb-2">無料動画「AIコーチング活用法」</h3>
                <p className="text-gray-400 text-sm mb-2">通常¥5,000相当</p>
                <p className="text-xs text-gray-500 mb-2">24時間365日、AIコーチングを最大限に活用する方法</p>
                <p className="text-xs text-gray-600">※ 通常、同様の動画教材は¥5,000-10,000で販売されています</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="text-xl font-bold mb-2">コミュニティへの優先参加権</h3>
                <p className="text-gray-400 text-sm mb-2">通常¥18,000相当</p>
                <p className="text-xs text-gray-500 mb-2">同じ目標を持つ仲間と一緒に成長できる環境</p>
                <p className="text-xs text-gray-600">※ 通常、コミュニティへの参加は月額¥3,000-5,000、年間で¥18,000-30,000相当です</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6 text-sm">
              ※ 特典は購入後すぐにダウンロード可能です
            </p>
          </div>
        </div>
      </section>

      {/* 保証セクション - ブランドストーリーの要素を追加 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            安心の保証制度
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            創設者が200名以上を指導する中で、98%の受講生が成果を実感しています。その実績に基づいた保証制度です。
          </p>

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

      {/* FAQセクション - USPとブランドストーリーの要素を追加、価格の根拠を追加 */}
      <section id="faq" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            よくある質問
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Pick up labのUSPとブランドストーリーに関するよくある質問です。
          </p>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: 39.8万円は高すぎませんか？</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                A: 一般的なナンパスクールの月額制（月額2-5万円×12ヶ月=24-60万円）と比較すると、買い切り制の39.8万円は非常にコスパが良いです。さらに、26万円相当の特典が無料で付いてきます。創設者が200名以上を指導する中で培った「秘密のナンパ術」が含まれています。
              </p>
              <p className="text-gray-400 text-sm">
                <strong>価格の根拠:</strong> 1日あたり約4,300円（12ヶ月で割った場合）。一般的なナンパスクールの月額制と比較すると、長期的にコスパが良いです。さらに、26万円相当の特典が無料で付いてくるため、実質的な価値は64万円相当になります。
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: 本当に効果があるのですか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: 30日間の成果保証を設けています。30日間、実践を続けても成果が出ない場合、全額返金いたします。リスクはゼロです。また、過去3年間で、返金率はわずか2%です。98%の受講生が成果を実感しています。創設者の実績（渋谷で美女ナンパ成功率100%、講習受講者数200名以上、3ヶ月以内に彼女ができた割合70%以上）に基づいています。
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: AIコーチングだけで本当に上達できるのですか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: AIコーチングと人間講師のハイブリッドで、24時間365日サポートします（Pick up labのUSP）。AIコーチングで基礎を学び、人間講師が深いサポートを提供します。受講生の85%が3ヶ月以内に初めての成功を達成しています。創設者も最初は全く声をかけられませんでしたが、試行錯誤を重ね、ナンパ講師として200名以上を指導する中で、このハイブリッド方式の有効性を実感しました。
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: 初心者でも大丈夫ですか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: はい、大丈夫です。Pick up labは、初心者から上級者まで、すべてのレベルの方に対応しています。体系的な学習サイクル（Pick up labのUSP）で、着実に上達できます。創設者も最初は全く声をかけられませんでしたが、適切なサポートがあれば、誰でも必ず上達できるという信念のもと、サービスを設計しています。
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: 分割払いは可能ですか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: はい、可能です。3回払い、6回払い、12回払いが可能です。お申し込み時にご選択いただけます。
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: なぜAIと人間のハイブリッドコーチングなのですか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: 創設者が200名以上を指導する中で、講習だけでは限界があることに気づきました。実践の場面で迷ったとき、深夜に振り返りたいと思ったとき、すぐにサポートを受けられる環境が必要でした。そこで生まれたのが、AIと人間のハイブリッドコーチングというアイデアです。AIが24時間365日サポートし、人間講師が深いサポートを提供する。この組み合わせで、誰でも確実に上達できる環境を作りました。
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Q: 特典の価値は本当に26万円相当ですか？</h3>
              <p className="text-gray-300 leading-relaxed">
                A: はい、26万円相当です。各特典の価値は以下の通りです：
              </p>
              <ul className="text-gray-300 text-sm mt-3 space-y-2 ml-4">
                <li>• 無料PDF「ナンパ成功の7つのルール」: 通常¥3,000相当（同様のPDF教材は¥3,000-5,000で販売されています）</li>
                <li>• 無料動画「AIコーチング活用法」: 通常¥5,000相当（同様の動画教材は¥5,000-10,000で販売されています）</li>
                <li>• コミュニティへの優先参加権: 通常¥18,000相当（コミュニティへの参加は月額¥3,000-5,000、年間で¥18,000-30,000相当です）</li>
              </ul>
              <p className="text-gray-300 text-sm mt-3">
                合計26万円相当の価値があります。創設者が200名以上を指導する中で培った「秘密のナンパ術」が含まれています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 機能詳細セクション - USPの要素を追加 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            主な機能
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Pick up labのUSPを実現するための機能です。創設者の経験と実績から生まれました。
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3">24時間365日対応</h3>
              <p className="text-gray-300 text-sm mb-2">
                AIコーチングがいつでもあなたの上達をサポートします。
              </p>
              <p className="text-xs text-gray-500">
                USP: AIと人間のハイブリッドコーチング
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3">実践記録の管理</h3>
              <p className="text-gray-300 text-sm mb-2">
                実践記録を入力・管理し、データに基づいた改善提案を受けられます。
              </p>
              <p className="text-xs text-gray-500">
                USP: AI数値分析と改善アクション
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3">人間講師との連携</h3>
              <p className="text-gray-300 text-sm mb-2">
                人間講師とのハイブリッド機能（予約制）で、より深いサポートを受けられます。
              </p>
              <p className="text-xs text-gray-500">
                USP: AIと人間のハイブリッドコーチング
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ・申し込みセクション - ブランドストーリーの要素を追加、価格の根拠を追加 */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            今すぐ始める
          </h2>
          <p className="text-center text-gray-400 mb-4 text-lg">
            創設者が200名以上を指導する中で培った「秘密のナンパ術」を、いつどんな時も使えるように作られたPick up lab。
          </p>
          <p className="text-center text-gray-500 mb-4 text-sm">
            期間限定特別価格 ¥398,000（通常価格 ¥1,200,000）
            <br />
            先着50名様限定 | 残り23名様 | 2025年1月31日まで
          </p>
          <p className="text-center text-gray-500 mb-12 text-xs">
            1日あたり約4,300円（12ヶ月で割った場合）| 一般的なナンパスクールの月額制と比較すると、長期的にコスパが良いです
          </p>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8">
            <div className="text-center mb-6">
              <p className="text-2xl font-bold mb-4">総額26万円相当の特典を無料でプレゼント</p>
              <p className="text-gray-400 mb-4 text-sm">
                創設者が200名以上を指導する中で培った「秘密のナンパ術」が含まれています
              </p>
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
              <p className="text-sm text-gray-400 mb-4">
                7日間の返金保証付き | 30日間の成果保証付き
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <a href="#email-form" className="text-gray-400 hover:text-white transition-colors">
                  無料特典を受け取る
                </a>
                <span className="text-gray-600">|</span>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  よくある質問を見る
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
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
