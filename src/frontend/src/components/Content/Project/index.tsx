import { ContentTitle } from "../Title"
import { ProjectBox } from "./Box"
import { faFilm } from "@fortawesome/free-solid-svg-icons"

import { projectType } from "@/types/data.type"

export const Project = ({ data }: { data: projectType }) => {
  const ascOrderData = data.slice().sort((a, b) => new Date(a.completion_date).getTime() - new Date(b.completion_date).getTime())
  const oddIndexProjects = ascOrderData.filter((_, index) => index % 2 !== 1);
  const evenIndexProjects = ascOrderData.filter((_, index) => index % 2 !== 0);
  return (
    <>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faFilm} title={'Project'} />
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            {oddIndexProjects.map((data, i) => (
              <ProjectBox key={i} data={data} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {evenIndexProjects.map((data, i) => (
              <ProjectBox key={i} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}