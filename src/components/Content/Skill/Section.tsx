import { SkillType } from "@/types/SkillType"
import { SkillBox } from "./Box"

type SkillSet = {
  sectionTitle: string,
  skillSet: SkillType[]
}

type Props = {
  skills: SkillSet
}

export const SkillSection = ({ skills }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-[2.2rem] font-bold">{skills.sectionTitle}</p>
        <div className="grid grid-cols-4 gap-x-6 gap-y-4">
          {skills.skillSet.map((skill, i) => (
            <SkillBox key={i} skill={skill} />
          ))}
        </div>
      </div>
    </>
  )
}