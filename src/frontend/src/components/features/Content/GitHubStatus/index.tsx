"use client"

import { ContentTitle } from "../Title"
import { Image } from "@/components/atoms/Image"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"

import { useAppSelector } from "@/reducks/hooks"

import styles from './GitHubStatus.module.scss'

export const GitHubStatus = () => {
  const isTheme = useAppSelector((state) => state.theme.value)
  const userName = useAppSelector((state) => state.data.data.profile.sns.github)
  const user = {
    theme: 'tokyonight',
    bg_color: '222222'
  }
  return (
    <div className="flex flex-col relative z-0">
      <ContentTitle icon={faGithubAlt} title={'GitHub Status'} />
      <div className="flex justify-between gap-8 -z-10 min-h-[2.5rem]">
        <div className="w-2/5">
          <Image alt="Top Languages Card" className={`${styles.scaleUp} w-full h-auto`} skeleton={false} src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&layout=compact&show_icons=true&hide_title=true&hide_border=true&hide=scss,css,html${isTheme === 'dark' ? '&theme=' + user.theme + '&bg_color=' + user.bg_color : ''}`} unoptimized />
        </div>
        <div className="w-3/5">
          <Image alt="GitHub Stats Card" className={`${styles.scaleUp} w-full h-auto`} skeleton={false} src={`https://github-readme-stats.vercel.app/api?username=${userName}&show_icons=true&count_private=true&hide_title=true&hide_border=true&hide=contribs${isTheme === 'dark' ? '&theme=' + user.theme + '&bg_color=' + user.bg_color : ''}`} unoptimized />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <Image alt="GitHub Profile Trophy" className="w-full h-auto" src={`https://github-profile-trophy.vercel.app/?username=${userName}&row=1&column=7&no-frame=true&no-bg=true${isTheme === 'dark' ? '&theme=' + user.theme : ''}`} unoptimized />
      </div>
    </div>
  )
}