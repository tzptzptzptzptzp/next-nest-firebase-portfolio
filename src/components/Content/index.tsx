import { AboutMe } from "./AboutMe"
import { GitHubStatus } from "./GitHubStatus"
import { Favorite } from "./Favorite"
import { Enhancing } from "./Enhancing"
import { Career } from "./Career"
import { Experience } from "./Experience"

export const Content = () => {
  return (
    <>
      <div className='relative top-0 right-0 w-2/3 h-full py-24 pr-24 bg-main dark:bg-bg_dark'>
        <div className='overflow-y-scroll h-full'>
          <div className='flex flex-col gap-16 p-16 bg-bg_light dark:bg-bg_dark'>
            <AboutMe />
            <GitHubStatus />
            <Favorite />
            <Enhancing />
            <Career />
            <Experience />
          </div>
        </div>
      </div>
    </>
  )
}