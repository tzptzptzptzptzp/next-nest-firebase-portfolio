import { ContentTitle } from "../Title"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"

export const Portfolio = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-10">
          <ContentTitle icon={faGamepad} title={'Portfolio'} />
        </div>
      </div>
    </>
  )
}