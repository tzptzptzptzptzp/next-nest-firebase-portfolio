import { ContentTitle } from "../Title"
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
        {/* eslint-disable-next-line */}
        <img src={`https://skillicons.dev/icons?i=${data}`} alt="" />
      </div>
    </div>
  )
}