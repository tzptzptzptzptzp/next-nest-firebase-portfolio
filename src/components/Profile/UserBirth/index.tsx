import { faCakeCandles } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const UserBirth = () => {
  return (
    <>
      <div className="flex-center gap-2">
        <FontAwesomeIcon icon={faCakeCandles} width={'1em'} />
        <p>1994.5</p>
      </div>
    </>
  )
}