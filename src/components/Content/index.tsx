import { AboutMe } from "./AboutMe"
import { GitHubStatus } from "./GitHubStatus"
import { Favorite } from "./Favorite"
import { Enhancing } from "./Enhancing"
import { Skill } from "./Skill"
import { Project } from "./Project"
import { Portfolio } from "./Portfolio"
import { Career } from "./Career"
import { Experience } from "./Experience"

import { contentType } from "@/types/data.type"

export const Content = ({ data }: { data: contentType }) => {
  return (
    <>
      <div className='relative top-0 right-0 w-3/4 h-full py-24 pr-48 '>
        <div className='overflow-y-scroll h-full'>
          <div className='flex flex-col gap-16 p-16 color-bg'>
            <AboutMe />
            <GitHubStatus />
            <Favorite />
            <Enhancing />
            <Skill />
            <Project />
            <Portfolio />
            <Career />
            <Experience />
          </div>
        </div>
      </div>
    </>
  )
}