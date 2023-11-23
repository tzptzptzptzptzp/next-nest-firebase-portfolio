"use client"

import { useEffect } from 'react'
import { Zen_Maru_Gothic } from 'next/font/google'

import { useAppSelector } from '@/reducks/hooks'
import useInitialize from '@/fooks/useInitialize'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

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
        <body className={`${fontMain.className} overflow-hidden color-main color-text`}>
          {children}
          <ToastContainer
            position='top-right'
            closeOnClick
            pauseOnHover
            draggable
            theme={isTheme === 'light' ? 'light' : 'dark'}
          />
        </body>
      </html>
    </>
  );
}