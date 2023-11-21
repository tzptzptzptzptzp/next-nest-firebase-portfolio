import { ContentTitle } from "../Title"
import { PortfolioBox } from "./Box"
import { Skeleton } from "@/components/molecules/Skeleton"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"

import { portfolioType } from "@/types/data.type"

type Props = {
  data: portfolioType
  loading?: boolean
}

export const Portfolio = ({ data, loading = false }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faGamepad} title={'Portfolio'} />
        <Skeleton isLoading={loading} width={'100%'} height={100}>
          <div className="flex flex-col gap-6">
            {data.map((item, i) => (
              <PortfolioBox key={i} data={item} i={i} length={data.length} />
            ))}
          </div>
        </Skeleton>
      </div>
    </div>
  )
}