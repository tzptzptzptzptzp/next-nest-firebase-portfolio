import { ContentTitle } from "../Title"
import { faRocket } from "@fortawesome/free-solid-svg-icons"

export const Enhancing = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-10">
          <ContentTitle icon={faRocket} title={'Enhancing'} />
          {/* eslint-disable-next-line */}
          <img src="https://skillicons.dev/icons?i=aws,gcp,azure,react,vue,flutter,graphql,gulp,nextjs,php,redux,supabase,vercel" alt="" />
        </div>
      </div>
    </>
  )
}