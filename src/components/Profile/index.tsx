import { UserBirth } from "./UserBirth"
import { UserIcon } from "./UserIcon"
import { UserJob } from "./UserJob"
import { UserName } from "./UserName"

export const Profile = () => {
  return (
    <>
      <div className="flex-center flex-col gap-3 w-full h-full">
        <UserIcon />
        <UserName />
        <UserJob />
        <div className="flex">
          <UserBirth />
        </div>
      </div>
    </>
  )
}