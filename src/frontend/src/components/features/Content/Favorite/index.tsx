import { ContentTitle } from "../Title"
import { Image } from "@/components/atoms/Image"
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
        <div className="flex flex-col w-full">
          <Image alt="Favorite Skills" className="w-full h-auto" src={`https://skillicons.dev/icons?i=${data}`} unoptimized />
        </div>
      </div>
    </div>
  )
}