import { Icon } from "@/components/Icon"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"

export const ContentTitle = ({ icon, title }: { icon: IconDefinition, title: string }) => {
  return (
    <>
      <div className="flex items-center gap-2 pb-3 border-b text-5xl" >
        <div style={{ transform: 'translateY(1px)' }}>
          <Icon icon={icon} />
        </div>
        <h2 className="font-bold tracking-wide">
          {title}
        </h2>
      </div>
    </>
  )
}