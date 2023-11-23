import { Skeleton } from "@/components/molecules/Skeleton"

import { useAppSelector } from "@/reducks/hooks"

import { nameType } from "@/types/data.type"

type Props = {
  data: nameType
  loading?: boolean
}

export const UserName = ({ data, loading = false }: Props) => {
  const currentLang = useAppSelector((state) => state.lang.value)
  return (
    <div className="text-center">
      <Skeleton isLoading={loading} width={120}>
        <h2 className="text-4xl font-bold">{currentLang === 'en' ? data.name.en : data.name.ja}</h2>
      </Skeleton>
      <Skeleton isLoading={loading} width={80}>
        <p>{data.nickname}</p>
      </Skeleton>
    </div>
  )
}