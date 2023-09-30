"use client"

import { useEffect } from 'react'
import { Zen_Maru_Gothic } from 'next/font/google'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { toggleTheme } from '@/redux/slice/themeSlice'

const fontMain = Zen_Maru_Gothic({ weight: ['500', '700'], subsets: ['latin'] })

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  const isTheme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

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
      <html lang="ja" data-theme={isTheme ? isTheme : null}>
        <body className={`${fontMain.className} overflow-hidden color-main color-text`}>{children}</body>
      </html>
    </>
  );
}