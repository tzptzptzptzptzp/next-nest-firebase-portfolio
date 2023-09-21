import { ContentTitle } from "../Title"
import { PortfolioBox } from "./Box"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"

const portfolioData = [
  {
    name: 'This site',
    description: 'A company not related to IT. While employed, he began studying programming by himself.',
    link: '',
    technology: [
      'Next.js',
      'Nest.js',
      'Firebase'
    ],
  },
  {
    name: 'Web no Arekore',
    description: 'Freelance for web production, web design, etc.',
    link: 'https://xn--l8j8a4kb.website/',
    technology: [
      'Next.js',
      'microCMS',
      'recoil'
    ],
  },
  {
    name: 'Design Tomato',
    description: 'IT venture company. Step up from web production work to web development work.',
    link: 'https://design-tomato.com/',
    technology: [
      'WordPress',
      'PHP',
      'MAMP'
    ],
  },
]

export const Portfolio = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-10">
          <ContentTitle icon={faGamepad} title={'Portfolio'} />
          <div className="flex flex-col gap-6">
            {portfolioData.map((data, i) => (
              <PortfolioBox key={i} data={data} i={i} length={portfolioData.length} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}