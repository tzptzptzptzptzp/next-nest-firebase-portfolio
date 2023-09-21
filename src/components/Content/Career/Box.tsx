import { Icon } from "@/components/Icon"
import { faBuilding, faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { CareerType } from "@/types/CareerType"

type Props = {
  data: CareerType
  i: number
  length: number
}

export const CareerBox = ({ data, i, length }: Props) => {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <div style={{ transform: 'translateY(.15rem)' }}>
          <Icon icon={faBuilding} />
        </div>
        <h3 className="text-[2.2rem] font-bold">{data.name}</h3>
        {data.link != '' ? (
          <div style={{ transform: 'translateY(.25rem)' }}>
            <Icon icon={faArrowUpRightFromSquare} />
          </div>
        ) : ''}
      </div>
      <p className="pl-3 text-[1.8rem]">{data.description}</p>
      <div className="flex items-center gap-2 mt-4 pl-3">
        <div style={{ transform: 'translateY(-0.1rem)' }}>
          <Icon icon={faCalendar} />
        </div>
        <p className="text-[1.5rem] tracking-wide">
          {data.join} - {data.leave}
        </p>
      </div>
      {i != length - 1 ? (
        <div className="absolute -bottom-8 left-1/2 -z-10 w-[2px] h-8 bg-text_light dark:bg-text_dark opacity-50"></div>
      ) : ''}
    </>
  )
  return (
    <>
      {data.link != '' ? (
        <a href={data.link} className="flex flex-col gap-2 relative z-0 px-8 pt-4 pb-6 bg-bg_light dark:bg-bg_dark border rounded-lg" target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <div className="flex flex-col gap-2 relative z-0 px-8 pt-4 pb-6 bg-bg_light dark:bg-bg_dark border rounded-lg">
          {content}
        </div>
      )}
    </>
  )
}