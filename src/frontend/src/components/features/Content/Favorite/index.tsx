import { ContentTitle } from "../Title"
import { Skeleton } from "@/components/molecules/Skeleton"
import { faStar } from "@fortawesome/free-regular-svg-icons"

import { favoriteType } from "@/types/data.type"

type Props = {
  data: favoriteType
  loading?: boolean
}

export const Favorite = ({ data, loading = false }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faStar} title={'Favorite'} />
        <Skeleton isLoading={loading} width={'100%'} height={100}>
          {/* eslint-disable-next-line */}
          <img src={`https://skillicons.dev/icons?i=${data}`} alt="Favorite Skills" />
        </Skeleton>
      </div>
    </div>
  )
}