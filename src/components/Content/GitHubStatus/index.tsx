import { ContentTitle } from "../Title"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"

export const GitHubStatus = () => {
  const username = 'tzptzptzptzptzp'
  return (
    <>
      <div className="flex flex-col gap-8">
        <ContentTitle icon={faGithubAlt} title={'GitHub Status'} />
        <div className="flex justify-between gap-8">
          <div className="w-2/5">
            {/* eslint-disable-next-line */}
            <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&show_icons=true&hide_title=true&hide_border=true&hide=scss,css,html`} className="w-full" style={{ transform: 'scale(1.1)' }} alt="Top Languages Card" />
          </div>
          <div className="w-3/5">
            {/* eslint-disable-next-line */}
            <img src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&hide_title=true&bg_color=transparent&hide_border=true&hide=contribs`} className="w-full" style={{ transform: 'scale(1.1)' }} alt="GitHub Stats Card" />
          </div>
        </div>
        <div className="w-full">
          {/* eslint-disable-next-line */}
          <img className="w-full" src={`https://github-profile-trophy.vercel.app/?username=${username}&row=1&column=7&theme=flat&no-frame=true`} alt="GitHub Profile Trophy" />
        </div>
      </div>
    </>
  )
}