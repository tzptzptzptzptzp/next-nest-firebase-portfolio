import { ContentTitle } from "../Title"
import { Image } from "@/components/atoms/Image"
import { faRocket } from "@fortawesome/free-solid-svg-icons"

import { enhancingType } from "@/types/data.type"

type Props = {
  data: enhancingType
}

export const Enhancing = ({ data }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faRocket} title={'Enhancing'} />
        <div className="flex flex-col w-full">
          <Image alt="Favorite Skills" className="w-full h-auto" src={`https://skillicons.dev/icons?i=${data}`} unoptimized />
        </div>
      </div>
    </div>
  )
}