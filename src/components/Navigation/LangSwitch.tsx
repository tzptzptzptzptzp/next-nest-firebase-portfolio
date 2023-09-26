"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { toggleLang } from "@/redux/langSlice"

export const LangSwitch = () => {
  const isLang = useAppSelector((state) => state.lang.value)
  const dispatch = useAppDispatch()

  const handleClick = (currentLang: string) => {
    if (currentLang === 'en') {
      dispatch(toggleLang('ja'))
    } else if (currentLang === 'ja') {
      dispatch(toggleLang('en'))
    }
  }
  return (
    <>
      <button onClick={() => handleClick(isLang)} className="flex-center w-[4.5rem] h-[4.5rem]">
        <div className="flex relative z-0 w-[4.5rem] h-[2.5rem] p-[1px] border-4 rounded-lg text-[1.25rem] font-bold">
          <div className="absolute top-0 -left-[1.8px] -z-10 w-1/2 h-full bg-text_dark" style={{ transform: 'scale(1.05)' }}></div>
          <div className="w-1/2 text-bg_dark" style={{ transform: 'translateX(1px)' }}>
            Ja
          </div>
          <div className="w-1/2" style={{ transform: 'translateX(1px)' }}>
            En
          </div>
        </div>
      </button>
    </>
  )
}