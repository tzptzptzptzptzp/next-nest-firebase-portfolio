import { ContentTitle } from "../Title"
import { PortfolioBox } from "./Box"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"

import { portfolioType } from "@/types/data.type"

export const Portfolio = ({ data }: { data: portfolioType }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-10">
          <ContentTitle icon={faGamepad} title={'Portfolio'} />
          <div className="flex flex-col gap-6">
            {data.map((item, i) => (
              <PortfolioBox key={i} data={item} i={i} length={data.length} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}