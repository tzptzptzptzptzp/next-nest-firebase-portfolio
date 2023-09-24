"use client"

import { useEffect } from 'react'
import { Zen_Maru_Gothic } from 'next/font/google'

import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/redux/themeSlice'
import { RootState } from '@/redux/store'

const fontMain = Zen_Maru_Gothic({ weight: ['500', '700'], subsets: ['latin'] })

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  const dispatch = useDispatch()

  useEffect(() => {
    const setInitialColorMode = () => {
      const getInitialColorMode = () => {
        const storedPreferenceMode = localStorage.getItem('theme')
        const hasStoredPreference = typeof storedPreferenceMode === 'string'
        if (hasStoredPreference) {
          return storedPreferenceMode
        }

        const preference = matchMedia('(prefers-color-scheme): dark')
        const hasMediaQueryPreference = typeof preference.matches === 'boolean'
        if (hasMediaQueryPreference) {
          return preference.matches ? 'dark' : 'light'
        }

        return 'light'
      }
      const currentColorMode = getInitialColorMode()
      dispatch(toggleTheme(
        currentColorMode
      ))
    }
    setInitialColorMode()
  }, [])
  return (
    <>
      <html lang="ja">
        <body className={`${fontMain.className} overflow-hidden bg-bg_light dark:bg-bg_dark text-text_light dark:text-text_dark`}>{children}</body>
      </html>
    </>
  );
}