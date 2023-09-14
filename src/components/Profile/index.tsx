import { UserIcon } from "./UserIcon"
import { UserName } from "./UserName"
import { UserJob } from "./UserJob"
import { UserBirth } from "./UserBirth"
import { UserEngineering } from "./UserEngineering"
import { SnsLinks } from "../SnsLinks"

export const Profile = () => {
  return (
    <>
      <div className='relative top-0 left-0 w-1/3 h-full bg-main dark:bg-bg_dark'>
        <div className="flex-center flex-col gap-3 w-full h-full">
          <UserIcon />
          <UserName />
          <UserJob />
          <div className="flex-center gap-8">
            <UserBirth />
            <UserEngineering />
          </div>
          <SnsLinks />
        </div>
      </div>
    </>
  )
}