import { faFilm } from "@fortawesome/free-solid-svg-icons"
import { ContentTitle } from "../Title"

export const Project = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faFilm} title={'Project'} />
      </div>
    </>
  )
}