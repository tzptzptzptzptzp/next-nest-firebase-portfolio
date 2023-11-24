import { ContentTitle } from "../Title"
import { faRocket } from "@fortawesome/free-solid-svg-icons"

import { enhancingType } from "@/types/data.type"
import { Skeleton } from "@/components/molecules/Skeleton"

type Props = {
  data: enhancingType
  loading?: boolean
}

export const Enhancing = ({ data, loading = false }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faRocket} title={'Enhancing'} />
        <Skeleton isLoading={loading} width={'100%'} height={100}>
          {/* eslint-disable-next-line */}
          <img src={`https://skillicons.dev/icons?i=${data}`} alt="" />
        </Skeleton>
      </div>
    </div>
  )
}