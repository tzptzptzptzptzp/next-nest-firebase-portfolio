import { ContentTitle } from "../Title"
import { CareerBox } from "./Box"
import { faRoute } from "@fortawesome/free-solid-svg-icons"

import { careerType } from "@/types/data.type"

const careerData = [
  {
    name: 'Infrastructure company sales position',
    description: 'A company not related to IT. While employed, he began studying programming by himself.',
    join: '2019.9',
    leave: '2021.5',
    link: ''
  },
  {
    name: 'Design Tomato',
    description: 'Freelance for web production, web design, etc.',
    join: '2022.2',
    leave: '',
    link: 'https://design-tomato.com/'
  },
  {
    name: 'WEEL.inc',
    description: 'IT venture company. Step up from web production work to web development work.',
    join: '2023.7',
    leave: '',
    link: 'https://weel.co.jp/company/'
  },
]

export const Career = ({ data }: { data: careerType }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-10">
          <ContentTitle icon={faRoute} title={'Career'} />
          <div className="flex flex-col gap-6">
            {careerData.map((data, i) => (
              <CareerBox key={i} data={data} i={i} length={careerData.length} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}