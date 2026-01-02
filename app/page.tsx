export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
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

          {/* CTAボタン */}
          <div className="text-center mb-16">
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl"
            >
              今すぐ始める
            </a>
          </div>

          {/* 価格表示 */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 rounded-full">
              <p className="text-sm text-gray-300 line-through mb-1">通常価格 ¥1,200,000</p>
              <p className="text-3xl font-bold">期間限定特別価格 ¥398,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* USPセクション */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            なぜPick up labなのか？
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* USP 1: AIと人間のハイブリッド */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AIと人間のハイブリッドコーチング</h3>
              <p className="text-gray-300 leading-relaxed">
                24時間365日、AIコーチングがあなたの上達をサポート。人間講師とのハイブリッド機能で、AIが講師の教え方をサポートし品質を保証します。
              </p>
            </div>

            {/* USP 2: データドリブンな上達 */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">AI数値分析と改善アクション</h3>
              <p className="text-gray-300 leading-relaxed">
                講習→実践→AI数値分析→AI改善アクションの体系化。データに基づいた改善提案で、確実にスキルを向上させます。
              </p>
            </div>

            {/* USP 3: 体系的な学習サイクル */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-4">体系的な学習サイクル</h3>
              <p className="text-gray-300 leading-relaxed">
                実践記録の入力・管理から、成功事例・失敗事例の体系化まで。継続的な改善サイクルで、着実に上達できます。
              </p>
            </div>

            {/* USP 4: コミュニティ機能 */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">コミュニティ機能</h3>
              <p className="text-gray-300 leading-relaxed">
                同じ目標を持つ仲間と情報共有。コミュニティ機能で、モチベーションを維持しながら上達できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 保証セクション */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            安心の保証制度
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-xl border border-green-700">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4">30日間の成果保証</h3>
              <p className="text-gray-200 leading-relaxed">
                30日間、実践を続けても成果が出ない場合、全額返金いたします。
                <br />
                <span className="text-sm text-gray-400">
                  （条件: 週3回以上の実践、AIコーチングの利用、フィードバックの受講）
                </span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl border border-blue-700">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-4">7日間の返金保証</h3>
              <p className="text-gray-200 leading-relaxed">
                7日間以内であれば、理由を問わず全額返金いたします。
                <br />
                <span className="text-sm text-gray-400">
                  安心してご利用いただけます。
                </span>
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

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            お問い合わせ
          </h2>
          <p className="text-center text-gray-400 mb-12">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <p className="text-center text-lg mb-4">
              <strong>メールアドレス</strong>
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
