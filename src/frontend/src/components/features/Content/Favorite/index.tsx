import { ContentTitle } from "../Title"
import { faStar } from "@fortawesome/free-regular-svg-icons"

import { favoriteType } from "@/types/data.type"

type Props = {
  data: favoriteType
}

export const Favorite = ({ data }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faStar} title={'Favorite'} />
        {/* eslint-disable-next-line */}
        <img src={`https://skillicons.dev/icons?i=${data}`} alt="Favorite Skills" />
      </div>
    </div>
  )
}