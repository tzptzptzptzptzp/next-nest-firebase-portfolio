import { Skeleton } from "@/components/molecules/Skeleton"
import { useAppSelector } from "@/reducks/hooks"

import { occupationType } from "@/types/data.type"

type Props = {
  data: occupationType
  loading?: boolean
}

export const UserJob = ({ data, loading = false }: Props) => {
  const currentLang = useAppSelector((state) => state.lang.value)
  return (
    <div className="text-center">
      <Skeleton isLoading={loading}>
        <p className="text-[1.8rem]" dangerouslySetInnerHTML={{ __html: currentLang === 'en' ? data.en : data.ja }}></p>
      </Skeleton>
    </div>
  )
}