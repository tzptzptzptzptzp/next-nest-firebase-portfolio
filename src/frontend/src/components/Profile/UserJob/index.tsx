import { useAppSelector } from "@/redux/hooks"

import { occupationType } from "@/types/data.type"

export const UserJob = ({ data }: { data: occupationType }) => {
  const currentLang = useAppSelector((state) => state.lang.value)
  return (
    <div className="text-center">
      <p className="text-[1.8rem]" dangerouslySetInnerHTML={{ __html: currentLang === 'en' ? data.en : data.ja }}></p>
    </div>
  )
}