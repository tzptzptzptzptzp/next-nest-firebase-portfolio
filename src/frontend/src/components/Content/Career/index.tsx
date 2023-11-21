import { ContentTitle } from "../Title"
import { CareerBox } from "./Box"
import { Skeleton } from "@/components/molecules/Skeleton"
import { faRoute } from "@fortawesome/free-solid-svg-icons"

import { careerType } from "@/types/data.type"

type Props = {
  data: careerType
  loading?: boolean
}

export const Career = ({ data, loading = false }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faRoute} title={'Career'} />
        <Skeleton isLoading={loading} width={'100%'} height={100}>
          <div className="flex flex-col gap-6">
            {data.map((item, i) => (
              <CareerBox key={i} data={item} i={i} length={data.length} />
            ))}
          </div>
        </Skeleton>
      </div>
    </div>
  )
}