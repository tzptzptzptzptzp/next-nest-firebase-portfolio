import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons"

import { dateType } from "@/types/data.type"
import { Skeleton } from "@/components/molecules/Skeleton"

type Props = {
  data: dateType["birth"]
  loading?: boolean
}

export const UserBirth = ({ data, loading = false }: Props) => {
  return (
    <Skeleton isLoading={loading} width={35}>
      <div className="flex-center gap-1">
        <FontAwesomeIcon icon={faCakeCandles} height={'1em'} />
        <p>{data}</p>
      </div>
    </Skeleton>
  )
}