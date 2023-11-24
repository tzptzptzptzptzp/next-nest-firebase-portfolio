import { useEffect, useState } from "react"

import { GitHubStatus } from "./GitHubStatus"
import { Favorite } from "./Favorite"
import { Enhancing } from "./Enhancing"
import { AboutMe } from "./AboutMe"
import { Skill } from "./Skill"
import { Project } from "./Project"
import { Portfolio } from "./Portfolio"
import { Career } from "./Career"
import { Experience } from "./Experience"

import { useAppSelector } from "@/reducks/hooks"

import { contentType } from "@/types/data.type"
import { pageContentType } from "@/types/content.type"

export const Content = ({ data, content }: { data: contentType, content: pageContentType }) => {
  const [loading, setLoading] = useState(true)
  const isLoading = useAppSelector((state) => state.data.loading)

  useEffect(() => {
    if (!isLoading) setLoading(false)
  }, [isLoading])
  return (
    <div className='relative top-0 right-0 w-3/4 h-full py-24 pr-48 '>
      <div className='overflow-y-scroll h-full'>
        <div className='flex flex-col gap-16 p-16 color-bg'>
          {content.gitHubStatus && (<GitHubStatus />)}
          {content.favorite && (<Favorite data={data.favoriteData} loading={loading} />)}
          {content.enhancing && (<Enhancing data={data.enhancingData} loading={loading} />)}
          {content.aboutMe && (<AboutMe data={data.aboutMeData} loading={loading} />)}
          {content.skill && (<Skill data={data.skillData} loading={loading} />)}
          {content.project && (<Project data={data.projectData} loading={loading} />)}
          {content.portfolio && (<Portfolio data={data.portfolioData} loading={loading} />)}
          {content.career && (<Career data={data.careerData} loading={loading} />)}
          {content.experience && (<Experience data={data.experienceData} />)}
        </div>
      </div>
    </div>
  )
}