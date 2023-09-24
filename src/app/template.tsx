"use client"

import { Zen_Maru_Gothic } from 'next/font/google'

const fontMain = Zen_Maru_Gothic({ weight: ['500', '700'], subsets: ['latin'] })

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="ja">
        <body className={`${fontMain.className} overflow-hidden bg-bg_light dark:bg-bg_dark text-text_light dark:text-text_dark`}>{children}</body>
      </html>
    </>
  );
}