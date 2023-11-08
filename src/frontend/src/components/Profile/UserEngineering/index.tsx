import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDisplay } from "@fortawesome/free-solid-svg-icons"

import { dateType } from "@/types/data.type"

export const UserEngineering = ({ data }: { data: dateType["engineering"] }) => {
  return (
    <div className="flex-center gap-2">
      <FontAwesomeIcon icon={faDisplay} width={'1em'} />
      <p>{data} ~</p>
    </div>
  )
}