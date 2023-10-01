import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons"

import { dateType } from "@/types/data.type"

export const UserBirth = ({ data }: { data: dateType["birth"] }) => {
  return (
    <>
      <div className="flex-center gap-1">
        <FontAwesomeIcon icon={faCakeCandles} height={'1em'} />
        <p>1994.5</p>
      </div>
    </>
  )
}