import { faWandSparkles } from "@fortawesome/free-solid-svg-icons"
import { ContentTitle } from "../Title"

export const Skill = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <ContentTitle icon={faWandSparkles} title={'Skill'} />
      </div>
    </>
  )
}