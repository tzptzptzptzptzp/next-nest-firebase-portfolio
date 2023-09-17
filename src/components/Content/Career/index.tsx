import { ContentTitle } from "../Title"
import { faRoute } from "@fortawesome/free-solid-svg-icons"

export const Career = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-10">
          <ContentTitle icon={faRoute} title={'Career'} />
          <div className="flex flex-col gap-6">
          </div>
        </div>
      </div>
    </>
  )
}