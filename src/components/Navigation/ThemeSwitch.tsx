"use client"

import { SunIcon } from "../Icon/Sun"
import { MoonIcon } from "../Icon/Moon"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { toggleTheme } from "@/redux/themeSlice"

export const ThemeSwitch = () => {
  const isTheme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  const handleClick = (currentTheme: string) => {
    if (currentTheme === 'light') {
      dispatch(toggleTheme('dark'))
      localStorage.setItem('theme', 'dark')
    } else if (currentTheme === 'dark') {
      dispatch(toggleTheme('light'))
      localStorage.setItem('theme', 'light')
    }
  }
  return (
    <>
      <button onClick={() => handleClick(isTheme)} className="w-[4.5rem] h-[4.5rem]">
        {isTheme === '' ? (
          <MoonIcon />
        ) : null}
        {isTheme === 'light' ? (
          <MoonIcon />
        ) : null}
        {isTheme === 'dark' ? (
          <SunIcon />
        ) : null}
      </button>
    </>
  )
}