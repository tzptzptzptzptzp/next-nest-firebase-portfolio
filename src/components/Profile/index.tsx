import { UserIcon } from "./UserIcon"
import { UserName } from "./UserName"
import { UserJob } from "./UserJob"
import { UserBirth } from "./UserBirth"
import { UserEngineering } from "./UserEngineering"
import { SnsLinks } from "../SnsLinks"

import { profileType } from "@/types/data.type"

export const Profile = ({ data }: { data: profileType }) => {

  return (
    <>
      <div className='relative top-0 left-0 w-1/4 h-full color-main'>
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