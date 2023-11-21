import { experienceType } from "@/types/data.type"

const perline = 13

export const Experience = ({ data }: { data: experienceType }) => {
  return (
    <div>
      {/* eslint-disable-next-line */}
      <img src={`https://skillicons.dev/icons?i=${data.technology},${data.application}${perline ? '&perline=' + perline : ''}`} alt="Skill" />
    </div>
  )
}