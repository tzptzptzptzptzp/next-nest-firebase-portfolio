import { ContentTitle } from "../Title"
import { faAddressCard } from "@fortawesome/free-regular-svg-icons"

import { useAppSelector } from "@/redux/hooks"

import { aboutMeType } from "@/types/data.type"

export const AboutMe = ({ data }: { data: aboutMeType }) => {
  const currentLang = useAppSelector((state) => state.lang.value)
  return (
    <>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faAddressCard} title={'About me'} />
        <div className="w-full px-4">
          <p className="w-full text-[1.8rem] leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{
            __html: currentLang === 'en' ? data.en : data.ja
          }}>
          </p>
        </div>
      </div>
    </>
  )
}