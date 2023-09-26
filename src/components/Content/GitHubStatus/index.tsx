"use client"

import { ContentTitle } from "../Title"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { useAppSelector } from "@/redux/hooks"

export const GitHubStatus = () => {
  const isTheme = useAppSelector((state) => state.theme.value)
  const user = {
    name: 'tzptzptzptzptzp',
    theme: 'tokyonight',
    bg_color: '222222'
  }
  return (
    <>
      <div className="flex flex-col relative z-0">
        <ContentTitle icon={faGithubAlt} title={'GitHub Status'} />
        <div className="flex justify-between gap-8 -z-10">
          <div className="w-2/5">
            {/* eslint-disable-next-line */}
            <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user.name}&layout=compact&show_icons=true&hide_title=true&hide_border=true&hide=scss,css,html${isTheme === 'dark' ? '&theme=' + user.theme + '&bg_color=' + user.bg_color : ''}`} className="w-full" style={{ transform: 'scale(1.1)' }} alt="Top Languages Card" />
          </div>
          <div className="w-3/5">
            {/* eslint-disable-next-line */}
            <img src={`https://github-readme-stats.vercel.app/api?username=${user.name}&show_icons=true&count_private=true&hide_title=true&hide_border=true&hide=contribs${isTheme === 'dark' ? '&theme=' + user.theme + '&bg_color=' + user.bg_color : ''}`} className="w-full" style={{ transform: 'scale(1.1)' }} alt="GitHub Stats Card" />
          </div>
        </div>
        <div className="w-full">
          {/* eslint-disable-next-line */}
          <img className="w-full" src={`https://github-profile-trophy.vercel.app/?username=${user.name}&row=1&column=7&no-frame=true&no-bg=true${isTheme === 'dark' ? '&theme=' + user.theme : ''}`} alt="GitHub Profile Trophy" />
        </div>
      </div>
    </>
  )
}