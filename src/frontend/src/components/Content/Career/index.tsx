import { ContentTitle } from "../Title"
import { CareerBox } from "./Box"
import { faRoute } from "@fortawesome/free-solid-svg-icons"

import { careerType } from "@/types/data.type"

export const Career = ({ data }: { data: careerType }) => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faRoute} title={'Career'} />
        <div className="flex flex-col gap-6">
          {data.map((item, i) => (
            <CareerBox key={i} data={item} i={i} length={data.length} />
          ))}
        </div>
      </div>
    </div>
  )
}