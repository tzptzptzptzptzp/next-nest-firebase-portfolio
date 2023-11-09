import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"

export const Icon = ({ icon }: { icon: IconDefinition }) => {
  return (
    <FontAwesomeIcon icon={icon} height={'.9em'} className="max-w-[.9em] max-h-[.9em]" />
  )
}