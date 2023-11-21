import { ContentTitle } from "../Title"
import { SkillSection } from "./Section"
import { Skeleton } from "@/components/molecules/Skeleton"
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons"

import { skillType } from "@/types/data.type"

type Props = {
  data: skillType
  loading?: boolean
}

export const Skill = ({ data, loading = false }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <ContentTitle icon={faWandSparkles} title={'Skill'} />
      <Skeleton isLoading={loading} width={'100%'} height={100}>
        {data.map((skills, i) => (
          <SkillSection key={i} skills={skills} />
        ))}
      </Skeleton>
    </div>
  )
}