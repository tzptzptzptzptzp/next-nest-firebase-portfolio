import { Icon } from "@/components/Icon"
import { faIcons, faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as outline } from "@fortawesome/free-regular-svg-icons"

import { skillSetType } from "@/types/data.type"

type Props = {
  skill: skillSetType
}

export const SkillBox = ({ skill }: Props) => {
  const validStars = Array.from({ length: skill.rate }, (_, index) => (
    <Icon key={index} icon={faStar} />
  ));

  const invalidStars = Array.from({ length: (5 - skill.rate) }, (_, index) => (
    <Icon key={index} icon={outline} />
  ));
  return (
    <>
      <div className="flex items-center justify-between gap-4 relative z-0 p-4 color-bg border rounded-lg">
        <div className="flex flex-col gap-1">
          <h3 className="text-[2rem] font-bold">{skill.name}</h3>
          <div className="h-8 text-amber-500">
            {validStars}
            {invalidStars}
          </div>
        </div>
        <div className="w-16 h-16">
          {skill.icon ? (
            /* eslint-disable-next-line */
            <img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt={skill.name} />
          ) : (
            <div className="flex-center w-full h-full text-[3rem]">
              <Icon icon={faIcons} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}