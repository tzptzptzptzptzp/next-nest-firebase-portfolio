import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDisplay } from "@fortawesome/free-solid-svg-icons"

export const UserEngineering = () => {
  return (
    <>
      <div className="flex-center gap-2">
        <FontAwesomeIcon icon={faDisplay} width={'1em'} />
        <p>2020.2 ~</p>
      </div>
    </>
  )
}