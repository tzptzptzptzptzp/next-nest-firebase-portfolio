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
        <div className="flex relative z-0 w-[4.5rem] h-[2.5rem] p-[1px] border-4 rounded-lg text-[1.25rem] font-black">
          <div className={`absolute top-0 ${isLang === 'ja' ? '-left-[1px]' : '-right-[1px]'} -z-10 w-1/2 h-full color-border duration-300`} style={{ transform: 'scale(1.05)' }}></div>
          <div className={`w-1/2  ${isLang === 'ja' ? 'color-text-nav-lang' : 'color-text'}`}>
            <p style={{ transform: isLang === 'ja' ? 'none' : 'translateX(1.8px)' }}>
              Ja
            </p>
          </div>
          <div className={`w-1/2  ${isLang === 'en' ? 'color-text-nav-lang' : 'color-text'}`}>
            <p style={{ transform: isLang === 'en' ? 'translateX(3.5px)' : 'translateX(1.5px)' }}>
              En
            </p>
          </div>
        </div>
      </button>
    </>
  )
}