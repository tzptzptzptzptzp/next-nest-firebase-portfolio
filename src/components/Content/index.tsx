import { GitHubStatus } from "./GitHubStatus"
import { Favorite } from "./Favorite"
import { Enhancing } from "./Enhancing"
import { AboutMe } from "./AboutMe"
import { Skill } from "./Skill"
import { Project } from "./Project"
import { Portfolio } from "./Portfolio"
import { Career } from "./Career"
import { Experience } from "./Experience"

import { contentType } from "@/types/data.type"
import { pageContentType } from "@/types/content.type"

export const Content = ({ data, content }: { data: contentType, content: pageContentType }) => {
  return (
    <>
      <div className='relative top-0 right-0 w-3/4 h-full py-24 pr-48 '>
        <div className='overflow-y-scroll h-full'>
          <div className='flex flex-col gap-16 p-16 color-bg'>
            {content.gitHubStatus && (<GitHubStatus />)}
            {content.favorite && (<Favorite data={data.favoriteData} />)}
            {content.enhancing && (<Enhancing data={data.enhancingData} />)}
            {content.aboutMe && (<AboutMe data={data.aboutMeData} />)}
            {content.skill && (<Skill data={data.skillData} />)}
            {content.project && (<Project data={data.projectData} />)}
            {content.portfolio && (<Portfolio data={data.portfolioData} />)}
            {content.career && (<Career data={data.careerData} />)}
            {content.experience && (<Experience data={data.experienceData} />)}
          </div>
        </div>
      </div>
    </>
  )
}