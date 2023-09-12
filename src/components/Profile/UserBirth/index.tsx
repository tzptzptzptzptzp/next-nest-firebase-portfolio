import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons"

export const UserBirth = () => {
  return (
    <>
      <div className="flex-center gap-1">
        <FontAwesomeIcon icon={faCakeCandles} height={'1em'} />
        <p>1994.5</p>
      </div>
    </>
  )
}