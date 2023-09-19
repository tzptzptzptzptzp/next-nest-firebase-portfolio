import { faWandSparkles } from "@fortawesome/free-solid-svg-icons"
import { ContentTitle } from "../Title"
import { SkillSection } from "./Section"

const data = [
  {
    sectionTitle: 'Language & Framework',
    skillSet: [
      {
        icon: 'react',
        name: 'React',
        rate: 4
      },
      {
        icon: 'nextjs',
        name: 'Next.js',
        rate: 4
      },
      {
        icon: 'ts',
        name: 'TypeScript',
        rate: 4
      },
      {
        icon: 'rails',
        name: 'Ruby on Rails',
        rate: 3
      },
    ]
  },
  {
    sectionTitle: 'DataBase',
    skillSet: [
      {
        icon: 'mysql',
        name: 'MySQL',
        rate: 4
      },
      {
        icon: 'postgresql',
        name: 'PostgreSQL',
        rate: 4
      },
      {
        icon: 'mongodb',
        name: 'mongoDB',
        rate: 4
      },
      {
        icon: '',
        name: 'Hoge',
        rate: 2
      },
      {
        icon: '',
        name: 'Hoge',
        rate: 2
      },
    ]
  }
]

export const Skill = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <ContentTitle icon={faWandSparkles} title={'Skill'} />
        {data.map((skills, i) => (
          <SkillSection key={i} skills={skills} />
        ))}
      </div>
    </>
  )
}