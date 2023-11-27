import { ContentTitle } from "../Title"
import { Skeleton } from "@/components/molecules/Skeleton"
import { faAddressCard } from "@fortawesome/free-regular-svg-icons"

import { useAppSelector } from "@/reducks/hooks"

import { aboutMeType } from "@/types/data.type"

type Props = {
  data: aboutMeType
  loading?: boolean
}

export const AboutMe = ({ data, loading = false }: Props) => {
  const currentLang = useAppSelector((state) => state.lang.value)
  return (
    <div className="flex flex-col gap-10">
      <ContentTitle icon={faAddressCard} title={'About me'} />
      <div className="w-full">
        <Skeleton isLoading={loading} width={'100%'} height={100}>
          <p className="w-full px-4 text-[1.8rem] leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{
            __html: currentLang === 'en' ? data.en : data.ja
          }}>
          </p>
        </Skeleton>
      </div>
    </div>
  )
}