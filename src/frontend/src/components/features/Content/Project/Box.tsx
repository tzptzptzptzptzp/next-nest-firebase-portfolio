import { Icon } from "@/components/Icon"
import { faWrench } from "@fortawesome/free-solid-svg-icons"

import { useAppSelector } from "@/reducks/hooks"

import { projectItemType } from "@/types/data.type"

export const ProjectBox = ({ data }: { data: projectItemType }) => {
  const currentLang = useAppSelector((state) => state.lang.value)
  return (
    <div className="flex flex-col gap-4 relative z-0 px-8 pt-4 pb-6 color-bg border rounded-lg">
      <div>
        <h3 className="text-[2.2rem] font-bold leading-tight">{currentLang === 'en' ? data.title.en : data.title.ja}</h3>
      </div>
      <p className="pl-1 text-[1.8rem] leading-tight">{currentLang === 'en' ? data.description.en : data.description.ja}</p>
      <div className="flex items-center gap-2 pt-4 pl-1 border-t text-[1.5rem]">
        <div style={{ transform: 'translateY(-0.05rem)' }}>
          <Icon icon={faWrench} />
        </div>
        <p className="tracking-wide">
          {data.technology.map((item, i) => (
            <span key={i}>{item}{i < data.technology.length - 1 ? ', ' : ''}</span>
          ))}
        </p>
      </div>
    </div>
  )
}