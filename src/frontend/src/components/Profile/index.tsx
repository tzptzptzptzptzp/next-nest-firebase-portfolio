import { useEffect, useState } from "react"

import { UserIcon } from "./UserIcon"
import { UserName } from "./UserName"
import { UserJob } from "./UserJob"
import { UserBirth } from "./UserBirth"
import { UserEngineering } from "./UserEngineering"
import { SnsLinks } from "../SnsLinks"

import { useAppSelector } from "@/redux/hooks"

import { profileType } from "@/types/data.type"

export const Profile = ({ data }: { data: profileType }) => {
  const [loading, setLoading] = useState(true)
  const isLoading = useAppSelector((state) => state.data.loading)

  useEffect(() => {
    if (!isLoading) setLoading(false)
  }, [isLoading])
  return (
    <div className='relative top-0 left-0 w-1/4 h-full color-main'>
      <div className="flex-center flex-col gap-3 w-full h-full">
        <UserIcon />
        <UserName data={{ name: data.name, nickname: data.nickname }} loading={loading} />
        <UserJob data={data.occupation} loading={loading} />
        <div className="flex-center gap-8">
          <UserBirth data={data.date.birth} loading={loading} />
          <UserEngineering data={data.date.engineering} loading={loading} />
        </div>
        <SnsLinks data={{ sns: data.sns, link: data.link }} loading={loading} />
      </div>
    </div>
  )
}