import { Icon } from "@/components/Icon"
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons"
import { faArrowUpRightFromSquare, faWrench } from "@fortawesome/free-solid-svg-icons"
import { PortfolioType } from "@/types/PortfolioType"

type Props = {
  data: PortfolioType
  i: number
  length: number
}

export const PortfolioBox = ({ data, i, length }: Props) => {
  return (
    <>
      <a href={data.link} className="flex flex-col gap-4 relative z-0 px-8 pt-4 pb-6 color-bg border rounded-lg" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-2">
          <div style={{ transform: 'translateY(.15rem)' }}>
            <Icon icon={faWindowMaximize} />
          </div>
          <h3 className="text-[2.2rem] font-bold">{data.name}</h3>
          {data.link != '' ? (
            <div style={{ transform: 'translateY(.25rem)' }}>
              <Icon icon={faArrowUpRightFromSquare} />
            </div>
          ) : ''}
        </div>
        <p className="pl-1 text-[1.8rem] leading-tight">{data.description}</p>
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
      </a>
    </>
  )
}