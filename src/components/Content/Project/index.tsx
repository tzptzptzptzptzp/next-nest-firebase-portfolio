import { faFilm } from "@fortawesome/free-solid-svg-icons"
import { ContentTitle } from "../Title"
import { ProjectBox } from "./Box"

const projectData = [
  {
    titleJa: '金融系メディア機能改修',
    titleEn: 'Financial media function improvements',
    descriptionJa: 'Laravelアプリケーションの新規機能実装などを担当',
    descriptionEn: 'Responsible for implementing new features of Laravel applications.',
    technology: [
      'Laravel',
      'WordPress',
      'EC2'
    ]
  },
  {
    titleJa: 'Financial media function improvements',
    titleEn: 'Financial media function improvements',
    descriptionJa: 'Financial media function improvements. Financial media function improvements',
    descriptionEn: 'Financial media function improvements. Financial media function improvements',
    technology: [
      'React',
      'Next.js',
      'Firebase'
    ]
  },
  {
    titleJa: 'Financial media function improvements',
    titleEn: 'Financial media function improvements',
    descriptionJa: 'Financial media function improvements',
    descriptionEn: 'Financial media function improvements',
    technology: [
      'React',
      'Next.js',
      'Firebase'
    ]
  },
]

export const Project = () => {
  const oddIndexProjects = projectData.filter((_, index) => index % 2 !== 1);
  const evenIndexProjects = projectData.filter((_, index) => index % 2 !== 0);
  return (
    <>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faFilm} title={'Project'} />
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            {oddIndexProjects.map((data) => (
              <ProjectBox data={data} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {evenIndexProjects.map((data) => (
              <ProjectBox data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}