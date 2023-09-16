import { ContentTitle } from "../Title"
import { faStar } from "@fortawesome/free-regular-svg-icons"

export const Favorite = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-8">
          <ContentTitle icon={faStar} title={'Favorite'} />
          {/* eslint-disable-next-line */}
          <img src="https://skillicons.dev/icons?i=aws,gcp,azure,react,vue,flutter,graphql,gulp,nextjs,php,redux,supabase,vercel" alt="" />
        </div>
      </div>
    </>
  )
}