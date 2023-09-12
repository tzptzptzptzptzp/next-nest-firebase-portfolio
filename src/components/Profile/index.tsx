import { UserIcon } from "./UserIcon"
import { UserName } from "./UserName"
import { UserJob } from "./UserJob"
import { UserBirth } from "./UserBirth"
import { UserEngineering } from "./UserEngineering"

export const Profile = () => {
  return (
    <>
      <div className="flex-center flex-col gap-3 w-full h-full">
        <UserIcon />
        <UserName />
        <UserJob />
        <div className="flex-center gap-8">
          <UserBirth />
          <UserEngineering />
        </div>
      </div>
    </>
  )
}