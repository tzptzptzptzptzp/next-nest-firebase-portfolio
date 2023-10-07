"use client"

import { useEffect } from 'react'
import { Zen_Maru_Gothic } from 'next/font/google'

import { useAppSelector } from '@/redux/hooks'
import useInitialize from '@/fooks/useInitialize'

const fontMain = Zen_Maru_Gothic({ weight: ['500', '700'], subsets: ['latin'] })

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  const initialize = useInitialize()
  const isTheme = useAppSelector((state) => state.theme.value)

  useEffect(() => {
    initialize
  }, [])

  return (
    <>
      <html lang="ja" data-theme={isTheme ? isTheme : null}>
        <body className={`${fontMain.className} overflow-hidden color-main color-text`}>{children}</body>
      </html>
    </>
  );
}