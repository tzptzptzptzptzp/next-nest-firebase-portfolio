import { ContentTitle } from "../Title"
import { faStar } from "@fortawesome/free-regular-svg-icons"

export const Favorite = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-8">
          <ContentTitle icon={faStar} title={'Favorite'} />
        </div>
      </div>
    </>
  )
}