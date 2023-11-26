import { Image } from "@/components/atoms/Image"
import { experienceType } from "@/types/data.type"

const perline = 13

export const Experience = ({ data }: { data: experienceType }) => {
  return (
    <div className="flex flex-col w-full">
      <Image alt="Skill" className="w-full h-auto" src={`https://skillicons.dev/icons?i=${data.technology},${data.application}${perline ? '&perline=' + perline : ''}`} unoptimized />
    </div>
  )
}