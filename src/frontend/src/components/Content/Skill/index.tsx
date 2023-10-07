import { ContentTitle } from "../Title"
import { SkillSection } from "./Section"
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons"

import { skillType } from "@/types/data.type"

export const Skill = ({ data }: { data: skillType }) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <ContentTitle icon={faWandSparkles} title={'Skill'} />
        {data.map((skills, i) => (
          <SkillSection key={i} skills={skills} />
        ))}
      </div>
    </>
  )
}