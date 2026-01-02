import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pick up lab - AIと人間のハイブリッドナンパコーチング | 24時間365日サポート",
  description: "創設者が200名以上を指導する中で培った「秘密のナンパ術」を、いつどんな時も使えるように作られたPick up lab。AIと人間のハイブリッドコーチングで、確実にナンパスキルを向上させます。成功率87%、累計500名以上が成功を実現。",
  keywords: "ナンパ, ナンパスクール, AIコーチング, ナンパコーチング, 恋愛, デート, 出会い",
  openGraph: {
    title: "Pick up lab - AIと人間のハイブリッドナンパコーチング",
    description: "24時間365日、AIコーチングがあなたの上達をサポート。成功率87%、累計500名以上が成功を実現。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
