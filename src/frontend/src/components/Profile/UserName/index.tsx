import { useAppSelector } from "@/redux/hooks"

import { nameType } from "@/types/data.type"

export const UserName = ({ data }: { data: nameType }) => {
  const currentLang = useAppSelector((state) => state.lang.value)
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold">{currentLang === 'en' ? data.name.en : data.name.ja}</h2>
        <p>{data.nickname}</p>
      </div>
    </>
  )
}