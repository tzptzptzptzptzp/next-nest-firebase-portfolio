import { ContentTitle } from "../Title"
import { faAddressCard } from "@fortawesome/free-regular-svg-icons"

export const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faAddressCard} title={'About me'} />
        <div className="w-full px-4">
          <p className="w-full text-[1.8rem] leading-relaxed whitespace-pre-wrap">
          </p>
        </div>
      </div>
    </>
  )
}