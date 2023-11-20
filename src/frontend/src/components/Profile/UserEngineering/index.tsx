import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDisplay } from "@fortawesome/free-solid-svg-icons"

import { dateType } from "@/types/data.type"
import { Skeleton } from "@/components/molecules/Skeleton"

type Props = {
  data: dateType["engineering"]
  loading?: boolean
}

export const UserEngineering = ({ data, loading = false }: Props) => {
  return (
    <Skeleton isLoading={loading} width={35}>
      <div className="flex-center gap-2">
        <FontAwesomeIcon icon={faDisplay} width={'1em'} />
        <p>{data} ~</p>
      </div>
    </Skeleton>
  )
}